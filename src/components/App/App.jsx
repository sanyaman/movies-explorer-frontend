import "./App.css";
import "../Animation/animation.css"
import { Route, Routes, useNavigate, useLocation, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { IsLoggedContext } from "../../context/IsLoggedContext";
import { api } from "../../utils/Api";
import { auth } from "../../utils/Auth";
import { getMovies } from "../../utils/MoviesApi";
import { errorMessages, successMessages, JWT } from "../../utils/constans";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Profile from "../Profile/Profile";
import NotFoundError from "../NotFoundError/NotFoundError";
// import movies from '../../utils/movies-array';
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import InfoTooltip from "../InfoTooltip/InfoTooltip";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [movies, setMovies] = useState([]);
  const [isLogged, setIsLogged] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const [likedMovies, setLikedMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [filteredSavedMovies, setFilteredSavedMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  function handleSuccessMessage(text) {
    setErrorMessage("");
    setSuccessMessage(text);
    setIsTooltipOpen(true);
  }

  function handleErrorMessage(text) {
    setSuccessMessage("");
    setErrorMessage(text);
    setIsTooltipOpen(true);
  }

  useEffect(() => {
    checkToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLogged]);

  function checkToken() {
    const path = location.pathname;
    try {
      const token = localStorage.getItem(JWT);
      if (token) {
        api
          .getUserInfo()
          .then((userData) => {
            setCurrentUser(userData);
            setIsLogged(true);
            if (path !== "/signin") {
              navigate(path, { replace: true });
            }
            api
              .getSavedMovies()
              .then((savedMoviesData) => {
                setSavedMovies(savedMoviesData);
              })
              .catch(err => console.error(err));
          })
          .catch(err => console.error(err));
      }
    } catch (err) {
      console.error(err);
    }
  };

  function onRegister(values) {
    const { name, email, password } = values;
    auth
      .register({ name, email, password })
      .then(() => onLogin({ email, password }))
      .catch(() => handleErrorMessage(errorMessages.userEmailExists));
  }

  function onLogin(values) {
    const { email, password } = values;
    auth
      .login({ email, password })
      .then(() => {
        setIsLogged(true);
        handleSuccessMessage(
          location.pathname === "/signup"
            ? successMessages.register
            : successMessages.login
        );
        navigate("/movies", { replace: true });
      })
      .catch(() => {
        setIsLogged(false);
        handleErrorMessage(errorMessages.incorrectAuth);
      });
  }

  function onSignOut() {
    if (isLogged) {
      auth
        .logout()
        .then(() => {
          setIsLogged(false);
          setCurrentUser({});
          setSavedMovies([]);
          setFilteredMovies([]);
          navigate("/", { replace: true });
          handleSuccessMessage(successMessages.logout);
          localStorage.clear();
        })
        .catch(err => console.log(err))
      }
    };

  function handleUpadteUserInfo(values) {
    const { name, email } = values;
    api
      .updateUser(name, email)
      .then((res) => {
        setCurrentUser(res);
        handleSuccessMessage(successMessages.editProfile);
      })
      .catch(() => handleErrorMessage(errorMessages.emailExists))
    };

  function showMovieSearch() {
    setIsLoading(true);
    getMovies()
      .then((res) => {
        setMovies(res);
      })
      .catch(() => handleErrorMessage(errorMessages.searchServerError))
      .finally(() => setIsLoading(false));
  }

  function handleSaveMovie(movie) {
    api
      .saveMovie(movie)
      .then((movie) => {
        setSavedMovies([movie, ...savedMovies]);
        handleSuccessMessage(successMessages.saveMovie);
      })
      .catch(err => console.log(err))
  };

  function handleDeleteMovie(movie) {
    api
      .deleteMovie(movie._id)
      .then(() => {
        setSavedMovies((prevMovies) =>
          prevMovies.filter((item) => item._id !== movie._id)
        );
        handleSuccessMessage(successMessages.deleteMovie);
      })
      .catch(err => console.log(err))
    };

  function getSavedMovies() {
    if (isLogged) {
      api
        .getSavedMovies()
        .then((res) => {
          setSavedMovies(res);
          const likedMoviesAndUndef = filteredMovies.map((filteredMovie) => {
            return res.find(
              (savedMovie) => savedMovie.movieId === filteredMovie.id
            );
          });
          const likedMovies = likedMoviesAndUndef.filter(
            (item) => item !== undefined
          );
          setLikedMovies(likedMovies);
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    getSavedMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredMovies, isLogged]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <IsLoggedContext.Provider value={isLogged}>
        <div className="page">
          <Routes>
            <Route path="/" element={<Main isLogged={isLogged} />} />
            <Route
              path="/movies"
              element={
                <ProtectedRoute
                  element={Movies}
                  isLogged={isLogged}
                  isLoading={isLoading}
                  setIsLoading={setIsLoading}
                  filteredMovies={filteredMovies}
                  setMovies={setMovies}
                  setFilteredMovies={setFilteredMovies}
                  movies={movies}
                  likedMovies={likedMovies}
                  savedMovies={savedMovies}
                  errorMessages={errorMessages}
                  deleteMovie={handleDeleteMovie}
                  handleSaveMovie={handleSaveMovie}
                  showMovieSearch={showMovieSearch}
                />
              }
            />
            <Route
              path="/saved-movies"
              element={
                <ProtectedRoute
                  element={SavedMovies}
                  isLogged={isLogged}
                  setIsLoading={setIsLoading}
                  filteredSavedMovies={filteredSavedMovies}
                  setFilteredSavedMovies={setFilteredSavedMovies}
                  setMovies={setSavedMovies}
                  savedMovies={savedMovies}
                  deleteMovie={handleDeleteMovie}
                  errorMessages={errorMessages}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute
                  element={Profile}
                  isLogged={isLogged}
                  isLoading={isLoading}
                  onProfileUpdate={handleUpadteUserInfo}
                  onSignOut={onSignOut}
                />
              }
            />
            <Route
              path="/signin"
              element={
                isLogged ? <Navigate to="/" /> : <Login onLogin={onLogin} />
              }
            />
            <Route
              path="/signup"
              element={
                isLogged ? (
                  <Navigate to="/" />
                ) : (
                  <Register onRegister={onRegister} />
                )
              }
            />
            <Route path="*" element={<NotFoundError />} />
          </Routes>
          <InfoTooltip
            isOpen={isTooltipOpen}
            onClose={() => setIsTooltipOpen(false)}
            errorMessage={errorMessage}
            successMessage={successMessage}
          />
        </div>
      </IsLoggedContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
