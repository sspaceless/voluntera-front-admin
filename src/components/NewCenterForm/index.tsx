import { Box, Button, Modal, Text, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { FC } from 'react';

import { FormValues, NewCenterFormProps } from './types';
import styles from './NewCenterForm.module.scss';

export const NewCenterForm: FC<NewCenterFormProps> = ({ isOpen, onClose }) => {
  const form = useForm<FormValues>({
    initialValues: {
      name: '',
      address: '',
      longitude: '',
      latitude: '',
      phoneNumber: '',
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
        Додати новий Центр
      </Text>
    </Box>
  );

  return (
    <Modal opened={isOpen} onClose={onClose} title={modalTitle} size={720} padding="xs" centered>
      <form onSubmit={form.onSubmit(handleFormSubmission)}>
        <Box className={styles.form}>
          <TextInput mt="xl" placeholder="Введіть назву центру" label="Назва центру" withAsterisk />
          <TextInput
            mt="sm"
            placeholder="Введіть повну адресу центру"
            label="Адреса центру"
            withAsterisk
          />
          <Box>
            <TextInput mt="sm" placeholder="Введіть широту" label="Широта" withAsterisk />
            <TextInput mt="sm" placeholder="Введіть довготу" label="Довгота" withAsterisk />
          </Box>
          <TextInput
            mt="sm"
            mb="xl"
            placeholder="Введіть телефон центру"
            label="Телефон центру"
            withAsterisk
          />
        </Box>
        <Box pt="sm" className={styles['button-container']}>
          <Button type="submit">Далі</Button>
        </Box>
      </form>
    </Modal>
  );
};
