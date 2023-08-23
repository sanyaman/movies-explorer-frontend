import AuthorizationForms from '../AuthorizationForms/AuthorizationForms';

function Register() {
    const text = { title: 'Рады видеть!', buttonText: 'Войти', questText: 'Ещё не зарегистрированы?' }
    return (
        <AuthorizationForms type={'signin'} text={text} />
    )
}

export default Register;