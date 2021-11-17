import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import React from 'react';
import Icon from '../Icon';
import Space from '../Space';
import { StyledLabel } from './styles';

export interface LabelProps {
    /**
     * color
     */
    color?:
        | 'grey'
        | 'primary'
        | 'info'
        | 'success'
        | 'warning'
        | 'error'
        | 'pink'
        | 'orange'
        | 'green'
        | 'greenDark'
        | 'blue'
        | 'purple'
        | 'darkPurple';
    /**
     * variant of button
     */
    variant?: 'outlined' | 'filled' | 'ghost';
    /**
     * label shape
     */
    shape?: 'flat' | 'rounded';
    /**
     * label size
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * prefix icon name
     */
    leftIcon?: FontAwesomeIconProps['icon'] | null;
    /**
     * suffix icon name
     */
    rightIcon?: FontAwesomeIconProps['icon'] | null;
    text?: React.ReactNode | 'string';
}

const Label = ({
    shape = 'rounded',
    size = 'medium',
    variant = 'filled',
    color = 'grey',

    leftIcon = null,
    rightIcon = null,
    text,
    ...rest
}: LabelProps): JSX.Element => (
    <StyledLabel
        shape={shape}
        size={size}
        variant={variant}
        color={color}
        hasText={!!text}
        {...rest}>
        <span>
            <Space>
                {leftIcon && <Icon icon={leftIcon} />}
                {text && <span>{text}</span>}
                {rightIcon && <Icon icon={rightIcon} />}
            </Space>
        </span>
    </StyledLabel>
);

export default Label;
