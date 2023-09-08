import AuthorizationForms from '../AuthorizationForms/AuthorizationForms';

function Login({ onLogin }) {
    const text = { title: 'Рады видеть!', buttonText: 'Войти', questText: 'Ещё не зарегистрированы?' }
    return (
        <AuthorizationForms type={'signin'} text={text} onSubmitForm={onLogin} />
    )
};

export default Login;