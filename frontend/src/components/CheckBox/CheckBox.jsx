import React, { useState } from 'react';
import styles from './CheckBox.module.css';
import {
  handlerNames
} from '../../services';

/**
 * CheckBox
 * @param {*} infoCheck Selection information that renders the component 
 * @param {*} initCheck 
 * @param {*} onChange 
 * @param {*} errors 
 * @returns 
 */
function CheckBox({ infoCheck, initCheck, onChange, errors }) {
  const [check, setChecked] = useState(initCheck || []);


  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    let currentCheck = []
    if (checked) {
      currentCheck = [...check, value]
      setChecked(currentCheck);
    } else {
      currentCheck = check.filter((item) => item !== value)
      setChecked(currentCheck)
    }
    onChange(currentCheck)
  };

  return (

    <div className={styles.CheckBox}>
      {infoCheck.map(obj => Object.values(obj)).map(value => {
        return (
          <label className={styles.Check} key={value[0]}>
            <input
              type="checkbox"
              value={value[0]}
              checked={check.includes(value[0].toString())}
              onChange={(e) => { handleCheckboxChange(e) }}
            />
            <span className={styles.Checkmark}></span>
            <span className={styles.CheckLabel}>{handlerNames(value[1])}</span>
          </label>)
      })}
      {errors && <label className={styles.ErrorLabel}>{errors}</label>}
    </div>

  )
};

export default CheckBox;
