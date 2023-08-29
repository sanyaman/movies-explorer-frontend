import './MoviesCard.css';

function MoviesCard({ movie, isSavedMoviesPage }) {
    function formatMovieDuration(duration) {
        if (duration >= 60) {
            const minutes = duration % 60;
            return `${Math.floor(duration / 60)}ч ${minutes > 0 ? minutes + 'м' : ''}`
        }
        return `${duration}м`
    };

    const { nameRU, image, duration, saved } = movie;
    const formatedDuration = formatMovieDuration(duration);

    const buttonClass = () => {
        if (saved && !isSavedMoviesPage) {
            return 'movies-card__button_activ'
        }
        else if (isSavedMoviesPage) {
            return 'movies-card__button_remove'
        }
        return 'movies-card__button_save';
    };

    return (
        <li className='movies-card'>
            <img className='movies-card__image' src={image} alt={nameRU} />
            <div className='movies-card__description'>
                <h3 className='movies-card__title'>{nameRU}</h3>
                <button className={`movies-card__button ${buttonClass()}`} />
            </div>
            <p className='movies-card__duration'>{formatedDuration}</p>
        </li>
    );
};

export default MoviesCard;