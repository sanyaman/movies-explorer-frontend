import './MoviesCard.css';
import { MovieDuration } from '../../utils/constans';

function MoviesCard({ movie, isSavedMoviesPage, onDelete, onSave, isSaved, link }) {
  const { nameRU, duration, trailerLink } = movie;

  function handleDeleteMovie() {
    onDelete(movie);
  };

  function handleSaveMovie() {
    onSave(movie);
  };

  const getButtonMarkup = () => {
    if (isSaved && !isSavedMoviesPage) {
      return (
        <button
          className='movies-card__buttone movies-card__buttone_save_active'
          onClick={handleDeleteMovie}
        />
      );
    } else if (isSavedMoviesPage) {
      return (
        <button
          className='movies-card__buttone movies-card__buttone_remove'
          onClick={handleDeleteMovie}
        />
      );
    }
    return (
      <button
        className='movies-card__buttone movies-card__buttone_save'
        onClick={handleSaveMovie}
      />
    );
  };

  return (
    <li className='movies-card '>
      <a href={trailerLink} target='_blanck'>
        <img className='movies-card__image rotation' src={link} alt={nameRU} />
      </a>
      <div className='movies-card__description'>
        <h3 className='movies-card__title'>{nameRU}</h3>
        {getButtonMarkup()}
      </div>
      <p className='movies-card__duration'>{MovieDuration(duration)}</p>
    </li>
  );
};

export default MoviesCard;
