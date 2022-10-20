import { Modal, TextInput, Textarea, Button, Text, Box, useMantineTheme } from '@mantine/core';
import { IconCheck, IconTrash } from '@tabler/icons';
import { useForm } from '@mantine/form';
import { FC } from 'react';

import { ImageDropzone } from '../UI';

import { EditOrganizationFormProps } from './types';
import styles from './EditOrganizationForm.module.scss';
import { OrganizationDataFormValues } from '../../types';
import { ORGANIZATION_FORM_VALIDATION } from '../../constants';

export const EditOrganizationForm: FC<EditOrganizationFormProps> = ({ isOpen, onClose, data }) => {
  const theme = useMantineTheme();

  const form = useForm<OrganizationDataFormValues>({
    initialValues: data,
    validate: ORGANIZATION_FORM_VALIDATION,
  });

  const handleFormSubmission = (values: OrganizationDataFormValues) => {
    onClose();
    form.reset();
  };

  const handleModalClosing = () => {
    onClose();
    form.reset();
  };

  const modalTitle = (
    <Box className={styles.title}>
      <Text size={24} weight={700}>
        Редагувати Організацію
      </Text>
    </Box>
  );

  return (
    <Modal
      opened={isOpen}
      onClose={handleModalClosing}
      title={modalTitle}
      size={720}
      padding={30}
      centered
    >
      <form onSubmit={form.onSubmit(handleFormSubmission)}>
        <Box className={styles.form}>
          <TextInput
            mt="xl"
            placeholder="Введіть назву організації"
            label="Назва організації"
            {...form.getInputProps('title')}
            withAsterisk
          />
          <TextInput
            mt="sm"
            placeholder="Введіть телефон організації"
            label="Телефон організації"
            {...form.getInputProps('phoneNumber')}
            withAsterisk
          />
          <TextInput
            mt="sm"
            placeholder="Введіть посилання на веб-сайт організації"
            label="Веб-сайт організації"
            {...form.getInputProps('link')}
          />
          <Textarea
            mt="sm"
            placeholder="Введіть опис організації"
            label="Опис організації"
            {...form.getInputProps('description')}
          />
          <ImageDropzone />
        </Box>
        <Box mx={14} mb={2} pt="sm" className={styles['button-container']}>
          <Button
            variant="outline"
            leftIcon={<IconTrash />}
            style={{ color: theme.colors.error[0], borderColor: theme.colors.error[0] }}
          >
            Видалити організацію
          </Button>
          <Button type="submit" leftIcon={<IconCheck />}>
            Зберегти зміни
          </Button>
        </Box>
      </form>
    </Modal>
  );
};
