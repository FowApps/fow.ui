import React from 'react';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import Icon from '../Icon';

import { Wrapper } from './styles';

export interface ColoredIconProps {
    /**
     * color of icon
     */
    color: 'primary' | 'info' | 'success' | 'warning' | 'error';
    /**
     * name of icon
     */
    icon: FontAwesomeIconProps['icon'];
    children: React.ReactNode;
}

const ColoredIcon = ({
    color = 'info',
    icon,
    ...rest
}: ColoredIconProps): JSX.Element => (
    <Wrapper color={color} {...rest}>
        <span>
            <Icon size="sm" icon={icon} color="white" />
        </span>
    </Wrapper>
);

export default ColoredIcon;
