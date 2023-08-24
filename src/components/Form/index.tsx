type FormProps = {
  onCancel: () => void;
};

function Form({ onCancel }: FormProps) {
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
      <button type="submit">Cadastrar</button>
      <button type="button" onClick={ onCancel }>Cancelar</button>
    </form>
  );
}

export default Form;
