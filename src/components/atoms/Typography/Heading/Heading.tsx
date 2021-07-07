import React from 'react';
import { StyledHeading } from './styles';

export interface HeadingProps {
    /**
     * Element type
     */
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    /**
     * switch color light to dark
     */
    invert?: boolean;
    children: React.ReactNode;
}

const Heading = ({
    as = 'h4',
    invert = false,
    children,
    ...rest
}: HeadingProps): JSX.Element => (
    <StyledHeading as={as} invert={invert} {...rest}>
        {children}
    </StyledHeading>
);

export default Heading;
