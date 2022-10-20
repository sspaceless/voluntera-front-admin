import { ParsedUrlQuery } from 'querystring';

export type CenterData = {
  id: string;
  name: string;
  address: string;
  phoneNumber: string;
  start: string;
  end: string;
  longitude: string;
  latitude: string;
  services: string[];
};

export type OrganizationData = {
  id: string;
  name: string;
  imageUrl: string;
  webPageUrl: string;
  phoneNumber: string;
  description: string;
  centers?: CenterData[];
};

export type CenterDataFormValues = Omit<CenterData, 'id'>;
export type OrganizationDataFormValues = Omit<OrganizationData, 'id'>;

export interface IParams extends ParsedUrlQuery {
  id: string;
}
