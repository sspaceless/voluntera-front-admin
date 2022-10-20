export type NewOrganizationFormProps = {
  isOpen: boolean;
  onClose: () => void;
};

export type FormValues = {
  title: string;
  phone: string;
  link?: string;
  description?: string;
};
