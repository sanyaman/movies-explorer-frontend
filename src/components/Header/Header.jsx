import './Header.css';
import { Link } from 'react-router-dom';
import NavTab from '../NavTab/NavTab';
import logo from '../../images/logo3.svg';

function Header({ isLogged }) {
    return (
        <header className={`header ${!isLogged ? 'header_authorized' : 'header_movies'}`}>
            <Link className='header__logo' to='/'>
                <img src={logo} alt='Логотип' />
            </Link>
            <NavTab isLogged={isLogged} />
        </header>
    );
};

export default Header;