import AuthorizationForms from '../AuthorizationForms/AuthorizationForms';

function Register({ onRegister }) {
    const text = { title: 'Добро пожаловать!', buttonText: 'Зарегистрироваться', questText: 'Уже зарегистрированы?' }
    return (
        <AuthorizationForms type={'signup'} text={text} onSubmitForm={onRegister} />
    )
};

export default Register;
