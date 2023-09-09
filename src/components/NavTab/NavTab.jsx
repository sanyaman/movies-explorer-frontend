import './NavTab.css';
import { React, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import account from '../../images/NIGER.svg';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

function NavTab({ isLogged }) {
  return isLogged ? MoviesMenu() : PlaceMenu();
}

function PlaceMenu() {
  return (
    <nav className='nav-place'>
      <Link className='nav-place__link-reg' to='/signup'>
        Регистрация
      </Link>
      <Link className='nav-place__link-login' to='/signin'>
        Войти
      </Link>
    </nav>
  );
}

function MoviesMenu() {
  const pathname = useLocation().pathname;

  // const setActive = ({ isActive }) => (isActive ? 'nav-movies__link nav-movies__link_active' : 'nav-movies__link');
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const toggleBurgerMenu = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  };
  const burgerMenu = () => {
    if (!isBurgerMenuOpen) {
      return (
        <button
          className={getClassProfileBurgerBtn()}
          onClick={toggleBurgerMenu}
        />
      );
    }
    return <BurgerMenu onClose={toggleBurgerMenu} />;
  };
  function getClassNavText(isActive) {
    if (pathname === '/' && !isActive) {
      if (isActive)
        return ' nav-movies__link nav-movies__link_place nav-movies__link_active';
      return 'nav-movies__link nav-movies__link_place';
    }
    if (isActive) return 'nav-movies__link nav-movies__link_active';
    return 'nav-movies__link';
  }

  function getClassProfileBurgerBtn(isActive) {
    if (pathname === '/' && !isActive) {
      return 'nav-movies__hamburger-buttone-white ';
    }
    return 'nav-movies__hamburger-buttone ';
  }

  function getClassProfileBtn(isActive) {
    if (pathname === '/' && !isActive) {
      return 'nav-place__account-button ';
    }
    return 'nav-movies__account-button ';
  }

  function getClassProfileIcon(isActive) {
    if (pathname === '/' && !isActive) {
      return 'nav-place__account-button-img ';
    }
    return 'nav-movies__account-button-img';
  }

  function getClassProfileConteiner(isActive) {
    if (pathname === '/' && !isActive) {
      return 'nav-place__account-conteiner';
    }
    return ' nav-movies__account-conteiner';
  }

  return (
    <nav className='nav-movies'>
      <div className='nav-movies__links'>
        <NavLink
          to='/movies'
          className={({ isActive }) => getClassNavText(isActive)}
        >
          Фильмы
        </NavLink>
        <NavLink
          to='/saved-movies'
          className={({ isActive }) => getClassNavText(isActive)}
        >
          Сохранённые фильмы
        </NavLink>
      </div>
      <Link to='/profile' className={getClassProfileBtn()}>
        <div className={getClassProfileConteiner()}>
          <img className={getClassProfileIcon()} src={account} alt='аккаунт' />
          <p className='nav-movies__account-button-title'>Аккаунт</p>
        </div>
      </Link>
      {burgerMenu()}
    </nav>
  );
}

export default NavTab;
