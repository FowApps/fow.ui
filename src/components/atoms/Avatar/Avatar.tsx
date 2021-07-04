import React from 'react';

import { StyledAvatar } from './styles';

import Icon from '../Icon';
import getFirstLetters from '../../../utils/getFirstLetters';

export interface AvatarProps {
    src?: string;
    text?: string;
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
            <p>{getFirstLetters(text)}</p>
        ) : (
            <Icon icon="user" color="white" />
        )}
    </StyledAvatar>
);

export default Avatar;
