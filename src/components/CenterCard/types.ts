export type Center = {
  name: string;
  address: string;
  phoneNumber: string;
  start: string;
  end: string;
  longitude: string;
  latitude: string;
  services: string[];
};

export type CenterCardProps = {
  data: Center;
};
