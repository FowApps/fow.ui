import React from 'react';
import { StyledHeading } from './styles';

export interface HeadingProps {
    /**
     * Element type
     */
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    /**
     * color
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

const Heading = ({
    as = 'h4',
    color = 'black',
    children,
    ...rest
}: HeadingProps): JSX.Element => (
    <StyledHeading as={as} color={color} {...rest}>
        {children}
    </StyledHeading>
);

export default Heading;
