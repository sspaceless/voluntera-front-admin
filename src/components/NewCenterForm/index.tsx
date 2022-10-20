import { Box, Button, Divider, Modal, Checkbox, Stepper, Text, TextInput } from '@mantine/core';
import { TimeInput } from '@mantine/dates';
import { IconCheck } from '@tabler/icons';
import { useForm } from '@mantine/form';
import { FC, useState } from 'react';

import { CenterDataFormValues } from '../../types';
import { NewCenterFormProps } from './types';
import { ImageDropzone } from '../UI';

import { SERVICES, SERVICES_LABELS } from '../../constants';
import styles from './NewCenterForm.module.scss';

export const NewCenterForm: FC<NewCenterFormProps> = ({ isOpen, onClose }) => {
  const [active, setActive] = useState(0);

  const form = useForm<CenterDataFormValues>({
    initialValues: {
      name: '',
      address: '',
      longitude: '',
      latitude: '',
      phoneNumber: '',
      start: '',
      end: '',
      services: [],
    },
    validate: {},
  });

  const nextStep = () => {
    setActive((current) => (current < 2 ? current + 1 : current));
  };

  const prevStep = () => {
    setActive((current) => (current > 0 ? current - 1 : current));
  };

  const handleModalClosing = () => {
    onClose();
    setActive(0);
  };

  const handleFormSubmission = (values: CenterDataFormValues) => {
    if (active < 1) {
      setActive(1);
      return;
    }

    console.log(values);
    setActive(0);
    onClose();
  };

  const modalTitle = (
    <Box className={styles.title}>
      <Text size={24} weight={700}>
        Додати новий Центр
      </Text>
    </Box>
  );

  const firstStep = (
    <>
      <Divider mt={8} />
      <Box className={styles.form}>
        <TextInput mt="xl" placeholder="Введіть назву центру" label="Назва центру" withAsterisk />
        <TextInput
          mt="sm"
          placeholder="Введіть повну адресу центру"
          label="Адреса центру"
          withAsterisk
        />
        <Box className={styles['paired-input-container']}>
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
      <Divider />
      <Box pt="sm" className={styles['button-container']}>
        <Button onClick={nextStep}>Далі</Button>
      </Box>
    </>
  );

  const secondStep = (
    <>
      <Divider />
      <Box>
        <Box mt={12} mb={16} className={styles['time-input-container']}>
          <TimeInput
            mt="sm"
            label="Час відкриття"
            format="24"
            defaultValue={new Date(0)}
            withAsterisk
            clearable
          />
          <TimeInput
            mt="sm"
            label="Час закриття"
            format="24"
            defaultValue={new Date(0)}
            withAsterisk
            clearable
          />
        </Box>
        <Checkbox.Group mt="md" label="Послуга центру" withAsterisk>
          <Checkbox value={SERVICES.food} label={SERVICES_LABELS.get(SERVICES.food)} />
          <Checkbox value={SERVICES.clothes} label={SERVICES_LABELS.get(SERVICES.clothes)} />
          <Checkbox value={SERVICES.aid} label={SERVICES_LABELS.get(SERVICES.aid)} />
          <Checkbox value={SERVICES.housing} label={SERVICES_LABELS.get(SERVICES.housing)} />
        </Checkbox.Group>
        <ImageDropzone />
      </Box>
      <Divider />
      <Box pt="sm" className={`${styles['button-container']} ${styles.second}`}>
        <Button variant="outline" onClick={prevStep}>
          Назад
        </Button>
        <Button type="submit" leftIcon={<IconCheck />}>
          Створити
        </Button>
      </Box>
    </>
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
        <Stepper mt={28} px={70} active={active} onStepClick={setActive} breakpoint="sm">
          <Stepper.Step label="Крок 1" allowStepSelect={active > 0}>
            {firstStep}
          </Stepper.Step>
          <Stepper.Step label="Крок 2" allowStepSelect={active > 1}>
            {secondStep}
          </Stepper.Step>
        </Stepper>
      </form>
    </Modal>
  );
};
