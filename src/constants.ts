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

export const MOCK_ORGANIZATIONS = [
  {
    id: '1',
    name: 'Повернись ситим',
    imageUrl: '/images/mock.png',
    centers: [
      {
        id: '11',
        name: 'Центр допомоги 1',
        city: 'місто А',
        address: 'вул. Вулична, 1д.',
        services: ['food', 'clothes'],
      },
      {
        id: '12',
        name: 'Центр допомоги 2',
        city: 'місто А',
        address: 'вул. Вулична, 2д.',
        services: ['aid', 'food'],
      },
      {
        id: '12',
        name: 'Центр допомоги 3',
        city: 'місто А',
        address: 'вул. Вулична, 3д.',
        services: ['food', 'housing'],
      },
    ],
  },
  { id: '2', name: 'Повернись ситим', imageUrl: '/images/mock.png' },
  { id: '3', name: 'Повернись ситим', imageUrl: '/images/mock.png' },
];
