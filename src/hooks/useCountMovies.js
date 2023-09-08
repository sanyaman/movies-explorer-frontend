import { useEffect, useState } from 'react';
import { SCREEN_1280, SCREEN_927, SCREEN_768, SCREEN_480 } from '../utils/constans';

const useCountMovies = (dependency) => {
    const [moviesRenderCounter, setMoviesRenderCounter] = useState(0);
    const [moviesAddCounter, setMoviesAddCounter] = useState(0);

    const screenWidth = window.screen.width;

    useEffect(() => {
        if (screenWidth >= SCREEN_1280) {
            setMoviesRenderCounter(16);
            setMoviesAddCounter(4);
        }
        else if (screenWidth >= SCREEN_927 && screenWidth < SCREEN_1280) {
            setMoviesRenderCounter(9);
            setMoviesAddCounter(3);
        }
        else if (screenWidth >= SCREEN_768 && screenWidth < SCREEN_927) {
            setMoviesRenderCounter(8);
            setMoviesAddCounter(2);
        } else if (screenWidth < SCREEN_768 && screenWidth < SCREEN_480) {
            setMoviesRenderCounter(5);
            setMoviesAddCounter(2);
        }
    }, [screenWidth, dependency]);

    const handleShowAddCards = () => {
        setMoviesRenderCounter(moviesRenderCounter + moviesAddCounter);
    };

    return { handleShowAddCards, moviesRenderCounter };
};

export default useCountMovies;
