type FormProps = {
  updateFormState: (state: boolean) => void;
};

function Form({ updateFormState }: FormProps) {
  function handleButtonCancelar(event: React.FormEvent) {
    event.preventDefault();
    updateFormState(false);
  }
  return (
    <form>
      <label>
        Nome do serviço
        <input
          type="text"
          name=""
          id=""
        />
      </label>
      <label>
        Login
        <input
          type="text"
          name=""
          id=""
        />
      </label>
      <label>
        Senha
        <input
          type="password"
          name=""
          id=""
        />
      </label>
      <label>
        URL
        <input
          type="text"
          name=""
          id=""
        />
      </label>
      <button>Cadastrar</button>
      <button onClick={ handleButtonCancelar }>
        Cancelar
      </button>
    </form>
  );
}

export default Form;
