import React from 'react';
import { StyledRow } from './styles';

export interface RowProps {
    /**
     * resize component
     */
    noGutter?: boolean;
    /**
     * highligth the content in the container
     */
    debug?: boolean;
    children: React.ReactNode;
}

const Row = ({
    noGutter = false,
    debug = false,
    children,
    ...rest
}: RowProps): JSX.Element => (
    <StyledRow noGutter={noGutter} className="row" debug={debug} {...rest}>
        {children}
    </StyledRow>
);

export default Row;
