import React from 'react';
import Culprit from '../Culprit/Culprit';


const CulpritsList = ({ culprits }) => {
  const renderCulpritsList = () => {
    culprits.map((culprit, index) => {
      return <Culprit key={index} culprit={culprit} />;
    });
  };

  return (
    <ul>
      { renderCulpritsList() }
    </ul>
  );
};


export default CulpritsList
