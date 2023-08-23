import './AuthorizationForms.css';
import logo from '../../images/logo4.svg'
import { Link } from 'react-router-dom';
import { useState } from 'react';

function AuthorizationForms({ type, text }) {

    const [errorMessage, seteErorMessage] = useState({ name: '', email: '', password: '' });
    const [inputValue, setinputValue] = useState({ name: '', email: '', password: '' });

    const handleChange = (evt) => {
        const { value, name, validationMessage } = evt.target;
        setinputValue({ ...inputValue, [name]: value });
        seteErorMessage({ ...errorMessage, [name]: validationMessage });
    };
    // разметка инпута имя
    const signupForm = () => {
        if (type === 'signup') {
            return (
                <div className='authorize__form'name='authForm'>
                    <label className='authorize__label'>Имя</label>
                    <input
                        className={`authorize__input ${errorMessage.name ? 'error' : ''}`}
                        name='name'
                        type='text'
                        value={inputValue.name}
                        onChange={handleChange}
                        required
                    />
                    <span className='authorize__error'>{errorMessage.name}</span>
                </div>
            )
        }
    };
    // единая форма регистрация\вход
    return (
        <main className='authorize'>
            <Link to='/'>
            <img className='authorize__logo' src={logo} alt='Логотип' />
            </Link>
            <h1 className='authorize__title'>{text.title}</h1>
            {signupForm()}
            <div className='authorize__form'name='authForm'>
                <label className='authorize__label'>E-mail</label>
                <input
                    className={`authorize__input ${errorMessage.email ? 'error' : ''}`}
                    name='email'
                    type='email'
                    value={inputValue.email}
                    onChange={handleChange}
                    required
                />
                <span className='authorize__error'>{errorMessage.email}</span>
            </div>
            <div className='authorize__form'name='authForm'>
                <label className='authorize__label'>Пароль</label>
                <input
                    className={`authorize__input ${errorMessage.password ? 'error' : ''}`}
                    name='password'
                    type='password'
                    value={inputValue.password}
                    onChange={handleChange}
                    required
                />
                <span className='authorize__error'>{errorMessage.password}</span>
            </div>
            <div className='authorize__buttons-form'>
                <button className='authorize__button-auth' type='submit'>{text.buttonText}</button>
                <p className='authorize__stride'>{text.questText}
                    { type === 'signup'
                        ? (<Link className='authorize__link' to='/signin'>Войти</Link>)
                        : (<Link className='authorize__link' to='/signup'>Регистрация</Link>)
                    }
                </p>
            </div>
        </main>
    )
};

export default AuthorizationForms;