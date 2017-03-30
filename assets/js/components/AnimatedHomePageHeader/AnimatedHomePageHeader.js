import React from 'react';
import styles from './AnimatedHomePageHeader.css';
const loaded_style = styles.loaded;


const AnimatedHomePageHeader = ({ loaded }) => {
  let style_for_load = loaded ? ' ' + loaded_style : '';

  return (
    <div className={styles.textContainer}>
      <span className={styles.regText + style_for_load}>Purge </span>
      <span className={styles.letter + style_for_load}> </span>
      <span className={styles.letter + style_for_load}>N</span>
      <span className={styles.letter + style_for_load}>e</span>
      <span className={styles.letter + style_for_load}>g</span>
      <span className={styles.letter + style_for_load}>a</span>
      <span className={styles.letter + style_for_load}>t</span>
      <span className={styles.letter + style_for_load}>i</span>
      <span className={styles.letter + style_for_load}>v</span>
      <span className={styles.letter + style_for_load}>i</span>
      <span className={styles.letter + style_for_load}>t</span>
      <span className={styles.letter + style_for_load}>y</span>
    </div>
  )
};


export default AnimatedHomePageHeader;
