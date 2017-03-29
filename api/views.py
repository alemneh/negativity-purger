from django.shortcuts import render
from django.http import JsonResponse
from allauth.socialaccount import providers
from allauth.socialaccount.models import SocialToken
import allauth.account
from common.util.twitter_purger import find_culprits

def index(request):
    access_token = SocialToken.objects.get(account__user=request.user, account__provider='twitter')
    culprits = find_culprits(access_token)
    return JsonResponse(culprits)
