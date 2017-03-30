import React from 'react';

const SocialMediaLink = ({ name, url }) => {
  return (
    <li>
      <a href={url}>{name}</a>
    </li>
  )
};

export default SocialMediaLink;
