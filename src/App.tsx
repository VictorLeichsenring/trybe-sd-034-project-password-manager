import React, { useState } from 'react';
import Form from './components/Form';
import ServiceList from './components/ServiceList';
import { Service } from './types/types';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [services, setServices] = useState<Service[]>([]); // Explicitly set the type for state

  const handleServiceSubmit = (service: Service) => { // Provide type here
    setServices((prevServices) => [...prevServices, service]);
    setShowForm(false);
  };
  console.log(services);

  return (
    <div>
      <h1>Gerenciador de senhas</h1>

      {!showForm && (
        <button onClick={ () => setShowForm(true) }>
          Cadastrar nova senha
        </button>
      )}

      {showForm && (
        <Form
          onCancel={ () => setShowForm(false) }
          onSubmit={ handleServiceSubmit }
        />
      )}
      <ServiceList services={ services } />
    </div>
  );
}

export default App;
