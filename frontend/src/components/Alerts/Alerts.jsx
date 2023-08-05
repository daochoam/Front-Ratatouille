import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Alerts.module.css';

function Alerts({ message, duration = 3000 }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [duration]);
  return (
    <div className={styles.Alerts}>
      <div>
        {message}
      </div>
    </div>
  )
};

Alerts.propTypes = {};

Alerts.defaultProps = {};

export default Alerts;
