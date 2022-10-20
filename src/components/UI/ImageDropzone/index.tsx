import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE, FileWithPath } from '@mantine/dropzone';
import { Group, Text, useMantineTheme, Box } from '@mantine/core';
import { IconCheck, IconUpload, IconX } from '@tabler/icons';
import { FC, useState } from 'react';
import Image from 'next/image';

export const ImageDropzone: FC = (props: Partial<DropzoneProps>) => {
  const theme = useMantineTheme();
  const [uploadedFiles, setFiles] = useState<FileWithPath[]>([]);

  return (
    <Box mt="sm" mb="lg">
      Фото організації
      <Dropzone
        onDrop={setFiles}
        onReject={(files) => console.log('rejected files', files)}
        maxSize={5 * 1024 ** 2}
        accept={IMAGE_MIME_TYPE}
        {...props}
      >
        <Group position="center" spacing="xl" style={{ minHeight: 120, pointerEvents: 'none' }}>
          <Dropzone.Accept>
            <IconUpload
              size={50}
              stroke={1.5}
              color={theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6]}
            />
          </Dropzone.Accept>
          <Dropzone.Reject>
            <IconX
              size={50}
              stroke={1.5}
              color={theme.colors.red[theme.colorScheme === 'dark' ? 4 : 6]}
            />
          </Dropzone.Reject>
          <Box style={{ display: 'flex', alignItems: 'center' }}>
            {uploadedFiles.length === 0 && (
              <>
                <Image
                  src="/images/upload-image-icon.svg"
                  alt="upload-image-icon"
                  width={54}
                  height={54}
                />
                <Box ml="sm">
                  <Text size="lg">Перетягніть або оберіть</Text>
                  <Text size="xs">JPG або PNG файл, розміром до 5mb</Text>
                </Box>
              </>
            )}
            {uploadedFiles.length > 0 && (
              <>
                <IconCheck color={theme.colors.success[0]} />
                <Text size="md">Файл завантажено</Text>
              </>
            )}
          </Box>
        </Group>
      </Dropzone>
    </Box>
  );
};
