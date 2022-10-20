import {
  Box,
  Button,
  Divider,
  Modal,
  Radio,
  Text,
  TextInput,
  useMantineTheme,
} from '@mantine/core';
import { TimeInput } from '@mantine/dates';
import { IconCheck, IconTrash } from '@tabler/icons';
import { useForm } from '@mantine/form';
import { FC } from 'react';

import { CenterData, CenterDataFormValues } from '../../types';
import { EditCenterFormProps } from './types';
import { ImageDropzone } from '../UI';

import { CENTER_DATA_FORM_VALIDATION, SERVICES, SERVICES_LABELS } from '../../constants';
import styles from './EditCenterForm.module.scss';

export const EditCenterForm: FC<EditCenterFormProps> = ({ isOpen, onClose, data }) => {
  const theme = useMantineTheme();
  const form = useForm<CenterDataFormValues>({
    initialValues: data,
    validate: CENTER_DATA_FORM_VALIDATION,
  });

  const handleModalClosing = () => {
    onClose();
    form.reset();
  };

  const handleFormSubmission = (values: CenterData) => {
    console.log(values);
    onClose();
  };

  const modalTitle = (
    <Box className={styles.title}>
      <Text size={24} weight={700}>
        Редагувати Центр
      </Text>
    </Box>
  );

  const firstStep = (
    <Box mt={24} className={styles['form-wrapper']}>
      <TextInput
        placeholder="Введіть назву центру"
        label="Назва центру"
        withAsterisk
        {...form.getInputProps('title')}
      />
      <TextInput
        mt="sm"
        placeholder="Введіть повну адресу центру"
        label="Адреса центру"
        {...form.getInputProps('address')}
        withAsterisk
      />
      <Box className={styles['paired-input-container']}>
        <TextInput
          mt="sm"
          placeholder="Введіть широту"
          label="Широта"
          {...form.getInputProps('latitude')}
          withAsterisk
        />
        <TextInput
          mt="sm"
          placeholder="Введіть довготу"
          label="Довгота"
          {...form.getInputProps('longitude')}
          withAsterisk
        />
      </Box>
      <TextInput
        mt="sm"
        mb="xl"
        placeholder="Введіть телефон центру"
        label="Телефон центру"
        {...form.getInputProps('phoneNumber')}
        withAsterisk
      />
    </Box>
  );

  const secondStep = (
    <Box mt={24} className={styles['form-wrapper']}>
      <Box mb={16} className={styles['time-input-container']}>
        <TimeInput label="Час відкриття" format="24" withAsterisk clearable />
        <TimeInput label="Час закриття" format="24" withAsterisk clearable />
      </Box>
      <Radio.Group
        mt="md"
        label="Послуга центру"
        withAsterisk
        className={styles['checkbox-container']}
        {...form.getInputProps('service')}
      >
        <Radio value={SERVICES.food} label={SERVICES_LABELS.get(SERVICES.food)} />
        <Radio value={SERVICES.clothes} label={SERVICES_LABELS.get(SERVICES.clothes)} />
        <Radio value={SERVICES.aid} label={SERVICES_LABELS.get(SERVICES.aid)} />
        <Radio value={SERVICES.housing} label={SERVICES_LABELS.get(SERVICES.housing)} />
      </Radio.Group>
      <ImageDropzone />
    </Box>
  );

  return (
    <Modal
      opened={isOpen}
      onClose={handleModalClosing}
      title={modalTitle}
      size={977}
      padding={30}
      centered
    >
      <form onSubmit={form.onSubmit(handleFormSubmission)}>
        <Box className={styles.form}>
          {firstStep}
          <Divider orientation="vertical" m={24} />
          {secondStep}
        </Box>

        <Box pt="sm" className={`${styles['button-container']} ${styles.second}`}>
          <Button
            variant="outline"
            leftIcon={<IconTrash />}
            style={{ color: theme.colors.error[0], borderColor: theme.colors.error[0] }}
          >
            Видалити центр
          </Button>
          <Button type="submit" leftIcon={<IconCheck />}>
            Зберегти зміни
          </Button>
        </Box>
      </form>
    </Modal>
  );
};
