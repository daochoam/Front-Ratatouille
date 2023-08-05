import PropTypes from 'prop-types';
import styles from './FilterBar.module.css';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllDiets } from '../../redux/actions';
import { handlerNames } from '../../services';

function FilterBar({ Diets }) {
  const [order, setOrder] = useState('asc');
  const [selectedField, setSelectedField] = useState('score');
  const [checkedDiet, setCheckedDiet] = useState([]);
  // const [recipes, setRecipe] = useState([])

  const handleOrderChange = (event) => {
    setOrder(event.target.value);
  };

  const handleFieldChange = (event) => {
    setSelectedField(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setCheckedDiet((prevCheckedItems) => [...prevCheckedItems, value]);
    } else {
      setCheckedDiet((prevCheckedItems) =>
        prevCheckedItems.filter((item) => item !== value)
      );
    }
  };

  return (
    <div className={styles.FilterBar}>
      <div className={styles.Selector}>
        <label htmlFor="order">Order:</label>
        <select className={styles.SelectOrder} id="order" value={order} onChange={handleOrderChange}>
          <option value="" disabled selected>Select Order</option>
          <option value="asc">Ascendente</option>
          <option value="desc">Descendente</option>
        </select>
      </div>

      <div className={styles.Selector}>
        <label htmlFor="field">Campo:</label>
        <select className={styles.SelectOrder} id="field" value={selectedField} onChange={handleFieldChange}>
          <option value="score">Score</option>
          <option value="health">Health</option>
          <option value="name">Name</option>
          <option value="diets">Diets</option>
        </select>
      </div>

      <div className={styles.CheckDiet}>
        {Diets.map(({ id, name }) => (
          <div key={id} className={styles.Checkbox}>
            <input
              type="checkbox"
              value={name}
              checked={checkedDiet.includes(name)}
              onChange={handleCheckboxChange}
            /><label>{handlerNames(name)}</label>
          </div>
        ))}
      </div>
    </div>
  )
};

FilterBar.propTypes = {};

FilterBar.defaultProps = {};

export default FilterBar;
