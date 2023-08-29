import { React, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './NavTab.css';
import account from '../../images/NIGER.svg';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

function NavTab({ isLogged }) {
  return isLogged ? MoviesMenu() : PlaceMenu();
};

function PlaceMenu() {
  return (
    <nav className='nav-place'>
      <Link className='nav-place__link-reg' to='/signup'>Регистрация</Link>
      <Link className='nav-place__link-login' to='/signin'>Войти</Link>
    </nav>
  );
};

function MoviesMenu() {
  const setActive = ({ isActive }) => (isActive ? 'nav-movies__link nav-movies__link_active' : 'nav-movies__link');
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const toggleBurgerMenu = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen)
  };
  const burgerMenu = () => {
    if (!isBurgerMenuOpen) {
      return (<button className='nav-movies__burger-button' onClick={toggleBurgerMenu} />)
    }
    return <BurgerMenu onClose={toggleBurgerMenu} />
  };

  return (
    <nav className='nav-movies'>
      <div className='nav-movies__links'>
        <NavLink className={setActive} to='/movies'>Фильмы</NavLink>
        <NavLink className={setActive} to='/saved-movies'>Сохранённые фильмы</NavLink>
      </div>
      <div className='nav-movies__account-button-cover'>
        <Link className='nav-movies__account-button' to='/profile'>
          <img src={account} alt="аккаунт" />
          Аккаунт
        </Link>
      </div>
      {burgerMenu()}
    </nav>
  );
};

export default NavTab;