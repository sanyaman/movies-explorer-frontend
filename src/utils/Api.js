class Api {
    constructor({ baseUrl, headers }) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return res.json().then((res) => Promise.reject(`Ошибка: ${res.status}`))
    };

    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'GET',
            headers: this._headers,
            credentials: 'include',
        })
            .then(this._checkResponse)
    };

    updateUser(name, email) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            credentials: 'include',
            body: JSON.stringify({
                name: name,
                email: email
            })
        })
            .then(this._checkResponse)
    };

    getSavedMovies() {
        return fetch(`${this._baseUrl}/movies`, {
            method: 'GET',
            headers: this._headers,
            credentials: 'include',
        })
            .then(this._checkResponse)
    };

    saveMovie(movieData) {
        return fetch(`${this._baseUrl}/movies`, {
            method: 'POST',
            headers: this._headers,
            credentials: 'include',
            body: JSON.stringify({
                country: movieData.country,
                director: movieData.director,
                duration: movieData.duration,
                year: movieData.year,
                description: movieData.description,
                image: `https://api.nomoreparties.co/${movieData.image.url}`,
                trailerLink: movieData.trailerLink,
                thumbnail: `https://api.nomoreparties.co/${movieData.image.formats.thumbnail.url}`,
                movieId: movieData.id,
                nameRU: movieData.nameRU,
                nameEN: movieData.nameEN,
            })
        })
            .then(this._checkResponse)
    };

    deleteMovie(movieId) {
        return fetch(`${this._baseUrl}/movies/${movieId}`, {
            method: 'DELETE',
            headers: this._headers,
            credentials: 'include',
        })
            .then(this._checkResponse)
    };
};

export const api = new Api({
    // baseUrl: 'http://localhost:3000',
    baseUrl: 'https://api.movie-hub.nomoreparties.co',
    
    headers: {
        accept: 'application/json',
        'content-Type': 'application/json'
    },
});