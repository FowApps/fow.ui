import React from 'react';
import { StyledRow } from './styles';

export interface RowProps {
    debug?: boolean;
    children: React.ReactNode;
}

const Row = ({ debug = false, children, ...rest }: RowProps): JSX.Element => (
    <StyledRow className="row" debug={debug} {...rest}>
        {children}
    </StyledRow>
);

export default Row;
