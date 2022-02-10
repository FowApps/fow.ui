import React from 'react';

import { StyledAvatar } from './styles';

import Icon from '../Icon';
import Tooltip from '../Tooltip';

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
    color?: 'primary' | 'secondary' | 'grey';
    /**
     * size variant
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * shape of avatar
     */
    shape?: 'rounded' | 'circle' | 'flat';
}

const Avatar = ({
    src,
    text,
    color = 'secondary',
    size = 'medium',
    shape = 'circle',
    ...rest
}: AvatarProps): JSX.Element =>
    text ? (
        <Tooltip placement="top" overlay={<span>{text}</span>}>
            <StyledAvatar
                src={src}
                color={color}
                size={size}
                shape={shape}
                {...rest}>
                <h3>{getFirstLetters(text)}</h3>
            </StyledAvatar>
        </Tooltip>
    ) : (
        <StyledAvatar
            src={src}
            color={color}
            size={size}
            shape={shape}
            {...rest}>
            <Icon icon="user" color="white" />
        </StyledAvatar>
    );

export default Avatar;
