import { Box, Card } from '@mantine/core';
import { FC } from 'react';

import { CenterCardProps } from './types';
import styles from './CenterCard.module.scss';

export const CenterCard: FC<CenterCardProps> = ({ data }) => (
  <Card withBorder>
    <Box>1</Box>
    <Box>1</Box>
  </Card>
);
