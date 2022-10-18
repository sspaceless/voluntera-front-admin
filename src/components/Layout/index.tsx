/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-wrap-multilines */
import { AppShell, Header } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { LayoutProps } from './types';
import styles from './Layout.module.scss';

export const Layout: FC<LayoutProps> = ({ children }) => (
  <AppShell
    header={
      <Header height={80} p="xl">
        <div className={styles.header}>
          <Link href="/">
            <a>
              <Image src="/images/volontera-logo.svg" alt="volontera-logo" width={25} height={25} />
            </a>
          </Link>

          <Image src="/images/settings-icon.svg" alt="settings-icon" width={25} height={25} />
        </div>
      </Header>
    }
    styles={(theme) => ({
      main: {
        backgroundColor: theme.colors.background,
      },
    })}
  >
    <div className={styles['app-container']}>{children}</div>
  </AppShell>
);
