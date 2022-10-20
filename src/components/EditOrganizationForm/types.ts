import { OrganizationData } from '../../types';

export type EditOrganizationFormProps = {
  isOpen: boolean;
  onClose: () => void;
  data: OrganizationData;
};
