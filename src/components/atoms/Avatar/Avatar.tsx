import React from 'react';

import { StyledAvatar } from './styles';

import Icon from '../Icon';
import Subtitle from '../Typography/Subtitle';

import getFirstLetters from '../../../utils/getFirstLetters';

export interface AvatarProps {
    /**
     * profile image source
     */
    src?: string;
    /**
     * profile username or fullname
     */
    text?: string;
    /**
     * color variant
     */
    color?: 'primary' | 'grey';
    /**
     * size variant
     */
    size?: 'xsmall' | 'small' | 'medium' | 'large';
}

const Avatar = ({
    src,
    text,
    color = 'grey',
    size = 'medium',
    ...rest
}: AvatarProps): JSX.Element => (
    <StyledAvatar src={src} color={color} size={size} {...rest}>
        {text ? (
            <Subtitle level={2}>{getFirstLetters(text)}</Subtitle>
        ) : (
            <Icon icon="user" color="white" />
        )}
    </StyledAvatar>
);

export default Avatar;
