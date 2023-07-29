import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';

function Header(props) {
    return (
        <div className={styles.Header}> Header Component </div>
        )
  };

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
