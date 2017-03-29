import React from 'react';

const Culprit = ({ culprit }) => {
  return (
    <li>
      <div><img src={culprit.pic_url} /></div>
      <div>
        <h3>{ culprit.name }</h3>
        <p>Tweets by { culprit.name } on average are { parseInt(-(culprit.polarity * 100)/culprit.number_of_tweets) }% negative.</p>
        <p>Number of negative tweets: {culprit.number_of_tweets}</p>
      </div>
    </li>
  );
};

export default Culprit;
