import './Movies.css'
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import ClickMore from '../ClickMore/ClickMore';

function Movies({ movies, clickMore, isSavedMoviesPage }) {
    return (
        <>
            <Header isLogged={true} />
            <main className='movies'>
                <SearchForm />
                <MoviesCardList movies={movies} isSavedMoviesPage={isSavedMoviesPage} />
                <ClickMore clickMore={clickMore} />
            </main>
            <Footer />
        </>
    );
};

export default Movies;