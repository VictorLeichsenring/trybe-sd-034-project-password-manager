import React from 'react';
import { ServiceListProps } from '../../types/types';

function ServiceList({ services, onRemoveService, hidePasswords }: ServiceListProps) {
  if (services.length === 0) {
    return <p>Nenhuma senha cadastrada</p>;
  }

  return (
    <ul>
      {services.map((service, index) => (
        <li key={ index }>
          <a href={ service.url }>{service.serviceName}</a>
          <p>
            Login:
            {' '}
            {service.login}
          </p>
          <p>
            Senha:
            {' '}
            {hidePasswords ? '******' : service.password}
          </p>
          <button
            data-testid="remove-btn"
            onClick={ () => onRemoveService(index) }
          >
            Remover
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ServiceList;
