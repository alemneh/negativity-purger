import React from 'react';
import SocialMediaLink from '../SocialMediaLink/SocialMediaLink'


const SocialMediaList = () => {
  return (
    <ul>
      <SocialMediaLink name="Twitter" url="accounts/twitter/login" />
      <SocialMediaLink name="Facebook" url="accounts/facebook/login" />
    </ul>
  )
}

export default SocialMediaList;
