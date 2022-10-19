export type NewCenterFormProps = {
  isOpen: boolean;
  onClose: () => void;
};

export type FormValues = {
  name: string;
  address: string;
  longitude: string;
  latitude: string;
  phoneNumber: string;
};
