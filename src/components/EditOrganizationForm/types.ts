export type EditOrganizationFormProps = {
  isOpen: boolean;
  onClose: () => void;
  data: FormValues;
};

export type FormValues = {
  name: string;
  phoneNumber: string;
  webPageUrl?: string;
  description?: string;
};
