import React, { useState } from 'react';
import styles from './SearchBar.module.css';

function SearchBar({onSearch}) {
    const [id,setId]=useState("");

    const handleChange = (event) => {
        setId(event.target.value);
    }

    const handleSearch = () => {
        onSearch(id);
        setId('');
      };

    return (
        <div className={styles.SearchBar}> 
        <input className={styles.searchInput} value={id} onChange={handleChange} type="search" />
         <button className={styles.searchButton} onClick={handleSearch} >Agregar</button>
      </div>
      )
  };

export default SearchBar;
