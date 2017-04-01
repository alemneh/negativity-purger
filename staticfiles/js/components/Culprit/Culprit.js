import React from 'react';
import styles from './Culprit.css';

const Culprit = ({ culprit }) => {
  return (
    <li className={styles.culprit}>
      <div><img src={culprit.pic_url} /></div>
      <div>
        <h3>{ culprit.name }</h3>
        <small><b>Negative tweets:</b> {culprit.number_of_tweets}</small>
        <p>Tweets by { culprit.name } on average are { parseInt(-(culprit.polarity * 100)/culprit.number_of_tweets) }% negative.</p>
      </div>
    </li>
  );
};

export default Culprit;
