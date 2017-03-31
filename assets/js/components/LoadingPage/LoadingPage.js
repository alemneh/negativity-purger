import React from 'react';
import styles from './LoadingPage.css';

const Loading = () => {
  return (
      <div className={styles.wrapper}>
        <div className={styles.focus}>
          purging
        </div>
        <div className={styles.mask}>
          <div className={styles.text}>purging</div>
        </div>
      </div>
  );
};


export default Loading;
