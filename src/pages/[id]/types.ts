import { ParsedUrlQuery } from 'querystring';
import { SERVICES } from '../../constants';

export type Center = {
  id: string;
  city: string;
  address: string;
  services: SERVICES;
};

export type Organization = {
  id: string;
  name: string;
  imageUrl: string;
  centers: Center[];
};

export type OrganizationProps = {
  data: Organization;
};

export interface IParams extends ParsedUrlQuery {
  id: string;
}
