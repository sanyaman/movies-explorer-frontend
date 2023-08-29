import logo from '../../images/logo_light1.svg'
import './AuthorizationForms.css';
import { Link } from 'react-router-dom';

function AuthorizationForms({ title, buttonText, isRegister = false, children }) {
    return (
        <section>
        <div className='authorize'>
            <Link to='/'>
            <img className='authorize__logo' src={logo} alt='Логотип сайта'></img>
            </Link>
            <h1 className='authorize__title'>{title}</h1>
            <form className='authorize__form'>
                {children}
                <button className='authorize__button' type='submit'>{buttonText}</button>
            </form>
            <div className='authorize__stride'>
                <p className='authorize__question'>{isRegister ? 'Уже зарегистрированы?' : 'Ещё не зарегистрированы?'}</p>
                <Link to={isRegister ? '/signin' : '/signup'} className='authorize__link'>{isRegister ? 'Войти' : 'Регистрация'}</Link>
            </div>
        </div>
        </section>
    )
}

export default AuthorizationForms;