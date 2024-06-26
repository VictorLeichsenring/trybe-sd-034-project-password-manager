import React, { useState } from 'react';
import Form from './components/Form';
import ServiceList from './components/ServiceList';
import { Service } from './types/types';
import './App.css';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [services, setServices] = useState<Service[]>([]);
  const [hidePasswords, setHidePasswords] = useState(false);

  const handleServiceSubmit = (service: Service) => {
    setServices((prevServices) => [...prevServices, service]);
    setShowForm(false);
    console.log('Serviço adicionado:', services);
  };

  const handleRemoveService = (index: number) => {
    // const updatedServices = services.filter((_, idx) => idx !== index);
    // setServices(updatedServices);
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

      <label>
        <input
          type="checkbox"
          checked={ hidePasswords }
          onChange={ () => setHidePasswords(!hidePasswords) }
        />
        Esconder senhas
      </label>
      <ServiceList
        services={ services }
        onRemoveService={ handleRemoveService }
        hidePasswords={ hidePasswords }
      />
    </div>
  );
}
export default App;
