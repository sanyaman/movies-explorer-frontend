import './Input.css'

function Input({title, id, name, type}) {

    return (
        <>
            <p className='input__title'>{title}</p>
            <input className='input' required={true}  id={id} name={name} type={type}/>
            <span className='input__error'>Что-то пошло не так...</span>
        </>
    )
}

export default Input;