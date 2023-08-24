// types.ts

export type Service = {
  serviceName: string;
  login: string;
  password: string;
  url: string;
};

export type ServiceListProps = {
  services: Service[];
  onRemoveService: (index: number) => void;
};

export type FormProps = {
  onCancel: () => void;
  onSubmit: (service: Service) => void;
};
