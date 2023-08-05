import React from 'react';
import PropTypes from 'prop-types';
import styles from './Landing.module.css';
import { NavLink } from 'react-router-dom'

function Landing(props) {
    return (

        <div className={styles.Landing}>
            <h1 className={styles.Welcome}></h1>
            <NavLink to="/home" className={styles.link}>
                <h1 className={styles.GoHome}>WELCOME TO RATATOUILLE!</h1>
            </NavLink>
        </div>

    )
};



export default Landing;
