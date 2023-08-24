import React from 'react';

type Service = {
  serviceName: string;
  login: string;
  password: string;
  url: string;
};

type ServiceListProps = {
  services: Service[];
};

function ServiceList({ services }: ServiceListProps) {
  if (!services || services.length === 0) {
    return <p>Nenhuma senha cadastrada</p>;
  }

  return (
    <div>
      {services.map((service, index) => (
        <div key={ index }>
          <a href={ service.url }>{service.serviceName}</a>
          <p>
            Login:
            {' '}
            {service.login}
          </p>
          <p>
            Senha:
            {' '}
            {service.password}
          </p>
        </div>
      ))}
    </div>
  );
}

export default ServiceList;
