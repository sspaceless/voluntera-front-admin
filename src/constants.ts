export enum SERVICES {
  'food' = 'Їжа',
  'clothes' = 'Одяг',
  'aid' = 'Медична допомога',
  'housing' = 'Житло',
}

export const MOCK_ORGANIZATIONS = [
  {
    id: '1',
    name: 'Повернись ситим',
    imageUrl: '/images/mock.png',
    centers: [
      { id: '11', city: 'місто А', address: 'вул. Вулична, 1д.', services: ['food', 'clothes'] },
      { id: '12', city: 'місто А', address: 'вул. Вулична, 2д.', services: ['aid', 'food'] },
      { id: '12', city: 'місто А', address: 'вул. Вулична, 3д.', services: ['food', 'housing'] },
    ],
  },
  { id: '2', name: 'Повернись ситим', imageUrl: '/images/mock.png' },
  { id: '3', name: 'Повернись ситим', imageUrl: '/images/mock.png' },
];
