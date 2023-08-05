
import styles from './Home.module.css';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRecipes, getAllDiets } from '../../redux/actions'
import Cards from '../Cards/Cards';
import Loading from '../Loading/Loading';
import FilterBar from '../FilterBar/FilterBar';
import Paginated from '../Paginated/Paginated';


function Home(props) {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);
  const diets = useSelector((state) => state.typesDiets);
  // const [recipes, setRecipe] = useState([])

  //! HOOKS
  // TODO: onSearch onClose Function

  useEffect(() => {
    recipes.length === 0 && dispatch(getRecipes());
    diets.length === 0 && dispatch(getAllDiets());
  }, [dispatch, recipes, diets]);

  if (!recipes.length) {
    return (<Loading />)
  }

  return (
    <div className={styles.Home}>
      <FilterBar Diets={diets} />
      <Cards Recipes={recipes} />
      {/* <Paginated/> */}
    </div>
  )
};

export default Home;
