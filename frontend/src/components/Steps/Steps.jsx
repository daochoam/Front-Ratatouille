import React, { useState } from 'react';
import {
  handlerAddSteps,
  handlerClearSteps,
  handlerRemoveSteps,
  handlerChangeSteps,
} from '../../services';
import styles from './Steps.module.css';

function Steps({ initSteps, onChangeSteps, errors }) {
  const [steps, setSteps] = useState(initSteps || [{ value: '' }]);

  const changeSteps = (event, index) => {
    const currentSteps = handlerChangeSteps(event, index, steps, setSteps);
    onChangeSteps(currentSteps);
  }

  const AddSteps = (index) => {
    handlerAddSteps(index, steps, setSteps);
  }

  const RemoveSteps = async (index) => {
    const currentSteps = handlerRemoveSteps(index, steps, setSteps)
    onChangeSteps(currentSteps);
  }

  const ClearSteps = (index) => {
    const currentSteps = handlerClearSteps(index, steps, setSteps)
    onChangeSteps(currentSteps);
  };

  return (
    <div className={styles.Steps}>
      {steps.map(obj => Object.values(obj)).map((step, index) => (
        <div className={styles.BlokStep} key={index} style={{ display: 'flex', alignItems: 'start' }}>
          <div className={styles.StepStep}>
            <textarea
              className={styles.TextAreaStep}
              placeholder={`Describe step ${index + 1}...`}
              value={step[0]}
              maxLength={90}
              onChange={(event) => changeSteps(event, index)}
              style={{ marginRight: '10px' }}
            />
            {errors && errors[index] && <label className={styles.ErrorLabel}>{errors[index]}</label>}
          </div>
          <div className={styles.Btn}>
            <button className={styles.BtnStep} onClick={() => ClearSteps(index)}>CLEAR</button>
            {Object.keys(steps).length !== 1 && <button className={styles.BtnStep} onClick={() => RemoveSteps(index)}>DELETE</button>}
            <button className={styles.BtnStep} onClick={() => AddSteps(index)}>ADD</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Steps;
