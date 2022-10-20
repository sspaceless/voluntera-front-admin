export type NewOrganizationFormProps = {
  isOpen: boolean;
  onClose: () => void;
};

export type FormValues = {
  name: string;
  phone: string;
  webPageUrl?: string;
  description?: string;
};
