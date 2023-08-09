import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Detail.module.css';
import { useParams } from 'react-router-dom';
import { handlerNames } from '../../services';

const detailInfo = {
  name: '',
  image: ' ',
  healthScore: 'Health Score: ',
  diets: 'Diets: ',
  summaryOfDish: ' Summary Of Dish: ',
};
function Detail(props) {
  const { detailId } = useParams();
  const recipes = useSelector((state) => state.recipes);

  // eslint-disable-next-line eqeqeq
  const recipe = recipes.find(({ id }) => id.toString() === detailId.trim());
  console.log(recipes);
  console.log(recipe.stepByStep.key);


  return (
    <div className={styles.Detail}>
      <div className={styles.DetailInfo}>
        {Object.entries(recipe)?.map(([key, value], index) => {
          if (key in detailInfo) {
            if (key === 'image') {
              <div className={styles.BackImageInfo}>
                <div className={styles.BackImage}>
                  <img className={styles.Image} src={recipe[key]} alt={recipe.name} key={index} title={recipe.name} />
                </div>
              </div>

            }
            else {
              return (
                <div className={styles.CardKey} key={index} title={recipe[key]}>
                  {key !== 'name' ? key in detailInfo ? detailInfo[key] : null : null}
                  <div className={styles.CardValue}>
                    {key === 'name' ? (<h2>{recipe.name}</h2>) :
                      key === 'diets' ? handlerNames(recipe[key].join(', ')) :
                        key === 'summaryOfDish' ? <div dangerouslySetInnerHTML={{ __html: recipe[key] }} /> :
                          recipe[key]}
                  </div>
                </div>
              );
            }
          }
          return null; // Opción para el caso en que la clave no esté presente en detailInfo
        })}
      </div>
      {Object.keys(recipe.stepByStep).length && <div className={styles.DetailSteps}>
        <h3 className={styles.CardKey} title={'Steps'}> Steps:{' '}
        </h3>
        <ul className={styles.UnorderedList}>
          {Object.entries(recipe.stepByStep).map(([key, value]) => {
            return (
              <li key={key}>
                <strong>Step {key}:</strong> <span className={styles.TextStep}> {value}</span>
              </li>
            );
          })}
        </ul>
      </div>}
    </div>
  );
}

export default Detail;
