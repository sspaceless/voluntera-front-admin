import { Modal, TextInput, Textarea, Button, Text, Box } from '@mantine/core';
import { IconCheck } from '@tabler/icons';
import { useForm } from '@mantine/form';
import { FC } from 'react';

import { ImageDropzone } from '../UI';

import { FormValues, NewOrganizationFormProps } from './types';
import styles from './NewOrganizationForm.module.scss';

export const NewOrganizationForm: FC<NewOrganizationFormProps> = ({ isOpen, onClose }) => {
  const form = useForm<FormValues>({
    initialValues: {
      name: '',
      phone: '',
      webPageUrl: '',
      description: '',
    },
    validate: {},
  });

  const handleFormSubmission = (values: FormValues) => {
    console.log(values);
    onClose();
  };

  const modalTitle = (
    <Box className={styles.title}>
      <Text size={24} weight={700}>
        Створити нову організацію
      </Text>
    </Box>
  );

  return (
    <Modal opened={isOpen} onClose={onClose} title={modalTitle} size={720} padding="xs" centered>
      <form onSubmit={form.onSubmit(handleFormSubmission)}>
        <Box className={styles.form}>
          <TextInput
            mt="xl"
            placeholder="Введіть назву організації"
            label="Назва організації"
            withAsterisk
          />
          <TextInput
            mt="sm"
            placeholder="Введіть телефон організації"
            label="Телефон організації"
            withAsterisk
          />
          <TextInput
            mt="sm"
            placeholder="Введіть посилання на веб-сайт організації"
            label="Веб-сайт організації"
          />
          <Textarea mt="sm" placeholder="Введіть опис організації" label="Опис організації" />
          <ImageDropzone />
        </Box>
        <Box pt="sm" className={styles['button-container']}>
          <Button type="submit" leftIcon={<IconCheck />}>
            Створити
          </Button>
        </Box>
      </form>
    </Modal>
  );
};
