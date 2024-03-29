import React from 'react';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

import EmptyOwl from '../../../assets/svg/EmptyOwl';
import CheckOwl from '../../../assets/svg/CheckOwl';
import ErrorOwl from '../../../assets/svg/ErrorOwl';
import PlusOwl from '../../../assets/svg/PlusOwl';

import Space from '../../atoms/Space';
import Subtitle from '../../atoms/Typography/Subtitle';
import Button from '../../atoms/Button';

import { Wrapper } from './styles';

export interface MessageProps {
    /**
     * type of message
     */
    type: 'error' | 'success' | 'plus' | 'empty';
    /**
     * lottie flag
     */
    isAnimated?: boolean;
    /**
     * message text
     */
    message: string;
    /**
     * action button text
     */
    actionText?: string;
    /**
     * action button icon
     */
    actionIcon?: FontAwesomeIconProps['icon'];
    /**
     * action button click event
     */
    onClickAction?: () => void;
    iconSize?: number;
    noGutter?: boolean;
}

const renderImage = (type: MessageProps['type'], size?: number) => {
    switch (type) {
        case 'empty':
            return <EmptyOwl width={size} />;
        case 'error':
            return <ErrorOwl width={size} />;
        case 'plus':
            return <PlusOwl width={size} />;
        case 'success':
            return <CheckOwl width={size} />;
        default:
            return null;
    }
};

const Message = ({
    message,
    actionText,
    actionIcon,
    onClickAction,
    type,
    iconSize,
    noGutter = false,
}: MessageProps): JSX.Element => (
    <Wrapper noGutter={noGutter}>
        <Space direction="vertical" size="large" align="center">
            {renderImage(type, iconSize)}
            <Subtitle color="disabled">{message}</Subtitle>
            {actionText && (
                <Button
                    leftIcon={actionIcon}
                    size="large"
                    variant="outlined"
                    onClick={onClickAction}>
                    {actionText}
                </Button>
            )}
        </Space>
    </Wrapper>
);

export default Message;
