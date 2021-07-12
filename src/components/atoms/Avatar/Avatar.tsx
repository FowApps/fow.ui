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
    use?: 'primary' | 'grey';
}

const Avatar = ({
    src,
    text,
    use = 'grey',
    ...rest
}: AvatarProps): JSX.Element => (
    <StyledAvatar src={src} use={use} {...rest}>
        {text ? (
            <Subtitle color="secondary" level={2}>
                {getFirstLetters(text)}
            </Subtitle>
        ) : (
            <Icon icon="user" color="white" />
        )}
    </StyledAvatar>
);

export default Avatar;
