import {
  useMantineTheme,
  ActionIcon,
  Divider,
  Button,
  Badge,
  Image,
  Card,
  Text,
  Box,
  Input,
} from '@mantine/core';
import {
  IconBed,
  IconChevronLeft,
  IconDotsVertical,
  IconFirstAidKit,
  IconHanger,
  IconPlus,
  IconSearch,
  IconToolsKitchen2,
} from '@tabler/icons';

import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';

import { CenterCard, NewCenterForm } from '../../components';

import { MOCK_ORGANIZATIONS } from '../../constants';
import styles from './Organization.module.scss';

export type Center = {
  id: string;
  name: string;
  city: string;
  address: string;
  services: string[];
};

export type OrganizationData = {
  id: string;
  name: string;
  imageUrl: string;
  centers: Center[];
};

export type OrganizationProps = {
  data: OrganizationData;
};

export interface IParams extends ParsedUrlQuery {
  id: string;
}

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

const Organization: FC<OrganizationProps> = ({ data }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const theme = useMantineTheme();
  const router = useRouter();

  const toggleModal = () => {
    setIsFormOpen((prevState) => !prevState);
  };

  const handleForwardButtonClick = () => {
    router.push('/');
  };

  const imageAlt = `${data.id}-organization-image`;
  const centers = data.centers.map((item) => <CenterCard key={item.id} data={item} />);
  const organizationInfo = (
    <Card p={0} className={styles['info-card']} withBorder>
      <Image src={data.imageUrl} alt={imageAlt} width={224} height={224} />
      <Box className={styles['info-container']}>
        <Box my="sm" mx="md" className={styles['info-label']}>
          <Text size="lg">{data.name}</Text>
          <ActionIcon>
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
            <Badge
              mr={8}
              leftSection={<IconToolsKitchen2 />}
              color="gray"
              radius="xs"
              variant="outline"
              className={styles['info-badge']}
            >
              Їжа
            </Badge>
            <Badge
              mr={8}
              leftSection={<IconHanger />}
              color="gray"
              radius="xs"
              variant="outline"
              className={styles['info-badge']}
            >
              Одяг
            </Badge>
            <Badge
              mr={8}
              leftSection={<IconFirstAidKit />}
              color="gray"
              radius="xs"
              variant="outline"
              className={styles['info-badge']}
            >
              Медична допомога
            </Badge>
            <Badge
              mr={8}
              leftSection={<IconBed />}
              color="gray"
              radius="xs"
              variant="outline"
              className={styles['info-badge']}
            >
              Житло
            </Badge>
          </Box>
        </Box>
      </Box>
    </Card>
  );

  return (
    <>
      <NewCenterForm isOpen={isFormOpen} onClose={toggleModal} />
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
              <Button leftIcon={<IconPlus />} onClick={toggleModal}>
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
