import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchBar.module.css';

function SearchBar(props) {
    return (
        <div className={styles.SearchBar}> SearchBar Component </div>
        )
  };

SearchBar.propTypes = {};

SearchBar.defaultProps = {};

export default SearchBar;
