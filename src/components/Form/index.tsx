import React, { useState } from 'react';
import { Service, FormProps } from '../../types/types';

function Form({ onCancel, onSubmit }: FormProps) {
  const [formData, setFormData] = useState<Service>({
    serviceName: '',
    login: '',
    password: '',
    url: '',
  });

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isFormValid) {
      onSubmit(formData);
    }
  }

  const hasLength = formData.password.length >= 8 && formData.password.length <= 16;
  const hasNumbers = /\d/.test(formData.password);
  const hasLetters = /[a-zA-Z]/.test(formData.password);
  const hasSpecialCharacters = /[!@#$%^&*(),.?":{}|<>]/.test(formData.password);

  const passwordChecks = [
    {
      message: 'Possuir 8 ou mais caracteres',
      isValid: () => formData.password.length >= 8,
    },
    {
      message: 'Possuir até 16 caracteres',
      isValid: () => formData.password.length <= 16,
    },
    {
      message: 'Possuir letras e números',
      isValid: () => hasLetters && hasNumbers,
    },
    {
      message: 'Possuir algum caractere especial',
      isValid: () => hasSpecialCharacters,
    },
  ];

  const isFormValid = formData.serviceName
    && formData.login
    && hasLength
    && hasNumbers
    && hasLetters
    && hasSpecialCharacters;

  return (
    <form onSubmit={ handleSubmit }>
      <label>
        Nome do serviço
        <input
          type="text"
          name="serviceName"
          value={ formData.serviceName }
          onChange={ handleInputChange }
        />
      </label>
      <label>
        Login
        <input
          type="text"
          name="login"
          value={ formData.login }
          onChange={ handleInputChange }
        />
      </label>
      <label>
        Senha
        <input
          type="password"
          name="password"
          value={ formData.password }
          onChange={ handleInputChange }
        />
      </label>
      <ul className="password-checklist">
        {passwordChecks.map((check, index) => (
          <li
            key={ index }
            className={
              check.isValid()
                ? ('valid-password-check')
                : ('invalid-password-check')
            }
          >
            {check.message}
          </li>
        ))}
      </ul>
      <label>
        URL
        <input
          type="text"
          name="url"
          value={ formData.url }
          onChange={ handleInputChange }
        />
      </label>
      <button type="submit" disabled={ !isFormValid }>Cadastrar</button>
      <button type="button" onClick={ onCancel }>Cancelar</button>
    </form>
  );
}

export default Form;
