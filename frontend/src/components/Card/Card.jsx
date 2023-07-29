import React, { useEffect, useState } from 'react';
import styles from './Card.module.css';
import {Link} from 'react-router-dom'
import { addFavorite, removeFavorite } from '../../redux/index.js';
import { connect, useDispatch } from 'react-redux';
import { handlerFavorite } from '../../services';

function Card({recipe, onClose,addFavorite, removeFavorite}) {
  const dispatch = useDispatch()
  const [isFavorite,setIsFavorite]= useState(false)
  
  const handlerFav = () => {
    handlerFavorite(recipe, { state: isFavorite, setState: setIsFavorite},
      { addFavorite: addFavorite, rmvFavorite: removeFavorite}
    )}
  
  const btnClose = () => {
    removeFavorite(recipe.Id)
    onClose(recipe.Id)
  }
    
    return (
        <div className={styles.Card}>
					{isFavorite ? 
          (<button onClick={handlerFav}>❤️</button>) : 
          (<button onClick={handlerFav}>🤍</button>)}

          <button className={styles.CardBtn} 
            onClick={btnClose}
            title="close">X
          </button>
          
          {Object.keys(recipe).map((key,index) => {
            if(key==="image"){
              return (
							<img className={styles.CardImage} 
							src={recipe[key]}
							alt={recipe.name}
							key={index}
							title={recipe.name}/>
							)
						}

            if(key!=='id'){ 
              return ( 
              <h3 className={styles.CardKey}  key={index}  title={recipe[key]}> 
                {key!=='name'?`${key}: `:null}
                <p className={styles.CardValue}>
                {key==='name'?<Link to={`/detail/${recipe.id}`} className={styles.CardLink}>{recipe.name}</Link>:recipe[key]}
                </p>
              </h3> )}
            else return null
            })}
         </div>
       )
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      addFavorite: (recipe) => {dispatch(addFavorite(recipe))},
      removeFavorite: (id) => {dispatch(removeFavorite(id))}
    }
}

export default connect(null, mapDispatchToProps)(Card);

