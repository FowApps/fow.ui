/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from 'react';
import BoxIcon from '../../atoms/BoxIcon';
import Icon from '../../atoms/Icon';
import Space from '../../atoms/Space';
import Subtitle from '../../atoms/Typography/Subtitle';

import { ToastWrapper, CloseIcon } from './styles';

export type OptionsType = {
    appearance?: 'default' | 'success' | 'info' | 'warning' | 'error';
    duration?: number;
    closable?: boolean;
};

export interface ToastProps {
    /**
     * message of toast
     */
    content: React.ReactNode;
    /**
     * type of toast
     */
    appearance?: 'default' | 'success' | 'info' | 'warning' | 'error';
    /**
     * close button flag
     */
    closable?: boolean;
    /**
     * close duration (ms)
     */
    duration?: number;
    /**
     * remove function
     */
    remove: () => void;
}

const Toast = ({
    appearance,
    closable,
    duration,
    remove,
    content,
}: ToastProps): JSX.Element => {
    const removeRef = useRef(remove);

    useEffect(() => {
        const id = setTimeout(() => removeRef.current(), duration);

        return () => clearTimeout(id);
    }, []);

    const renderBoxIcon = () => {
        switch (appearance) {
            case 'info':
                return <BoxIcon color="info" icon="info-circle" />;
            case 'success':
                return <BoxIcon color="success" icon="check-circle" />;
            case 'error':
                return <BoxIcon color="error" icon="exclamation-circle" />;
            case 'warning':
                return <BoxIcon color="warning" icon="exclamation-triangle" />;
            default:
                return null;
        }
    };

    return (
        <ToastWrapper appearance={appearance}>
            <Space>
                {renderBoxIcon()}
                <Subtitle
                    color={appearance === 'default' ? 'white' : 'black'}
                    level={2}>
                    {content}
                </Subtitle>
            </Space>
            {closable && (
                <CloseIcon appearance={appearance}>
                    <Icon size="1x" icon="times" onClick={remove} />
                </CloseIcon>
            )}
        </ToastWrapper>
    );
};

export default Toast;
