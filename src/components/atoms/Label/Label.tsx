import React from 'react';
import { StyledLabel } from './styles';

export interface LabelProps {
    /**
     * color
     */
    color: 'grey' | 'primary' | 'info' | 'success' | 'warning' | 'error';
    /**
     * text of chip
     */
    text: React.ReactNode | 'string';
}

const Label = ({ color = 'grey', text, ...rest }: LabelProps): JSX.Element => (
    <StyledLabel color={color} {...rest}>
        {text}
    </StyledLabel>
);

export default Label;
