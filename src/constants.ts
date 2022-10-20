export enum SERVICES {
  'housing' = 'housing',
  'clothes' = 'clothes',
  'food' = 'food',
  'aid' = 'aid',
}

export const SERVICES_LABELS = new Map([
  [SERVICES.housing, 'Житло'],
  [SERVICES.clothes, 'Одяг'],
  [SERVICES.food, 'Їжа'],
  [SERVICES.aid, 'Медична допомога'],
]);

export const ORGANIZATION_FORM_VALIDATION = {
  title: (value) => (value.length === 0 ? 'Must not be empty.' : null),
  phoneNumber: (value) => (value.length === 0 ? 'Must not be empty.' : null),
};

export const CENTER_DATA_FORM_VALIDATION = {
  title: (value) => (value.length === 0 ? 'Must not be empty.' : null),
  address: (value) => (value.length === 0 ? 'Must not be empty.' : null),
  phoneNumber: (value) => (value.length === 0 ? 'Must not be empty.' : null),
  start: (value) => (value.length === 0 ? 'Must not be empty.' : null),
  end: (value) => (value.length === 0 ? 'Must not be empty.' : null),
  longitude: (value) => (value.length === 0 ? 'Must not be empty.' : null),
  latitude: (value) => (value.length === 0 ? 'Must not be empty.' : null),
  service: (value) => (value.length === 0 ? 'Must not be empty.' : null),
};

export const MOCK_ORGANIZATIONS = [
  {
    id: '1',
    title: 'Повернись ситим 1',
    photoUrl: '/images/mock.png',
    phoneNumber: '121',
    centers: [
      {
        id: '11',
        title: 'Центр допомоги 1',
        phoneNumber: '121',
        start: '123123',
        end: '123123',
        longitude: '',
        latitude: '',
        city: 'місто А',
        address: 'вул. Вулична, 1д.',
        service: 'food',
      },
      {
        id: '12',
        title: 'Центр допомоги 2',
        city: 'місто А',
        address: 'вул. Вулична, 2д.',
        service: 'aid',
      },
      {
        id: '13',
        title: 'Центр допомоги 3',
        city: 'місто А',
        address: 'вул. Вулична, 3д.',
        service: 'housing',
      },
    ],
  },
  {
    id: '2',
    title: 'Повернись ситим 2',
    photoUrl: '/images/mock.png',
    centers: [
      {
        id: '21',
        title: 'Центр допомоги 1',
        phoneNumber: '121',
        start: '123123',
        end: '123123',
        longitude: '',
        latitude: '',
        address: 'вул. Вулична, 1д.',
        service: 'food',
      },
      {
        id: '22',
        title: 'Центр допомоги 2',
        city: 'місто А',
        address: 'вул. Вулична, 2д.',
        service: 'aid',
      },
      {
        id: '23',
        title: 'Центр допомоги 3',
        city: 'місто А',
        address: 'вул. Вулична, 3д.',
        service: 'clothes',
      },
    ],
  },
  {
    id: '3',
    title: 'Повернись ситим 3',
    photoUrl: '/images/mock.png',
    centers: [
      {
        id: '31',
        title: 'Центр допомоги 1',
        address: 'вул. Вулична, 1д.',
        service: 'clothes',
      },
      {
        id: '32',
        title: 'Центр допомоги 2',
        address: 'вул. Вулична, 2д.',
        service: 'food',
      },
      {
        id: '33',
        title: 'Центр допомоги 3',
        address: 'вул. Вулична, 3д.',
        service: 'housing',
      },
    ],
  },
];
