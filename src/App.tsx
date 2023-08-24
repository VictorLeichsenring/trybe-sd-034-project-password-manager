import React, { useState } from 'react';
import Form from './components/Form';
import ServiceList from './components/ServiceList';
import { Service } from './types/types';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [services, setServices] = useState<Service[]>([]);

  const handleServiceSubmit = (service: Service) => {
    setServices((prevServices) => [...prevServices, service]);
    setShowForm(false);
  };

  const handleRemoveService = (index: number) => {
    setServices((prevServices) => prevServices.filter((_, idx) => idx !== index));
  };

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
      <ServiceList services={ services } onRemoveService={ handleRemoveService } />
    </div>
  );
}

export default App;
