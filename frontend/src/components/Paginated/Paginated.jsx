import React from 'react';
import PropTypes from 'prop-types';
import styles from './Paginated.module.css';

function Paginated({ recipesPages, allRecipes, currentPage }) {

  const pageNumbers = []
  console.log(allRecipes)
  for (let i = 0; i < Math.ceil(allRecipes/recipesPages); i++) {
      pageNumbers.push(i + 1)
  }
  return (
  <div className={styles.BtnContainer}>
        <div className={styles.CenterFilter}><div>
          </div>
          </div>
          <div>
            <div>Preview</div>
            {pageNumbers.map(page => (
            <button className={styles.NumberButton} key={page} onClick={() => currentPage(page)}> {page} </button>
            ))}
            <div>Next</div>
          </div>

  </div>);
}
export default Paginated;
