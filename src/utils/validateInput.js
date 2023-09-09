import { regExpEmail, regExpName, errorMessages } from "./constans"

export const validateName = (name) => {
    if (name === undefined) {
        return { message: '', invalid: true }
    }

    if (!regExpName.test(name)) {
        return { message: errorMessages.errorInputName, invalid: true }
    }

    return { message: '', invalid: false }
};

export const validateEmail = (email) => {
    if (email === undefined) {
        return { message: '', invalid: true }
    }

    if (!regExpEmail.test(email)) {
        return { message: errorMessages.errorInputEmail, invalid: true }
    }

    return { message: '', invalid: false }
};
