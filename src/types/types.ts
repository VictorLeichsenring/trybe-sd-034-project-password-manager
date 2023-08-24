// types.ts

export type Service = {
  serviceName: string;
  login: string;
  password: string;
  url: string;
};

export type FormProps = {
  onCancel: () => void;
  onSubmit: (service: Service) => void;
};
