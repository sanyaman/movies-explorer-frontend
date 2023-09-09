import './Movies.css';
import { useState } from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import ClickMore from '../ClickMore/ClickMore';
import Preloader from '../Preloader/Preloader';
import Footer from '../Footer/Footer';
import useWidthScreen from '../../hooks/useWidthScreen';
import useCountMovies from '../../hooks/useCountMovies';

const Movies = ({ isLoading, movies, setMovies, deleteMovie, handleSaveMovie, filteredMovies, savedMovies, setFilteredMovies, likedMovies, errorMessages, showMovieSearch }) => {
    const [responseError, setResponseError] = useState('');
    const [isMoviesSearched, setIsMoviesSearched] = useState(false);
    const orientation = useWidthScreen();
    const { moviesRenderCounter, handleShowAddCards } = useCountMovies(orientation);
    const [isSavedMoviesSearched, setIsSavedMoviesSearched] = useState(false);

    return (
        <main className='movies'>
            <Header isLogged={true} />
            <SearchForm
                setMovies={setMovies}
                movies={movies}
                setFilteredMovies={setFilteredMovies}
                isMoviesSearched={isMoviesSearched}
                setIsMoviesSearched={setIsMoviesSearched}
                isSavedMoviesSearched={isSavedMoviesSearched}
                setIsSavedMoviesSearched={setIsSavedMoviesSearched}
                setResponseError={setResponseError}
                errorMessages={errorMessages}
                showMovieSearch={showMovieSearch}

            />
            {isLoading ? (
                <Preloader />
            ) : (
                <>
                    <MoviesCardList
                        responseError={responseError}
                        isMoviesSearched={isMoviesSearched}
                        likedMovies={likedMovies}
                        movies={filteredMovies}
                        setMovies={setMovies}
                        moviesRenderCounter={moviesRenderCounter}
                        isSavedMoviesPage={false}
                        savedMovies={savedMovies}
                        handleSaveMovie={handleSaveMovie}
                        deleteMovie={deleteMovie}
                    />
                    <div className='movie__more' >
                        {filteredMovies?.length > moviesRenderCounter && (
                            <ClickMore onClick={handleShowAddCards} />
                        )}
                    </div>
                </>
            )}
            <Footer />
        </main>
    );
};

export default Movies;
