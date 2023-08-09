import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faGoogle, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import styles from './Landing.module.css';
import { NavLink } from 'react-router-dom'

function Landing(props) {
    return (

        <div className={styles.Landing}>
            <header className={styles.header}>Bienvenido</header>
            <div className={styles.content}>
                <p>¡Comienza tu aventura!</p>
                <p className={styles.quote}>
                    “No todo el mundo puede convertirse en un gran artista, pero un gran artista puede venir de cualquier parte” - Anton Ego
                </p>
                <NavLink to="/home" className={styles.startButtonLink}>
                    <button className={styles.startButton}>Start... </button>
                </NavLink>
            </div>
            <footer className={styles.footer}>
                <div className={styles.socialIcons}>
                    <a href="https://github.com/daochoam">
                        <FontAwesomeIcon icon={faGithub} className={`${styles.icon} ${styles.github}`} />
                    </a>
                    <a href="https://www.linkedin.com/in/dfom89/">
                        <FontAwesomeIcon icon={faLinkedin} className={`${styles.icon} ${styles.linkedin}`} />
                    </a>
                    <a href="mailto:dfom89@gmail.com">
                        <FontAwesomeIcon icon={faGoogle} className={`${styles.icon} ${styles.google}`} />
                    </a>
                    <a href="https://wa.me/3168704626">
                        <FontAwesomeIcon icon={faWhatsapp} className={`${styles.icon} ${styles.whatsapp}`} />
                    </a>
                </div>
            </footer>

            {/* <h1 className={styles.Welcome}></h1>
            <NavLink to="/home" className={styles.link}>
                <h1 className={styles.GoHome}>WELCOME TO RATATOUILLE!</h1>
            </NavLink> */}
        </div>

    )
};



export default Landing;
