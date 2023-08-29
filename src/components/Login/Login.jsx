import AuthorizationForms from "../AuthorizationForms/AuthorizationForms";
import Input from '../Input/Input';

function Login() {
    return (
        <AuthorizationForms
            title='Рады видеть!'
            buttonText='Войти'>
                    <Input title='E-mail' id='email' name='email' type='email' ></Input>
                    <Input title='Пароль' id='password' name='password' type='password' ></Input>
        </AuthorizationForms>
    )
}

export default Login;