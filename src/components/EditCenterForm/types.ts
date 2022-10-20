export type EditCenterFormProps = {
  isOpen: boolean;
  data: FormValues;
  onClose: () => void;
};

export type FormValues = {
  name: string;
  address: string;
  phoneNumber: string;
  start: string;
  end: string;
  longitude: string;
  latitude: string;
  services: string[];
};
