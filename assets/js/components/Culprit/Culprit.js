import React from 'react';

const Culprit = ({ culprit }) => {
  return (
    <li>
      <div><img src={culprit.pic_url} /></div>
      <div>
        <h3>{ culprit.name }</h3>
        <p>Tweets by { culprit.name } on average are { culprit.polarity }% negative.</p>
      </div>
    </li>
  );
};

export default Culprit;
