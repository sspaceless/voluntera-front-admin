export type NewOrganizationFormProps = {
  isOpened: boolean;
  onClose: () => void;
};

export type FormValues = {
  name: string;
  phone: string;
  webPageUrl?: string;
  description?: string;
};
