import './BurgerMenu.css';
import { NavLink } from 'react-router-dom';
import account from '../../images/NIGER.svg';

function BurgerMenu({ onClose }) {
    return (
        <div className='hamburger'>
            <div className='hamburger__cover'>
                <button className='hamburger__close-button' type='button' onClick={onClose} />
                <nav className='hamburger__menu'>
                    <NavLink className='hamburger__link' to='/' onClick={onClose}>Главная</NavLink>
                    <NavLink className='hamburger__link' to='/movies' onClick={onClose}>Фильмы</NavLink>
                    <NavLink className='hamburger__link' to='/saved-movies' onClick={onClose}>Сохранённые фильмы</NavLink>
                </nav>
                <NavLink className='hamburger__account-button' to='/profile' onClick={onClose}>
                    Аккаунт
                    <img src={account} alt="профиль" />
                </NavLink>
            </div>
        </div>
    );
};

export default BurgerMenu;