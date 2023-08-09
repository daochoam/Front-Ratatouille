import styles from './Home.module.css';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRecipes, getAllDiets } from '../../redux/actions'
import Cards from '../Cards/Cards';
import Loading from '../Loading/Loading';
import FilterBar from '../FilterBar/FilterBar';
import Paginated from '../Paginated/Paginated';
import Waiting from './../../assets/images/Loading.gif'
import {
  handlerFilterByArray,
  handlerFilterByFieldOrder,
  handlerFilterByName,
  handlerFilterByOrigin
} from '../../services';



function Home(props) {
  const dispatch = useDispatch();
  //! HOOKS
  //? UseSelectors
  const recipes = useSelector((state) => state.recipes);
  const diets = useSelector((state) => state.typesDiets);
  const filters = useSelector((state) => state.filters)

  //? UseState
  const [filterRecipes, setFilterRecipes] = useState([]);
  const [paginatedRecipe, setPaginatedRecipe] = useState([]);

  //? UseEffect
  useEffect(() => {
    recipes.length === 0 && dispatch(getRecipes());
    diets.length === 0 && dispatch(getAllDiets());
    filterRecipes.length === 0 && setFilterRecipes(recipes)
  }, [dispatch, recipes, diets, filterRecipes, paginatedRecipe]);

  if (!recipes.length) {
    return (<Loading gifUrl={Waiting} />)
  }

  const handlerFilter = (filter) => {
    let filteredRecipes = [...recipes];
    filteredRecipes = handlerFilterByArray(filteredRecipes, 'diets', filter.selectDiet)
    filteredRecipes = handlerFilterByFieldOrder(filteredRecipes, filter.field, filter.order)
    filteredRecipes = handlerFilterByOrigin(filteredRecipes, filter.origin)
    filteredRecipes = handlerFilterByName(filteredRecipes, filter.name)
    setFilterRecipes(filteredRecipes);
    // (() => handlerPaginated())()
  }

  const handlerPaginated = (dataPaginated) => {
    setPaginatedRecipe(dataPaginated)
  }


  return (
    <div className={styles.Home}>
      <FilterBar Diets={diets} initFilter={filters} onChangeFilter={handlerFilter} />
      <Paginated Data={filterRecipes} onDataSlice={handlerPaginated} itemsPerPage={9} />
      <Cards Recipes={paginatedRecipe} />
    </div>
  )
};

export default Home;
