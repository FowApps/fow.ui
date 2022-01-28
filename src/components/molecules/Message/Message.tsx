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
     * width of image
     */
    width?: number | string;
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
}

const renderImage = (type: MessageProps['type'], width: number | string) => {
    console.log(width);
    switch (type) {
        case 'empty':
            return <EmptyOwl />;
        case 'error':
            return <ErrorOwl />;
        case 'plus':
            return <PlusOwl />;
        case 'success':
            return <CheckOwl />;
        default:
            return null;
    }
};

const Message = ({
    message,
    width = 400,
    actionText,
    actionIcon,
    onClickAction,
    type,
}: MessageProps): JSX.Element => (
    <Wrapper>
        <Space direction="vertical" size="large" align="center">
            {renderImage(type, width)}
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
