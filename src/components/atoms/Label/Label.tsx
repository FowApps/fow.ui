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
     * label marketplace
     */
    marketplace?: boolean;
    text: React.ReactNode | 'string';
}

const Label = ({
    marketplace = false,
    variant = 'filled',
    color = 'grey',
    text,
    ...rest
}: LabelProps): JSX.Element => (
    <StyledLabel
        marketplace={marketplace}
        variant={variant}
        color={color}
        {...rest}>
        {text}
    </StyledLabel>
);

export default Label;
