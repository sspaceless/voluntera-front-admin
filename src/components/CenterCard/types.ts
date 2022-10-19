export type Center = {
  id: string;
  name: string;
  city: string;
  address: string;
  services: string[];
};

export type CenterCardProps = {
  data: Center;
};
