import React from 'react';

import { StyledAvatar } from './styles';

import Icon from '../Icon';
import Subtitle from '../Subtitle';

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
}

const Avatar = ({
    src,
    text,
    color = 'grey',
    ...rest
}: AvatarProps): JSX.Element => (
    <StyledAvatar src={src} color={color} {...rest}>
        {text ? (
            <Subtitle level={2}>{getFirstLetters(text)}</Subtitle>
        ) : (
            <Icon icon="user" color="white" />
        )}
    </StyledAvatar>
);

export default Avatar;
