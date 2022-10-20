import {
  useMantineTheme,
  ActionIcon,
  Divider,
  Button,
  Image,
  Card,
  Text,
  Box,
  Input,
} from '@mantine/core';
import { IconChevronLeft, IconDotsVertical, IconPlus, IconSearch } from '@tabler/icons';

import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';

import { Badges, CenterCard, EditOrganizationForm, NewCenterForm } from '../../components';

import { MOCK_ORGANIZATIONS } from '../../constants';
import styles from './Organization.module.scss';
import { IParams, OrganizationData } from '../../types';

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = MOCK_ORGANIZATIONS.map((item) => ({
    params: { id: item.id },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as IParams;
  const currentOrganizationData = MOCK_ORGANIZATIONS.find((item) => item.id === id);

  return {
    props: { data: currentOrganizationData },
  };
};

const Organization: FC<{ data: OrganizationData }> = ({ data }) => {
  const [isNewCenterFormOpen, setIsFormOpen] = useState(false);
  const [isEdiFormOpen, setIsEditFormOpen] = useState(false);

  const theme = useMantineTheme();
  const router = useRouter();

  const toggleNewCenterForm = () => {
    setIsFormOpen((prevState) => !prevState);
  };

  const toggleEditOrganizationForm = () => {
    setIsEditFormOpen((prevState) => !prevState);
  };

  const handleForwardButtonClick = () => {
    router.push('/');
  };

  const imageAlt = `${data.id}-organization-image`;
  const services = data.centers.map((item) => item.service);
  const centers = data.centers.map((item) => <CenterCard key={item.id} data={item} />);

  const organizationInfo = (
    <Card p={0} className={styles['info-card']} withBorder>
      <Image src={data.photoUrl} alt={imageAlt} width={224} height={224} />
      <Box className={styles['info-container']}>
        <Box my="sm" mx="md" className={styles['info-label']}>
          <Text size="lg">{data.title}</Text>
          <ActionIcon onClick={toggleEditOrganizationForm}>
            <IconDotsVertical />
          </ActionIcon>
        </Box>
        <Divider mx="md" />
        <Box m="md" className={styles['info-stats']}>
          <Box mr={35}>
            <Text weight={400} size={16} color={theme.colors.light[0]}>
              Діючих центрів:
            </Text>
            <Text weight={700} size={18} color={theme.colors.secondary[0]}>
              {data.centers?.length}
            </Text>
          </Box>
          <Box>
            <Text weight={400} size={16} color={theme.colors.light[0]}>
              Регіонів дії центрів:
            </Text>
            <Text weight={700} size={18} color={theme.colors.secondary[0]}>
              {3}
            </Text>
          </Box>
          <Box />
        </Box>
        <Box m="md">
          <Text weight={400} size={16} color={theme.colors.light[0]}>
            Послуги організації:
          </Text>
          <Box>
            <Badges services={services} />
          </Box>
        </Box>
      </Box>
    </Card>
  );

  return (
    <>
      <EditOrganizationForm
        isOpen={isEdiFormOpen}
        onClose={toggleEditOrganizationForm}
        data={data}
      />
      <NewCenterForm isOpen={isNewCenterFormOpen} onClose={toggleNewCenterForm} />
      <Box style={{ display: 'flex', justifyContent: 'center' }}>
        <Box className={styles.container}>
          <Box mb="xl" className={styles['navigation-container']}>
            <Button p={8} onClick={handleForwardButtonClick}>
              <IconChevronLeft size={20} />
            </Button>
            <Text ml="md" weight={700} size={24}>
              Деталі Організації
            </Text>
          </Box>
          {organizationInfo}
          <Box my="xl">
            <Text weight={700} size={24}>
              Діючі Центри
            </Text>
            <Box mt="xl" className={styles['tools-container']}>
              <Input
                mr="md"
                rightSection={<IconSearch size={15} />}
                placeholder="Пошук за назвою центру"
              />
              <Button leftIcon={<IconPlus />} onClick={toggleNewCenterForm}>
                Додати центр
              </Button>
            </Box>
          </Box>

          <Card p="md" className={styles['centers-card']}>
            {centers}
          </Card>
        </Box>
      </Box>
    </>
  );
};

export default Organization;
