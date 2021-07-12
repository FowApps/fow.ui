import React from 'react';
import { StyledOverline } from './styles';

export interface OverlineProps {
    /**
     * color of text
     */
    color?:
        | 'primary'
        | 'secondary'
        | 'disabled'
        | 'white'
        | 'black'
        | 'success'
        | 'warning'
        | 'error';
    children: React.ReactNode;
}

const Overline = ({
    color = 'black',
    children,
    ...rest
}: OverlineProps): JSX.Element => (
    <StyledOverline color={color} {...rest}>
        {children}
    </StyledOverline>
);

export default Overline;
