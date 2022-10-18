/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-wrap-multilines */
import { AppShell, Header, useMantineTheme } from '@mantine/core';
import { IconSettings } from '@tabler/icons';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { LayoutProps } from './types';
import styles from './Layout.module.scss';

export const Layout: FC<LayoutProps> = ({ children }) => {
  const theme = useMantineTheme();

  return (
    <AppShell
      header={
        <Header height={80} p="xl">
          <div className={styles.header}>
            <Link href="/">
              <a>
                <Image
                  src="/images/volontera-logo.svg"
                  alt="volontera-logo"
                  width={25}
                  height={25}
                />
              </a>
            </Link>
            <IconSettings color={theme.colors.light[0]} />
          </div>
        </Header>
      }
      styles={{
        main: {
          backgroundColor: theme.colors.background[0],
        },
      }}
    >
      {children}
    </AppShell>
  );
};
