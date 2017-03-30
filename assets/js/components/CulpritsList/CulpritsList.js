import React from 'react';
import styles from './CulpritsList.css';
import Culprit from '../Culprit/Culprit';


const CulpritsList = ({ culprits }) => {
  const renderCulpritsList = () => {
    return (
      culprits.data.map((culprit, index) => {
        return <Culprit key={index} culprit={culprit} />;
      })
    )
  };

  return (
    <ol className={styles.culpritList}>
      { renderCulpritsList() }
    </ol>
  );
};


export default CulpritsList
