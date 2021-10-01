import React from 'react';

import { StyledAvatar } from './styles';

import Icon from '../Icon';
import Subtitle from '../Typography/Subtitle';
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
}: AvatarProps): JSX.Element =>
    text ? (
        <Tooltip placement="top" overlay={<span>{text}</span>}>
            <StyledAvatar src={src} color={color} size={size} {...rest}>
                <Subtitle
                    color={color === 'grey' ? 'black' : 'white'}
                    level={2}>
                    {getFirstLetters(text)}
                </Subtitle>
            </StyledAvatar>
        </Tooltip>
    ) : (
        <StyledAvatar src={src} color={color} size={size} {...rest}>
            <Icon icon="user" color="white" />
        </StyledAvatar>
    );

export default Avatar;
