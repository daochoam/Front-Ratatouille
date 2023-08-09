import React, { useState } from 'react';
import styles from './MultiSelect.module.css';
import {
  handlerNames
} from '../../services';

function MultiSelect({ options, onChangeSelect, initSelect, msgDefault, param = false }) {
  const [selected, setSelected] = useState(initSelect || []);
  const [messagesDefault, setMessagesDefault] = useState({ key: '', value: msgDefault || 'Select options...' })

  const handleSelectChange = (event) => {
    const { value } = event.target
    let currentSelected = [...selected]
    if (selected.includes(value)) {
      currentSelected = currentSelected.filter(selected => selected !== value)
    }
    else {
      currentSelected = [...currentSelected, value]
    }
    setSelected(currentSelected);
    onChangeSelect(currentSelected)
  };

  return (
    <select className={styles.Selecter} value={''} onChange={handleSelectChange}>
      {[messagesDefault, ...options].map(obj => Object.values(obj)).map((value, index) => {
        return (
          selected.includes(value[param ? 1 : 0]) ? <option
            key={index}
            value={value[param ? 1 : 0]}
            className={styles.Selected}
          >{handlerNames(value[1])}
          </option> :
            <option
              key={index}
              value={value[param ? 1 : 0]}
              className={styles.Select}
            >{handlerNames(value[1])}
            </option>
        )
      })}
    </select>
  );
};

export default MultiSelect;
