import React, { useRef, useState, useEffect, FormEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { DefaultTheme, withTheme } from 'styled-components';

import convertBytesToKB from '../../../utils/convertBytesToKB';

import Card from '../../atoms/Card';
import Icon from '../../atoms/Icon';
import Space from '../../atoms/Space';
import Caption from '../../atoms/Typography/Caption';
import Heading from '../../atoms/Typography/Heading';
import Overline from '../../atoms/Typography/Overline';
import Subtitle from '../../atoms/Typography/Subtitle';

import { FileUploadContainer, FormField, Label } from './styles';
import useToast from '../Toast/useToast';

const DEFAULT_MAX_FILE_SIZE_IN_BYTES = 500000;

export interface LocalizationType {
    placeholder?: string;
    description?: string;
    sizeError?: string;
    sizeInfo?: string;
}

export interface UploadProps {
    /**
     * label of upload field
     */
    label?: string;
    /**
     * change event
     */
    onChange?: (files: File[] | File) => void;
    /**
     * file types accepted
     */
    accept?: string;
    /**
     * allow multiple selection
     */
    multiple?: boolean;
    /**
     * allowed max file size in byte
     */
    maxFileSizeInBytes?: number;
    /**
     * error of react-hook-form
     */
    error?: any;
    /**
     * disabled flag
     */
    disabled?: any;
    /**
     * required flag for react-hook-form
     */
    required?: any;
    localization?: LocalizationType;
    theme?: DefaultTheme;
}

const itemVariants = {
    hidden: {
        opacity: 0,
        x: -5,
        transition: {
            duration: 0.3,
        },
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.3,
        },
    },
};

const wrapperVariants = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const Upload = ({
    label,
    onChange,
    accept,
    multiple = true,
    maxFileSizeInBytes = DEFAULT_MAX_FILE_SIZE_IN_BYTES,
    error,
    disabled = false,
    required = false,
    localization = {
        placeholder: 'Select Files',
        description: 'Drop files here or click browse thorough your machine',
        sizeError: 'File is too big.',
        sizeInfo: 'Maximum allowed upload file size',
    },
    theme,
}: UploadProps): JSX.Element => {
    const fileInputField = useRef<HTMLInputElement>(null);
    const [files, setFiles] = useState<File[]>([]);
    const toast = useToast();

    const addNewFiles = (newFiles: FileList) =>
        Array.from(newFiles).forEach((newFile: File) => {
            // size control
            if (newFile.size <= maxFileSizeInBytes) {
                if (multiple) {
                    // Same file control
                    if (!files.some((file) => file.name === newFile.name)) {
                        setFiles((currFiles: File[]) => [
                            ...currFiles,
                            newFile,
                        ]);
                    }
                } else {
                    setFiles([newFile]);
                }
            } else {
                toast.add(`${localization.sizeError}(${newFile.name})` || '', {
                    appearance: 'error',
                    duration: 3000,
                });
            }
        });

    const handleChange = (event: FormEvent<HTMLInputElement>) => {
        const { files: newFiles } = event.target as HTMLInputElement;
        if (newFiles?.length) {
            addNewFiles(newFiles);
        }
    };

    const removeFile = (fileName: string) => {
        setFiles((currFiles: File[]) =>
            currFiles.filter((file) => file.name !== fileName),
        );
        if (fileInputField.current) fileInputField.current.value = '';
    };

    useEffect(() => {
        if (multiple) {
            onChange?.(files);
        } else {
            onChange?.(files[0]);
        }
    }, [files, multiple, onChange]);

    const renderFiles = () =>
        files.map((file) => {
            const isImageFile = file.type.split('/')[0] === 'image';
            return (
                <motion.div
                    key={file.name}
                    variants={itemVariants}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    style={{ width: '100%' }}>
                    <Card>
                        <Space inline={false} align="center" size="large">
                            <Icon
                                size="2x"
                                color={theme?.fow.colors.text.primary}
                                icon={isImageFile ? 'image' : 'file'}
                            />
                            <Space
                                justify="space-between"
                                inline={false}
                                align="center">
                                <Space
                                    direction="vertical"
                                    align="start"
                                    size="xxsmall">
                                    <Overline>{file.name}</Overline>
                                    <Caption>
                                        {convertBytesToKB(file.size)} kb
                                    </Caption>
                                </Space>
                                <Icon
                                    icon="trash-alt"
                                    cursor="pointer"
                                    color={theme?.fow.colors.error.main}
                                    onClick={() => removeFile(file.name)}
                                />
                            </Space>
                        </Space>
                    </Card>
                </motion.div>
            );
        });

    return (
        <>
            {label && (
                <Label required={required} hasError={!!error}>
                    {label}
                </Label>
            )}
            <FileUploadContainer disabled={disabled}>
                <Space size="xxlarge">
                    <Icon
                        icon="cloud"
                        size="10x"
                        color={theme?.fow.colors.grey.lighter}
                    />
                    <Space direction="vertical" align="start" size="xsmall">
                        <Heading as="h5">{localization.placeholder}</Heading>
                        <Subtitle level={2}>
                            {localization.description}
                        </Subtitle>
                        <Caption>
                            {localization.sizeInfo}:{' '}
                            {convertBytesToKB(maxFileSizeInBytes)} Kb
                        </Caption>
                    </Space>
                </Space>
                <FormField
                    type="file"
                    ref={fileInputField}
                    onChange={handleChange}
                    accept={accept}
                    multiple={multiple}
                    disabled={disabled}
                />
            </FileUploadContainer>
            <motion.div
                variants={wrapperVariants}
                initial="hidden"
                animate="show">
                <Space direction="vertical" inline={false} align="start">
                    <AnimatePresence>
                        {files.length > 0 && renderFiles()}
                    </AnimatePresence>
                </Space>
            </motion.div>
        </>
    );
};

export default withTheme(Upload);
