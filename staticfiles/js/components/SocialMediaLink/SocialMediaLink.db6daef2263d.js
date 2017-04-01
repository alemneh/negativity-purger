import React from 'react';
import styles from './SocialMediaLink.css';

const SocialMediaLink = ({ name, url }) => {
  return (
    <li className={styles.twitterBtn}>
      <a href={url}>{name}</a>
    </li>
  )
};

export default SocialMediaLink;
