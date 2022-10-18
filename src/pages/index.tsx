import { Input, Button, MultiSelect } from '@mantine/core';
import { IconSearch } from '@tabler/icons';
import { FC } from 'react';

import styles from './HomePage.module.scss';

const HomePage: FC = () => (
  <div className={styles['tools-container']}>
    <div className={styles['left-container']}>
      <Input rightSection={<IconSearch size={15} />} placeholder="Пошук за ключовими словами" />
      <Button mx="md">+ Нова організація</Button>
    </div>
    <MultiSelect data={['Is not that', 'awesome?']} placeholder="MultiSelect with custom layout" />
  </div>
);

export default HomePage;
