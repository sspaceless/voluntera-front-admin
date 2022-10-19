import { Input, Button, MultiSelect, Group } from '@mantine/core';
import { IconPlus, IconSearch } from '@tabler/icons';
import { GetStaticProps } from 'next';
import { FC, useState } from 'react';

import { NewOrganizationForm, OrganizationCard } from '../components';

import { MOCK_ORGANIZATIONS } from '../constants';
import styles from './HomePage.module.scss';

export const getStaticProps: GetStaticProps = async () => ({
  props: { organizations: MOCK_ORGANIZATIONS },
});

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
      <NewOrganizationForm isOpened={isFormOpened} onClose={toggleModal} />
      <div className={styles['tools-container']}>
        <div className={styles['left-container']}>
          <Input rightSection={<IconSearch size={15} />} placeholder="Пошук за ключовими словами" />
          <Button mx="md" onClick={toggleModal} leftIcon={<IconPlus />}>
            Нова організація
          </Button>
        </div>
        <MultiSelect
          style={{ width: '400px' }}
          data={['Is not that', 'awesome?']}
          placeholder="Одеса, Одеська область: 3 центри"
        />
      </div>
      <Group>{organizations}</Group>
    </>
  );
};

export default HomePage;
