import React from 'react';
import styles from './Loading.module.css';

function Loading({ gifUrl }) {
  return (
    <div className={styles.Loading}>
      <div className={styles.LoadGIF}>
        <img src={gifUrl} alt="Loading..." />
      </div>
    </div>
  )
};

Loading.propTypes = {};

Loading.defaultProps = {};

export default Loading;
