import AuthorizationForms from "../AuthorizationForms/AuthorizationForms";
import Input from '../Input/Input';

function Register() {
    return (
        <>
            <AuthorizationForms
                title='Добро пожаловать!'
                buttonText='Зарегистрироваться'
                isRegister={true}>
                    <Input title='Имя' id='name' name='name' type='text'></Input>
                    <Input title='E-mail' id='email' name='email' type='email'></Input>
                    <Input title='Пароль' id='password' name='password' type='password'></Input>
            </AuthorizationForms>
        </>
        
    )
}

export default Register;