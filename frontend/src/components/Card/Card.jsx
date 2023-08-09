import { handlerNames } from '../../services';
import styles from './Card.module.css';
import { Link } from 'react-router-dom'
import knife from '../../assets/images/Knife.png';
import fork from '../../assets/images/Fork.png';


const titleRecipe = {
  id: "", name: "", image: " ", healthScore: "Health Score: ", diets: "Diets: "
}

function Card({ recipe }) {
  return (
    <div className={styles.Card}>
      <div className={styles.CardInfo}>
        <div className={styles.Info}>
          {Object.entries(recipe)?.map(([key, value], index) => {
            if (key in titleRecipe) {
              if (key === "image") {
                return (
                  <div className={styles.CardImage} key={index}>
                    <img
                      className={styles.CardImageUtils}
                      src={fork}
                      alt={`fork`}
                      key={`fork_${key}`}
                      title={`fork_${recipe[key]}`}
                      loading="lazy"
                    />
                    <img
                      className={styles.CardImagePlate}
                      src={recipe[key]}
                      alt={recipe.name}
                      key={index}
                      title={recipe.name}
                      loading="lazy"
                    />
                    <img
                      className={styles.CardImageUtils}
                      src={knife}
                      alt={`knife`}
                      key={`knife_${key}`}
                      title={`knife_${recipe[key]}`}
                      loading="lazy"
                    />
                  </div>
                );
              } else if (key !== "id") {
                return (
                  <h3 className={styles.CardKey} key={index} title={recipe[key]}>
                    {key !== "name" ? (key in titleRecipe ? titleRecipe[key] : null) : null}
                    <p className={styles.CardValue}>
                      {key === "name" ? (
                        <span className={styles.CardLink}>
                          <Link to={`/detail/${recipe.id}`}>
                            {recipe.name}
                          </Link>
                        </span>
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

