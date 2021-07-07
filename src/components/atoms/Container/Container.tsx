import React from 'react';
import { StyledContainer } from './styles';

export interface ContainerProps {
    fluid?: boolean;
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
