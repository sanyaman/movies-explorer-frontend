import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ movies, isSavedMoviesPage }) {
    return (
        <section className='movies-card-list'>
            <ul className='movies-card-list__items'>
                {movies.map(i => <MoviesCard movie={i} key={i.id} isSavedMoviesPage={isSavedMoviesPage} />)}
            </ul>
        </section>
    );
};

export default MoviesCardList;