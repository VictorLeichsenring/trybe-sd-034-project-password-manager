import { useState } from 'react';
import './App.css';
import Form from './components/Form';

function App() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <h1>Gerenciador de senhas</h1>

      {!showForm && (
        <button onClick={ () => setShowForm(true) }>
          Cadastrar nova senha
        </button>
      )}
      {showForm && <Form onCancel={ () => setShowForm(false) } />}
    </div>
  );
}

export default App;
