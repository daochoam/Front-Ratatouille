import React from 'react';
import styles from './NavBar.module.css';
import { NavLink } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar';
import { ReactComponent as Icon } from '../../assets/images/logoNav.svg';

const navNavigate = [
  { name: 'Home', link: '/home' },
  { name: 'About', link: '/about' },
  { name: 'Create Recipe', link: '/formRecipe' }
]

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      character: '',
      background: ''
    };
  }

  changeBackground = (newImage) => {
    this.setState({ ...this.state, background: newImage });
  };
  CharacterRnd = () => {
    const Characters = ["Alfredo Linguini", "Remy", "Chef Skinner", "Colette Tatou", "Anton Ego", "Emile", "Dug", "Auguste Gusteau"];
    const characterSelected = Characters[Math.floor(Math.random() * Characters.length)];
    this.setState({ character: characterSelected });
  };

  cleanCharacter = () => {
    this.setState({ character: '' });
  };

  render() {
    return (
      <div className={styles.NavBar} >
        <div className={styles.NavLogo} key='NavLogo' >
          <NavLink to="/" className={styles.NavIcon} title={`go home ${this.state.character}`} >
            <Icon width="50" height="50" />
          </NavLink>
        </div>
        <div className={styles.NavDir} >
          {navNavigate.map(({ name, link }, index) => {
            return <NavLink className={styles.NavLinkActive} to={link} key={index} > <p>{name}</p> </NavLink>

          })}
        </div>
        {this.props.onSearch ? <SearchBar className={styles.SearchBar} onSearch={this.props.onSearch} /> : null}
      </div>
    );
  }
}

export default NavBar;