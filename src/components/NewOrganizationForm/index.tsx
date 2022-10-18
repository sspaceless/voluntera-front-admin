import { Modal, TextInput, Textarea, Button, Box } from '@mantine/core';
import { IconCheck } from '@tabler/icons';
import { useForm } from '@mantine/form';
import { FC } from 'react';

import { CustomDropzone } from './CustomDropzone';

import { FormValues, NewOrganizationFormProps } from './types';
import styles from './NewOrganizationForm.module.scss';

export const NewOrganizationForm: FC<NewOrganizationFormProps> = ({ isOpened, onClose }) => {
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

  const modalTitle = <div className={styles.title}>Створити нову організацію</div>;

  return (
    <Modal opened={isOpened} onClose={onClose} title={modalTitle} size={720} centered>
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
          <CustomDropzone />
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
