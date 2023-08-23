import AuthorizationForms from "../AuthorizationForms/AuthorizationForms";

function Register() {
    const text = { title: 'Добро пожаловать!', buttonText: 'Зарегистрироваться', questText: 'Уже зарегистрированы?' }
    return (
        <AuthorizationForms type={'signup'} text={text} />
    )
};

export default Register;