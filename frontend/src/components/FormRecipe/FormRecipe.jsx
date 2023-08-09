import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import styles from './FormRecipe.module.css';
import {
  handlerInputChange,
  handlerValidateRecipe,
  handlerClearObject,
  handlerIsObjectEmpty,
} from '../../services';
import { createRecipe } from '../../redux/actions';
import Steps from '../Steps/Steps';
import CheckBox from '../CheckBox/CheckBox';
import UploadPhoto from '../UploadPhoto/UploadPhoto';

function FormRecipe(props) {
  const dispatch = useDispatch()
  const typesDiets = useSelector((state) => state.typesDiets)
  const [recipe, setRecipe] = useState({
    name: '',
    summaryOfDish: '',
    healthScore: 0,
    image: '',
    stepByStep: [{ 0: '' }],
    diets: []
  });
  const [error, setError] = useState({})

  const handlerInputs = (event) => {
    const { currentState } = handlerInputChange(event, recipe, setRecipe)
    setError(handlerValidateRecipe(currentState))
  }

  const handleCheckboxChange = (updatedDiet) => {
    const currentState = { ...recipe, diets: updatedDiet }
    setRecipe(currentState);
    setError(handlerValidateRecipe(currentState))
  };

  const handlerStepsChange = (updatedStepsByStep) => {
    const currentState = { ...recipe, stepByStep: { ...updatedStepsByStep.map(({ value }) => value) } }
    setRecipe(currentState);
    setError(handlerValidateRecipe(currentState))

  };

  function handlerSubmit(event) {
    event.preventDefault();
    let Errors = { ...error }
    let Recipes = { ...recipe }
    if (!handlerIsObjectEmpty(Errors)) {
      alert('Please verify the information on the form')
    }
  };
  console.log(error)
  return (
    <>
      <div className={styles.FormRecipe} onSubmit={(event) => handlerSubmit(event)}>
        <div className={styles.InfoRecipe}>
          <div className={styles.InfoHeader}>
            <div className={styles.InfoFiles}>
              <div className={styles.InfoImage}>
                <UploadPhoto className={`width: 100px;height: 100px;`} />
              </div>
            </div>
            <div style={{ width: '100%' }}>
              <div className={styles.InfoFiles}>
                <label className={styles.LabelInputs}>Name: </label>
                <input className={styles.InputRecipe} type="text"
                  autoComplete="off"
                  value={recipe.name}
                  name='name'
                  placeholder='Add name...'
                  onChange={(e) => { handlerInputs(e) }}
                />
                {error.name !== '' ? <label className={styles.ErrorLabel}>{error.name}</label> : null}
              </div>

              {/* <div className={styles.InfoFiles}>
                <label className={styles.LabelInputs}>Image: </label>
                <input className={styles.InputRecipe}
                  type="text"
                  value={recipe.image}
                  name='image'
                  placeholder='Add image...'
                  onChange={(e) => { handlerInputs(e) }}
                />
                {error.iamge !== '' ? <label className={styles.ErrorLabel}>{error.image}</label> : null}
              </div> */}



              <div className={styles.InfoFiles}>
                <label className={styles.LabelInputs}>Health Score: </label>
                <input className={styles.InputRecipe}
                  type="number"
                  value={recipe.healthScore}
                  name='healthScore'
                  onChange={(e) => { handlerInputs(e) }}
                />
                {error.healthScore !== '' ? <label className={styles.ErrorLabel}>{error.healthScore}</label> : null}
              </div>
            </div>
          </ div>

          <div className={styles.InfoFiles}>
            <label className={styles.LabelInputs} >Diets:</label>
            <CheckBox
              infoCheck={typesDiets}
              initCheck={recipe.diets}
              onChangeCheck={handleCheckboxChange}
              errors={error.diets} />
            <div className={styles.Line}></div>
          </div>

          <div className={styles.InfoFiles}>
            <label className={styles.LabelInputs}>Summary Of Dish: </label>
            <textarea className={styles.TextAreaRecipe}
              type="text"
              value={recipe.summaryOfDish}
              name='summaryOfDish'
              placeholder='Write summary of the Recipe...'
              maxLength={300} // Establece el tamaño máximo de caracteres (100 en este ejemplo)
              rows={4} // Opcional: Establece el número de filas que se mostrarán inicialmente
              cols={40}
              onChange={(e) => { handlerInputs(e) }}
            />
            {error.summaryOfDish !== '' ? <label className={styles.ErrorLabel}>{error.summaryOfDish}</label> : null}
          </div>
        </div>

        <div className={styles.InfoSteps}>


          <label className={styles.LabelInputs}>Steps:</label>
          <Steps
            initialSteps={recipe.stepByStep}
            onChangeSteps={handlerStepsChange}
            errors={error.stepByStep} />
        </div>


        <div>
          {((recipe.name !== '') && (!error.name) && (recipe.summaryOfDish !== '')) ?

            <button type='submit'>Recipes Create</button> : null
          }
        </div>

      </div>
    </>

  )
}

export default FormRecipe;
