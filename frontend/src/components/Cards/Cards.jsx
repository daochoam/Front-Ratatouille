import styles from './Cards.module.css';
import Card from '../Card/Card.jsx';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Cards({ Recipes }) {
  return (
    <div
      style={{
        display: 'flex',
        position: 'relative',
        flexDirection: 'column',
      }}>
      <div className={styles.Cards}>
        {Recipes &&
          Recipes.map((recipe, index) => {
            return (
              <Card
                key={index}
                recipe={{ ...recipe }}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Cards;
