import { Button, Card, Image } from '@mantine/core';
import { IconSettings } from '@tabler/icons';
import { useRouter } from 'next/router';
import { FC } from 'react';

import styles from './OrganizationCard.module.scss';
import { OrganizationCardProps } from './types';

export const OrganizationCard: FC<OrganizationCardProps> = ({ data }) => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push(`/${data.id}`);
  };

  const imageAlt = `organization-${data.id}`;

  return (
    <Card p="sm" className={styles.container}>
      <div className={styles['name-container']}>{data.title}</div>
      <Image src={data.photoUrl} alt={imageAlt} radius={4} />
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
