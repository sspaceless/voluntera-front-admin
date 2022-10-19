import { SERVICES } from '../../constants';

export type Center = {
  id: string;
  city: string;
  address: string;
  services: SERVICES;
};

export type CenterCardProps = {
  data: Center;
};
