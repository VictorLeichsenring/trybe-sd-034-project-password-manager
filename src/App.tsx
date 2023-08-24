import { useState } from 'react';
import './App.css';
import Form from './components/Form';

function App() {
  const [showForm, setShowForm] = useState(false);

  function updateFormState(state: boolean) {
    setShowForm(state);
  }
  return (
    <div>
      <h1>Gerenciador de senhas</h1>
      {showForm ? (
        <Form updateFormState={ updateFormState } />
      ) : (
        <button
          onClick={ () => updateFormState(true) }
        >
          Cadastrar nova senha
        </button>
      )}
    </div>
  );
}

export default App;
