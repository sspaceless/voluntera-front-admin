import { Input, Button, MultiSelect, Modal } from '@mantine/core';
import { IconSearch } from '@tabler/icons';
import { FC, useState } from 'react';
import { OrganizationCard } from '../components';

import styles from './HomePage.module.scss';

const MOCK_ORGANIZATIONS = [
  { id: '1', name: 'Повернись ситим', imageUrl: '/images/mock.svg' },
  { id: '2', name: 'Повернись ситим', imageUrl: '/images/mock.svg' },
];

const HomePage: FC = () => {
  const [isFormOpened, setIsFormOpened] = useState(false);

  const toggleModal = () => {
    setIsFormOpened((prevState) => !prevState);
  };

  const organizations = MOCK_ORGANIZATIONS.map((item) => (
    <OrganizationCard key={item.id} id={item.id} name={item.name} imageUrl={item.imageUrl} />
  ));

  return (
    <>
      <Modal opened={isFormOpened} onClose={toggleModal} title="Introduce yourself!">
        asd
      </Modal>
      <div className={styles['tools-container']}>
        <div className={styles['left-container']}>
          <Input rightSection={<IconSearch size={15} />} placeholder="Пошук за ключовими словами" />
          <Button mx="md" onClick={toggleModal}>
            + Нова організація
          </Button>
        </div>
        <MultiSelect
          data={['Is not that', 'awesome?']}
          placeholder="Одеса, Одеська область: 3 центри"
        />
      </div>
      <div className={styles['organizations-container']}>{organizations}</div>
    </>
  );
};

export default HomePage;
