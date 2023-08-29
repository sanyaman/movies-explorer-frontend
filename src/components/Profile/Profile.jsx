import { React, useState } from 'react';
import './Profile.css';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';

function Profile() {
    const [currentUser, setCurrentUser] = useState({ name: 'Sanyaman', email: 'penta@gon.com' });
    const [profileData, setProfileData] = useState(currentUser);
    const [readOnly, setReadOnly] = useState(true);
    const [profileChanged, setProfileChanged] = useState(false);

    function handleProfileChange(evt) {
        const { value, name } = evt.target;
        setProfileChanged(true);
        setProfileData({ ...profileData, [name]: value });
    };

    function toggleProfileReadOnly() {
        setReadOnly(!readOnly);
    };

    function handleProfileSubmit(evt) {
        evt.preventDefault();
        setProfileChanged(false);
        toggleProfileReadOnly();
        setCurrentUser(profileData);
    };

    function handleLogOut() {
        setCurrentUser({})
    };

    const buttonsMarkup = () => {
        if (readOnly) {
            return (
                <>
                    <button className="profile__button profile__button_edit" onClick={toggleProfileReadOnly} type='button'>Редактировать</button>
                </>)
        }
        return (
            <button className={`profile__button-save ${!profileChanged ? 'profile__button-save_disabled' : ''}`} disabled={!profileChanged} type='submit'>Сохранить</button>
        )
    };

    return (
        <section className='profile'>
            <Header isLogged={true} />
            <main className='profile__collapse'>
                <h2 className='profile__title'>{`Привет, ${currentUser.name}!`}</h2>
                <form className='profile__form' onSubmit={handleProfileSubmit}>
                    <div className='profile__form-item'>
                        <label className='profile__label'>Имя</label>
                        <input
                            className='profile__input'
                            name='name'
                            type='text'
                            value={currentUser.name || ''}
                            onChange={handleProfileChange}
                            disabled={readOnly}
                            required
                            placeholder='Имя'
                        />
                    </div>
                    <div className='profile__form-item'>
                        <label className="profile__label">E-mail</label>
                        <input
                            className='profile__input'
                            name='email' 
                            type='email'
                            value={currentUser.email || ''}
                            onChange={handleProfileChange}
                            disabled={readOnly}
                            required
                            placeholder='E-mail'
                        />
                    </div>
                </form>
                {buttonsMarkup()}
                <Link  to={'/'}
                className='profile__button profile__button_logout' onClick={handleLogOut}> Выйти из аккаунта
                </Link>
            </main>
        </section>
    )
};

export default Profile;