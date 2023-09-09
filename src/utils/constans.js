export const MOVIE_URL = 'https://api.nomoreparties.co';
export const JWT = 'token';

export const SCREEN_1280 = 1280;
export const SCREEN_927 = 925;
export const SCREEN_768 = 768;
export const SCREEN_700 = 700;
export const SCREEN_480 = 580;
export const SCREEN_320 = 320;

export const MOVIE_DURATION = 40;

export const regExpName = /^[А-ЯA-ZËёh -]+$/imu;
export const regExpEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

export const errorMessages = {
    userEmailExists: 'Пользователь с таким email уже существует.',
    incorrectAuth: 'Неправильный логин или пароль.',
    errorInputEmail: 'Введите допустимый адрес электронной почты.',
    errorInputName: 'Имя может содержать только латиницу, кириллицу, пробел или дефис.',
    // errInputPassword: 'test',
    searchInputError: 'Введите запрос на поиск фильмов.',
    searchServerError: 'Сервер не отвечает , повторите запрос позднее.',
    nothingFound: 'Ничего не найдено.',
};

export const successMessages = {
    login: 'Вход выполнен',
    register: 'Регистрация прошла успешно',
    editProfile: 'Информация обновлена!',
    logout: 'Вы вышли из аккаунта',
    saveMovie: 'Добавлено в избранные',
    deleteMovie: 'Удален из избранных',
};

export function checkSavedMovie(movies, movie) {
    return movies?.find((item) => {
        return item.movieId === movie.id;
    });
};

export const MovieDuration = (duration) => {
    if (duration >= 60) {
        const minutes = duration % 60;
        return `${Math.floor(duration / 60)}ч ${minutes > 0 ? minutes + 'м' : ''}`;
    }
    return `${duration}м`;
};
