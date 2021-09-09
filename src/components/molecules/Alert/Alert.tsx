import React, { useState } from 'react';
import { DefaultTheme, withTheme } from 'styled-components';
import { AnimatePresence } from 'framer-motion';

import Space from '../../atoms/Space';
import Icon from '../../atoms/Icon';

import {
    StyledAlert,
    StyledTitle,
    StyledCloseIcon,
    StyledSubtitle,
    ContentWrapper,
} from './styles';

export interface AlertProps {
    /**
     * type of alert
     */
    type: 'info' | 'success' | 'error' | 'warning';
    /**
     * title of alert
     */
    title?: string;
    /**
     * long description of alert
     */
    description: string;
    /**
     * closable flag
     */
    closable?: boolean;
    /**
     * invoke when closing alert
     */
    onClose?: () => void;
    theme?: DefaultTheme;
}

const Alert = ({
    type = 'info',
    title,
    description,
    closable = false,
    onClose,
    theme,
}: AlertProps): JSX.Element => {
    const [closed, setClosed] = useState(false);
    const handleClose = () => {
        if (onClose) onClose();
        setClosed(true);
    };
    const renderIcon = () => {
        switch (type) {
            case 'info':
                return (
                    <Icon
                        size="lg"
                        icon="info-circle"
                        color={theme?.fow.colors.info.main}
                    />
                );
            case 'error':
                return (
                    <Icon
                        size="lg"
                        icon="exclamation-circle"
                        color={theme?.fow.colors.error.main}
                    />
                );
            case 'warning':
                return (
                    <Icon
                        size="lg"
                        icon="exclamation-triangle"
                        color={theme?.fow.colors.warning.main}
                    />
                );
            case 'success':
                return (
                    <Icon
                        size="lg"
                        icon="check-circle"
                        color={theme?.fow.colors.success.main}
                    />
                );
            default:
                return null;
        }
    };

    return (
        <AnimatePresence>
            {!closed && (
                <StyledAlert type={type} exit={{ opacity: 0 }}>
                    <Space align="start">
                        {renderIcon()}
                        <ContentWrapper>
                            {title && (
                                <StyledTitle level={1}>{title}</StyledTitle>
                            )}
                            <StyledSubtitle level={2}>
                                {description}
                            </StyledSubtitle>
                        </ContentWrapper>
                    </Space>
                    {closable && (
                        <StyledCloseIcon
                            color={theme?.fow.colors[type].darker}
                            icon="times"
                            onClick={handleClose}
                        />
                    )}
                </StyledAlert>
            )}
        </AnimatePresence>
    );
};

export default withTheme(Alert);
