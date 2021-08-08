import React from 'react';
import { StyledLabel } from './styles';

export interface LabelProps {
    /**
     * color
     */
    color: 'grey' | 'primary' | 'info' | 'success' | 'warning' | 'error';
    /**
     * variant of button
     */
    variant?: 'outlined' | 'filled' | 'ghost';
    /**
     * label shape
     */
    shape?: 'flat' | 'rounded';
    /**
     * label shape
     */
    textTransfrom?: 'uppercase' | 'capitalize' | 'lowercase';
    /**
     * label size
     */
    size?: 'small' | 'medium' | 'large';
    text: React.ReactNode | 'string';
}

const Label = ({
    shape = 'rounded',
    size = 'medium',
    textTransfrom = 'capitalize',
    variant = 'filled',
    color = 'grey',
    text,
    ...rest
}: LabelProps): JSX.Element => (
    <StyledLabel
        shape={shape}
        size={size}
        textTransfrom={textTransfrom}
        variant={variant}
        color={color}
        {...rest}>
        {text}
    </StyledLabel>
);

export default Label;
