import { CenterData } from '../../types';

export type EditCenterFormProps = {
  isOpen: boolean;
  data: CenterData;
  onClose: () => void;
};
