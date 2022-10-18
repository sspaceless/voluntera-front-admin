import { IconSettings } from '@tabler/icons';
import { Button, Card } from '@mantine/core';
import Image from 'next/image';
import { FC } from 'react';

import styles from './OrganizationCard.module.scss';
import { OrganizationCardProps } from './types';

export const OrganizationCard: FC<OrganizationCardProps> = ({ id, name, imageUrl }) => {
  const imageAlt = `organization-${id}`;

  return (
    <Card p="sm" my="sm" withBorder className={styles.container}>
      <div className={styles['name-container']}>{name}</div>
      <Image src={imageUrl} alt={imageAlt} width={300} height={154} />
      <Button mt="md" fullWidth variant="outline" leftIcon={<IconSettings />}>
        Детальніше
      </Button>
    </Card>
  );
};
