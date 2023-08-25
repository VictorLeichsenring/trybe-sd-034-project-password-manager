export type Service = {
  serviceName: string;
  login: string;
  password: string;
  url: string;
};

export type ServiceListProps = {
  services: Service[];
  onRemoveService: (index: number) => void;
  hidePasswords: boolean;
};

export type FormProps = {
  onCancel: () => void;
  onSubmit: (service: Service) => void;
};
