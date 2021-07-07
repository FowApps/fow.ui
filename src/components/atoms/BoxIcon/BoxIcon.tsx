import React from 'react';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import Icon from '../Icon';
import { theme } from '../../../theme/theme';

import { Wrapper } from './styles';

export interface BoxIconProps {
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

const BoxIcon = ({
    color = 'info',
    icon,
    ...rest
}: BoxIconProps): JSX.Element => (
    <Wrapper color={color} {...rest}>
        <Icon size="lg" icon={icon} color={theme.fow.colors[color].main} />
    </Wrapper>
);

export default BoxIcon;
