/* eslint-disable arrow-body-style */
import { Input, Button, MultiSelect, Group } from '@mantine/core';
import { IconPlus, IconSearch } from '@tabler/icons';
import { GetStaticProps } from 'next';
import { FC, useState } from 'react';

import { NewOrganizationForm, OrganizationCard } from '../components';

import { MOCK_ORGANIZATIONS } from '../constants';
import { OrganizationData } from '../types';
import styles from './HomePage.module.scss';

export const getStaticProps: GetStaticProps = async () => ({
  props: { organizationsData: MOCK_ORGANIZATIONS },
});

const HomePage: FC<{ organizationsData: OrganizationData[] }> = ({ organizationsData }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleModal = () => {
    setIsFormOpen((prevState) => !prevState);
  };

  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const filteredOrganizations = organizationsData.filter((organization) => {
    return organization.title.includes(searchQuery.trim());
  });

  const organizations = filteredOrganizations.map((item) => (
    <OrganizationCard key={item.id} data={item} />
  ));

  return (
    <>
      <NewOrganizationForm isOpen={isFormOpen} onClose={toggleModal} />
      <div className={styles['tools-container']}>
        <div className={styles['left-container']}>
          <Input
            rightSection={<IconSearch size={15} />}
            placeholder="Пошук за ключовими словами"
            onChange={handleSearchInputChange}
          />
          <Button mx="md" onClick={toggleModal} leftIcon={<IconPlus />}>
            Нова організація
          </Button>
        </div>
        <MultiSelect
          style={{ width: '400px' }}
          data={[]}
          placeholder="Одеса, Одеська область: 3 центри"
        />
      </div>
      <Group mt="sm">{organizations}</Group>
    </>
  );
};

export default HomePage;
