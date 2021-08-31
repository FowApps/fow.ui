import React, { useRef, useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { DefaultTheme, withTheme } from 'styled-components';

import convertBytesToKB from '../../../utils/convertBytesToKB';
import convertNestedObjectToArray from '../../../utils/convertNestedObjectToArray';

import Card from '../../atoms/Card';
import Icon from '../../atoms/Icon';
import Space from '../../atoms/Space';
import Caption from '../../atoms/Typography/Caption';
import Heading from '../../atoms/Typography/Heading';
import Overline from '../../atoms/Typography/Overline';
import Subtitle from '../../atoms/Typography/Subtitle';

import { FileUploadContainer, FormField, Label } from './styles';
import Alert from '../Alert';

const DEFAULT_MAX_FILE_SIZE_IN_BYTES = 500000;

export interface LocalizationType {
    placeholder?: string;
    description?: string;
}

export interface UploadProps {
    /**
     * label of upload field
     */
    label?: string;
    /**
     * change event
     */
    onChange?: (files: any[] | any) => void;
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
    theme: DefaultTheme;
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
    },
    theme,
}: UploadProps): JSX.Element => {
    const fileInputField = useRef<HTMLInputElement>(null);
    const [files, setFiles] = useState<File | any>({});
    const [hasSizeError, setHasSizeError] = useState(false);

    const addNewFiles = (newFiles: FileList) =>
        Array.from(newFiles).forEach((file) => {
            if (file.size <= maxFileSizeInBytes) {
                if (multiple) {
                    setFiles((currFiles: any) => ({
                        ...currFiles,
                        [file.name]: file,
                    }));
                } else {
                    setFiles(file);
                }
                setHasSizeError(false);
            } else {
                setHasSizeError(true);
            }
        });

    const handleChange = (e) => {
        const { files: newFiles } = e.target;
        if (newFiles.length) {
            addNewFiles(newFiles);
        }
    };

    const removeFile = (fileName: string) => {
        setFiles((currFiles: File | any) => {
            delete currFiles[fileName];
            return { ...currFiles };
        });
        if (fileInputField.current) fileInputField.current.value = '';
    };

    useEffect(() => {
        if (multiple) {
            const filesAsArray = convertNestedObjectToArray(files);
            onChange?.(filesAsArray);
        } else {
            onChange?.(files);
        }
    }, [files, multiple, onChange]);

    const renderFiles = () => {
        if (multiple) {
            return Object.keys(files).map((fileName) => {
                const file = files[fileName];
                const isImageFile = file.type.split('/')[0] === 'image';
                return (
                    <motion.div
                        key={fileName}
                        variants={itemVariants}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        style={{ width: '100%' }}>
                        <Card>
                            <Space inline={false} align="center" size="large">
                                <Icon
                                    size="2x"
                                    color={theme.fow.colors.text.primary}
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
                                        color={theme.fow.colors.error.main}
                                        onClick={() => removeFile(fileName)}
                                    />
                                </Space>
                            </Space>
                        </Card>
                    </motion.div>
                );
            });
        }
        const isImageFile = files.type.split('/')[0] === 'image';
        return (
            <Card key={files.name}>
                <Space inline={false} align="center" size="large">
                    <Icon
                        size="2x"
                        color={theme.fow.colors.text.primary}
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
                            <Overline>{files.name}</Overline>
                            <Caption>{convertBytesToKB(files.size)} kb</Caption>
                        </Space>
                        <Icon
                            icon="trash-alt"
                            cursor="pointer"
                            color={theme.fow.colors.error.main}
                            onClick={() => removeFile(files.name)}
                        />
                    </Space>
                </Space>
            </Card>
        );
    };

    return (
        <>
            {label && (
                <Label
                    required={required}
                    disabled={disabled}
                    hasError={!!error}>
                    {label}
                </Label>
            )}
            <FileUploadContainer>
                <Space size="xxlarge">
                    <Icon
                        icon="cloud"
                        size="10x"
                        color={theme.fow.colors.grey.lighter}
                    />
                    <Space direction="vertical" align="start" size="xsmall">
                        <Heading as="h5">{localization.placeholder}</Heading>
                        <Subtitle level={2}>
                            {localization.description}
                        </Subtitle>
                    </Space>
                </Space>
                <FormField
                    type="file"
                    ref={fileInputField}
                    onChange={handleChange}
                    accept={accept}
                    multiple={multiple}
                />
            </FileUploadContainer>
            <motion.div
                variants={wrapperVariants}
                initial="hidden"
                animate="show">
                <Space direction="vertical" inline={false} align="start">
                    <AnimatePresence>
                        {(Object.keys(files).length > 0 || files.name) &&
                            renderFiles()}
                    </AnimatePresence>
                    {hasSizeError && (
                        <Alert
                            type="error"
                            title="Too big!"
                            description="File is too big"
                        />
                    )}
                </Space>
            </motion.div>
        </>
    );
};

export default withTheme(Upload);
