import React from 'react';
import { StyledContainer } from './styles';

export interface ContainerProps {
    /**
     * Widen the component through it's block
     */
    fluid?: boolean;
    /**
     * highligth the content in the container
     */
    debug?: boolean;
    children: React.ReactNode;
}

const Container = ({
    fluid = false,
    debug = false,
    children,
    ...rest
}: ContainerProps): JSX.Element => (
    <StyledContainer fluid={fluid} debug={debug} {...rest}>
        {children}
    </StyledContainer>
);

export default Container;
