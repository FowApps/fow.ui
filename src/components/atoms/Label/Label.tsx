import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import React from 'react';
import Icon from '../Icon';
import Space from '../Space';
import { StyledLabel } from './styles';

export interface LabelProps {
    /**
     * color
     */
    color?: 'pink' | 'orange' | 'green' | 'blue' | 'purple' | 'darkPurple';
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
    timesIcon?: FontAwesomeIconProps['icon'] | null;
    text?: React.ReactNode | 'string';
}

const dataDismiss = () => alert('you click times icon');
const Label = ({
    shape = 'rounded',
    size = 'medium',
    variant = 'filled',
    color = 'pink',
    timesIcon = null,
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
            <Space size="xsmall">
                {leftIcon && <Icon icon={leftIcon} />}
                {text && <span>{text}</span>}
                {rightIcon && <Icon icon={rightIcon} />}
                {timesIcon && <Icon icon="times" onClick={dataDismiss} />}
            </Space>
        </span>
    </StyledLabel>
);

export default Label;
