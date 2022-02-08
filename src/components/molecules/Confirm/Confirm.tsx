import React, { useState } from 'react';
import { DefaultTheme, withTheme } from 'styled-components';

import { Card, Overlay, IconWrapper, Header, Footer } from './styles';
import Button, { ButtonProps } from '../../atoms/Button';
import Icon from '../../atoms/Icon';
import Space from '../../atoms/Space';
import Heading from '../../atoms/Typography/Heading';
import Body from '../../atoms/Typography/Body';

export interface ConfirmProps {
    /**
     * title of confirm heading
     */
    title: string;
    /**
     * type
     */
    type?: 'info' | 'success' | 'warning' | 'error';
    /**
     * description
     */
    description?: string;
    /**
     * Mode
     */
    scrimMode?: 'dark' | 'light';
    /**
     * cancel of confirm
     */
    cancelable?: boolean;
    /**
     * props of button
     */
    okButtonProps?: ButtonProps;
    /**
     * confirm button text
     */
    okText?: string;
    /**
     * cancel button text
     */
    cancelText?: string;
    /**
     * handle change cancel
     */
    onCancel?: () => void;
    /**
     * handle change ok
     */
    onOk?: () => Promise<any | void> | void;
    /**
     * handle change close --> onClose olmalı mı?
     */
    close?: () => void;
    theme?: DefaultTheme;
}

const modalVariant = {
    initial: { opacity: 0 },
    isOpen: { opacity: 1 },
    exit: { opacity: 0 },
};

const cardVariant = {
    initial: {
        transform: 'translateY(-2%)',
        transition: {
            duration: 0.3,
        },
    },
    isOpen: {
        transform: 'translateY(0%)',
        transition: {
            duration: 0.3,
        },
    },
    exit: {
        transform: 'translateY(-2%)',
        transition: {
            duration: 0.3,
        },
    },
};

const renderIcon = (iconType: ConfirmProps['type'], theme?: DefaultTheme) => {
    switch (iconType) {
        case 'info':
            return (
                <Icon
                    size="lg"
                    icon={['far', 'question-circle']}
                    color={theme?.fow.colors.info.dark}
                />
            );
        case 'error':
            return (
                <Icon
                    size="lg"
                    icon={['far', 'times-circle']}
                    color={theme?.fow.colors.error.dark}
                />
            );
        case 'warning':
            return (
                <Icon
                    size="lg"
                    icon={['far', 'question-circle']}
                    color={theme?.fow.colors.warning.dark}
                />
            );
        case 'success':
            return (
                <Icon
                    size="lg"
                    icon={['far', 'check-circle']}
                    color={theme?.fow.colors.success.dark}
                />
            );
        default:
            return null;
            break;
    }
};

const Confirm = ({
    type,
    title,
    description,
    cancelable,
    onCancel,
    onOk,
    okButtonProps,
    okText = 'Confirm',
    cancelText = 'Cancel',
    close,
    theme,
}: ConfirmProps): JSX.Element => {
    const [loading, setLoading] = useState(false);
    const handleOk = async () => {
        try {
            setLoading(true);
            await onOk?.();
            close?.();
        } catch (error) {
            console.error(error);
            setLoading(false);
        } finally {
            setLoading(false);
        }
    };

    const handleCancel = () => {
        if (onCancel) onCancel();
        close?.();
    };

    return (
        <Overlay
            initial="initial"
            animate="isOpen"
            exit="exit"
            variants={modalVariant}>
            <Card variants={cardVariant}>
                <Header>
                    {type && (
                        <IconWrapper>{renderIcon(type, theme)}</IconWrapper>
                    )}
                    <Heading as="h5">{title}</Heading>
                </Header>
                {description && <Body level={2}>{description}</Body>}
                <Footer>
                    <Space>
                        {cancelable && (
                            <Button
                                size="medium"
                                color="error"
                                variant="outlined"
                                onClick={handleCancel}>
                                {cancelText}
                            </Button>
                        )}
                        <Button
                            color={type}
                            size="medium"
                            onClick={handleOk}
                            loading={loading}
                            {...okButtonProps}>
                            {okText}
                        </Button>
                    </Space>
                </Footer>
            </Card>
        </Overlay>
    );
};

export default withTheme(Confirm);
