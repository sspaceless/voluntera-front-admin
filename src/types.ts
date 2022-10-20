import { ParsedUrlQuery } from 'querystring';

export type CenterData = {
  id: string;
  title: string;
  address: string;
  phoneNumber: string;
  start: string;
  end: string;
  longitude: string;
  latitude: string;
  service: string;
};

export type OrganizationData = {
  id: string;
  title: string;
  photoUrl: string;
  link: string;
  phoneNumber: string;
  description: string;
  centers?: CenterData[];
};

export type CenterDataFormValues = Omit<CenterData, 'id'>;
export type OrganizationDataFormValues = Omit<OrganizationData, 'id'>;

export interface IParams extends ParsedUrlQuery {
  id: string;
}
