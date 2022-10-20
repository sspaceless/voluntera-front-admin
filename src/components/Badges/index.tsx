import { IconBed, IconFirstAidKit, IconHanger, IconToolsKitchen2 } from '@tabler/icons';
import { Badge, Box, useMantineTheme } from '@mantine/core';
import { FC } from 'react';

import { SERVICES, SERVICES_LABELS } from '../../constants';
import styles from './Badges.module.scss';
import { BadgesProps } from './types';

export const Badges: FC<BadgesProps> = ({ services }) => {
  const theme = useMantineTheme();
  const badgesIcons = new Map([
    [SERVICES.housing, <IconBed key={SERVICES.housing} size={18} />],
    [SERVICES.clothes, <IconHanger key={SERVICES.clothes} size={18} />],
    [SERVICES.food, <IconToolsKitchen2 key={SERVICES.food} size={18} />],
    [SERVICES.aid, <IconFirstAidKit key={SERVICES.aid} size={18} />],
  ]);

  const badges = services.map((item, index) => {
    if (!item) {
      return undefined;
    }

    const id = `${item}-${index}`;
    return (
      <Badge
        mr={8}
        key={id}
        style={{ color: theme.colors.secondary[0], borderColor: theme.colors.stroke[0] }}
        radius="xs"
        variant="outline"
        className={styles.badge}
        leftSection={badgesIcons.get(SERVICES[`${item}`])}
      >
        {SERVICES_LABELS.get(SERVICES[`${item}`])}
      </Badge>
    );
  });

  return <Box>{badges}</Box>;
};
