import logo from "../../images/logo_light1.svg";
import "./AuthorizationForms.css";
import { Link } from "react-router-dom";
import { validateName, validateEmail } from "../../utils/validateInput";
import useForm from "../../hooks/useFormAuth";

function AuthorizationForms({ type, text, onSubmitForm }) {
    const { values, errors, isFormValid, handleChange, formRef } = useForm();

    const signupForm = () => {
        if (type === "signup") {
            return (
                <div className="authorize__form">
                    <label className="authorize__label">Имя</label>
                    <input
                        className={`authorize__input ${errors.name ? "error" : ""}`}
                        name="name"
                        type="name"
                        value={values.name || ""}
                        onChange={handleChange}
                        required
                        minLength={2}
                        maxLength={30}
                    />
                    <span className="authorize__error">
                        {errors.name || validateName(values.name).message}
                    </span>
                </div>
            );
        }
    };

    function handleSubmit(evt) {
        evt.preventDefault();
        onSubmitForm(values);
    }

    return (
        <>
            <form
                className="authorize"
                onSubmit={handleSubmit}
                noValidate
                ref={formRef}
            >
                <Link to="/">
                    <img className="authorize__logo" src={logo} alt="Логотип" />
                </Link>
                <h1 className="authorize__title">{text.title}</h1>
                {signupForm()}
                <div className="authorize__form">
                    <label className="authorize__label">E-mail</label>
                    <input
                        className={`authorize__input ${errors.email ? "error" : ""}`}
                        name="email"
                        type="email"
                        value={values.email || ""}
                        onChange={handleChange}
                        required
                    />
                    <span className="authorize__error">
                        {errors.email || validateEmail(values.email).message}
                    </span>
                </div>
                <div className="authorize__form">
                    <label className="authorize__label">Пароль</label>
                    <input
                        className={`authorize__input ${errors.password ? "error" : ""}`}
                        name="password"
                        type="password"
                        value={values.password || ""}
                        onChange={handleChange}
                        required
                        minLength={6}
                        maxLength={30}
                    />
                    <span className="authorize__error">{errors.password}</span>
                </div>
                <div className="authorize__buttons">
                    <button
                        className="authorize__button"
                        type="submit"
                        disabled={!isFormValid || validateEmail(values.email).invalid}
                    >
                        {text.buttonText}
                    </button>
                    <p className="authorize__question">
                        {text.questText}
                        {type === "signup" ? (
                            <Link className="authorize__link" to="/signin">
                                Войти
                            </Link>
                        ) : (
                            <Link className="authorize__link" to="/signup">
                                Регистрация
                            </Link>
                        )}
                    </p>
                </div>
            </form>
        </>
    );
}

export default AuthorizationForms;
