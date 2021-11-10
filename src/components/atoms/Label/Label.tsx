import React from 'react';
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
    text: React.ReactNode | 'string';
}

const Label = ({
    shape = 'rounded',
    size = 'medium',
    variant = 'filled',
    color = 'grey',
    text,
    ...rest
}: LabelProps): JSX.Element => (
    <StyledLabel
        shape={shape}
        size={size}
        variant={variant}
        color={color}
        {...rest}>
        {text}
    </StyledLabel>
);

export default Label;
