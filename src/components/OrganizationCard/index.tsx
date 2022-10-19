import { Button, Card, Image } from '@mantine/core';
import { IconSettings } from '@tabler/icons';
import { useRouter } from 'next/router';
import { FC } from 'react';

import styles from './OrganizationCard.module.scss';
import { OrganizationCardProps } from './types';

export const OrganizationCard: FC<OrganizationCardProps> = ({ id, name, imageUrl }) => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push(`/${id}`);
  };

  const imageAlt = `organization-${id}`;

  return (
    <Card p="sm" my="sm" className={styles.container}>
      <div className={styles['name-container']}>{name}</div>
      <Image src={imageUrl} alt={imageAlt} />
      <Button
        mt="md"
        fullWidth
        variant="outline"
        leftIcon={<IconSettings />}
        onClick={handleButtonClick}
      >
        Детальніше
      </Button>
    </Card>
  );
};
