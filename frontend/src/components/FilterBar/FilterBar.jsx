import styles from './FilterBar.module.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import MultiSelect from '../MultiSelect/MultiSelect';
import { filterByDiets, filterByField, filterByName, filterByOrder, filterByOrigin } from '../../redux/actions';


function FilterBar({ Diets, onChangeFilter, initFilter }) {
  const dispatch = useDispatch()
  const [filter, setFilter] = useState(initFilter || {
    field: 'All',
    order: 'All',
    origin: 'All',
    name: '',
    selectDiet: []
  })

  const handlerOrderChange = (event) => {
    const { value } = event.target
    const currentFilter = { ...filter, order: value }
    setFilter(currentFilter);
    onChangeFilter(currentFilter)
    dispatch(filterByOrder(value));
  };

  const handlerFieldChange = (event) => {
    const { value } = event.target
    const currentFilter = { ...filter, field: value }
    setFilter(currentFilter);
    onChangeFilter(currentFilter)
    dispatch(filterByField(value));
  };

  const handlerOriginChange = (event) => {
    const { value } = event.target
    const currentFilter = { ...filter, origin: value }
    setFilter(currentFilter);
    onChangeFilter(currentFilter)
    dispatch(filterByOrigin(value));
  };

  const handlerDietChange = (updatedDiet) => {
    const currentFilter = { ...filter, selectDiet: [...updatedDiet] }
    setFilter(currentFilter);
    onChangeFilter(currentFilter)
    dispatch(filterByDiets(updatedDiet));
  };

  const handlerSearchName = (event) => {
    const { value } = event.target
    const currentFilter = { ...filter, name: value }
    setFilter(currentFilter);
    onChangeFilter(currentFilter)
    dispatch(filterByName(value));
  };

  return (
    <div className={styles.FilterBar}>

      <div className={styles.Selector}>
        <label htmlFor="field">Field:</label>
        <select className={styles.SelectOrder} id="field" value={filter.field} onChange={handlerFieldChange}>
          <option value="All">All</option>
          <option value="healthScore">Health Score</option>
          <option value="name">Name</option>
        </select>
      </div>

      <div className={styles.Selector}>
        <label htmlFor="order">Order:</label>
        <select className={styles.SelectOrder} id="order" value={filter.order} onChange={handlerOrderChange}>
          <option value='Ascendant'>{filter.field === "healthScore" ? "0-100" : "A-Z"}</option>
          <option value='Falling'>{filter.field === "healthScore" ? "100-0" : "Z-A"}</option>
        </select>
      </div>

      <div className={styles.Selector}>
        <label htmlFor="diets">Diets:</label>
        <MultiSelect options={Diets} onChangeSelect={handlerDietChange} initSelect={filter.selectDiet} param={true} />
      </div>

      <div className={styles.Selector}>
        <label htmlFor="order">Origin:</label>
        <select className={styles.SelectOrder} id="origin" value={filter.origin} onChange={handlerOriginChange}>
          <option value='All'>All</option>
          <option value='API'>API</option>
          <option value='DB'>Database</option>
        </select>
      </div>

      <div className={styles.Selector}>
        <label htmlFor="order">Search Name:</label>
        <div className={styles.SearchBar}>
          <input className={styles.searchInput} value={filter.name} onChange={handlerSearchName} type="search" />
        </div>
      </div>
    </div>
  )
};

FilterBar.propTypes = {};

FilterBar.defaultProps = {};

export default FilterBar;
