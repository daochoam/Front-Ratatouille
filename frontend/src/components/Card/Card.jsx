import { handlerNames } from '../../services';
import styles from './Card.module.css';
import { Link } from 'react-router-dom'


const titleRecipe = {
  id: "", name: "", image: " ", healthScore: "Health Score: ", diets: "Diets: "
}

function Card({ recipe }) {
  return (
    <div className={styles.Card}>
      <div className={styles.CardInfo}>
        <div className={styles.Info}>
          {Object.entries(recipe).map(([key, value], index) => {
            if (key in titleRecipe) {
              if (key === "image") {
                return (
                  <img
                    className={styles.CardImage}
                    src={recipe[key]}
                    alt={recipe.name}
                    key={index}
                    title={recipe.name}
                  />
                );
              } else if (key !== "id") {
                return (
                  <h3 className={styles.CardKey} key={index} title={recipe[key]}>
                    {key !== "name" ? (key in titleRecipe ? titleRecipe[key] : null) : null}
                    <p className={styles.CardValue}>
                      {key === "name" ? (
                        <Link to={`/detail/${recipe.id}`} className={styles.CardLink}>
                          <h2>{recipe.name}</h2>
                        </Link>
                      ) : key === "diets" ? (
                        recipe[key].map(diet => handlerNames(diet)).join(", ")
                      ) : (
                        recipe[key]
                      )}
                    </p>
                  </h3>
                );
              }
            }
            return null;
          })}

        </div>
      </div>
    </div>
  )
};



export default Card;

