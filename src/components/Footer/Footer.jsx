import './Footer.css';

function Footer() {
    return (
        <footer className='footer'>
            <h2 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h2>
            <div className='footer__cover'>
                <p className='footer__copyright'>©  {new Date().getFullYear()}  Чайник diplom </p>
                <ul className='footer__links'>
                    <li className='footer__link-item'>
                        <a className='footer__link' href='https://practicum.yandex.ru/' target='_blank' rel='noreferrer'>Яндекс.Практикум</a>
                    </li>
                    <li className='footer__link-item'>
                        <a className='footer__link' href='https://github.com/' target='_blank' rel='noreferrer'>Github</a>
                    </li>
                </ul>
            </div>
        </footer>
    )
};

export default Footer;