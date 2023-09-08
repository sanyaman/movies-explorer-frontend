import { useState, useCallback, useRef } from 'react';
import { regExpName } from '../utils/constans';

function useFormAuth() {
  const formRef = useRef(null);
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    film: '',
  });
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (evt) => {
    const { name, value } = evt.target;

    const isName = name === 'name';
    const isNameValid = isName ? regExpName.test(value) : true;
    const errorMessage = !isNameValid
      ? evt.target.validationMessage
      : evt.target.validationMessage;

    setValues({ ...values, [name]: value });
    setErrors({
      ...errors,
      [name]: errorMessage,
    });
    setIsFormValid(isNameValid && formRef.current.checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsFormValid(newIsValid);
    },
    [setValues, setErrors, setIsFormValid],
  );

  return { values, setValues, handleChange, errors, isFormValid, setIsFormValid, resetForm, formRef };
};

export default useFormAuth;
