import { Box, Card, Text, useMantineTheme, Button } from '@mantine/core';
import { IconBuildingCommunity, IconMapPin, IconSettings, IconTrash } from '@tabler/icons';
import { FC } from 'react';

import { CenterCardProps } from './types';
import styles from './CenterCard.module.scss';
import { Badges } from '../Badges';

export const CenterCard: FC<CenterCardProps> = ({ data }) => {
  const theme = useMantineTheme();
  return (
    <Card mb={8} className={styles['center-card']} withBorder>
      <Box className={styles['info-container']}>
        <Text mb={8} weight={600} size={18}>
          {data.name}
        </Text>

        <Box className={styles['info-label']}>
          <IconBuildingCommunity size={20} color={theme.colors.secondary[0]} />
          <Text ml={8} weight={400} size={16} color={theme.colors.secondary[0]}>
            {data.city}
          </Text>
        </Box>

        <Box className={styles['info-label']}>
          <IconMapPin size={20} color={theme.colors.secondary[0]} />
          <Text ml={8} weight={400} size={16} color={theme.colors.secondary[0]}>
            {data.address}
          </Text>
        </Box>

        <Text weight={400} size={18} color={theme.colors.light[0]}>
          Послуга центру:
        </Text>
        <Badges services={data.services} />
      </Box>
      <Box className={styles['buttons-container']}>
        <Button mb="md" variant="outline" leftIcon={<IconSettings />}>
          Налаштування центру
        </Button>
        <Button
          variant="outline"
          leftIcon={<IconTrash />}
          style={{ color: theme.colors.error[0], borderColor: theme.colors.error[0] }}
        >
          Видалити центр
        </Button>
      </Box>
    </Card>
  );
};
