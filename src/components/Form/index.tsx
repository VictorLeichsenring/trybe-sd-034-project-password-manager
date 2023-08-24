import { useState } from 'react';

type FormProps = {
  onCancel: () => void;
};

function Form({ onCancel }: FormProps) {
  const [formData, setFormData] = useState({
    serviceName: '',
    login: '',
    password: '',
    url: '',
  });

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }

  const hasLength = formData.password.length >= 8 && formData.password.length <= 16;
  const hasNumbers = /\d/.test(formData.password);
  const hasLetters = /[a-zA-Z]/.test(formData.password);
  const hasSpecialCharacters = (
    /[!@#$%^&*(),.?":{}|<>]/.test(formData.password)
  );

  const isFormValid = formData.serviceName
  && formData.login
  && hasLength
  && hasNumbers
  && hasLetters
  && hasSpecialCharacters;

  return (
    <form>
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
