import React from 'react';
import SocialMediaLink from '../SocialMediaLink/SocialMediaLink'
import styles from './SocialMediaList.css';


const SocialMediaList = () => {
  return (
    <ul className={styles.socialLinks}>
      <SocialMediaLink name="Twitter" url="accounts/twitter/login" />
    </ul>
  )
}

export default SocialMediaList;
