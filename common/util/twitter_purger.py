import tweepy
from textblob import TextBlob
import os


consumer_key = os.environ.get('TWITTER_CONSUMERKEY', None)
consumer_secret = os.environ.get('TWITTER_CONSUMERSECRET', None)
access_token_secret = os.environ.get('TWITTER_ACCESSTOKENSECRET', None)


def scrub_tweets_for_negativity(tweets):
    """Scrub post for negativity and if present add culprit"""
    culprits = {}
    culprits['total_tweets'] = len(tweets)

    for tweet in tweets:
        #Grab poster's info
        text = tweet.text
        posters_name = tweet.user.name
        posters_profilepic_url = tweet.user.profile_image_url_https

        #Use textblob lib to see if there is any negativity
        testimonial = TextBlob(text)
        polarity = testimonial.sentiment.polarity

        #If polarity is negative culprit is found
        if polarity < 0:
            #if culprit is not in dic add them else add polarity
            if posters_name not in culprits:
                culprits[posters_name] = {
                    'polarity': polarity,
                    'pic_url': posters_profilepic_url,
                    'name': posters_name,
                    'number_of_tweets': 1,
                }
            else:
                culprits[posters_name]['polarity'] += polarity
                culprits[posters_name]['number_of_tweets'] += 1


    return manipulate_dic_for_json(culprits)


def manipulate_dic_for_json(dic):
    """Convert culprits to a list of dictonaries set to data key"""
    new_dictonary = {}
    new_dictonary['data'] = []
    new_dictonary['total_tweets'] = dic['total_tweets']

    for key in dic:
        if key != 'total_tweets':
            new_dictonary['data'].append(dic[key])

    return new_dictonary

def get_tweets(access_token):
    auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
    auth.set_access_token(str(access_token), access_token_secret)

    api = tweepy.API(auth)

    return api.home_timeline(count=200)


def find_culprits(access_token):
    """Returns a dictonary of all culprits and total number of tweets"""
    tweets = get_tweets(access_token)
    culprits = scrub_tweets_for_negativity(tweets)

    return culprits
