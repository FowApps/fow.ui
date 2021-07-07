/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import { StyledCol } from './styles';

export interface ColProps {
    /**
     * column size of less then 768px
     */
    xs?: number;
    /**
     * column size of less then 768px
     */
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    noGutter?: boolean;
    offset?: object | number;
    debug?: boolean;
    children: React.ReactNode;
}

const Col = ({
    xs,
    sm,
    md,
    lg,
    xl,
    noGutter,
    offset,
    debug = false,
    children,
    ...rest
}: ColProps): JSX.Element => (
    <StyledCol
        xs={xs}
        sm={sm}
        md={md}
        lg={lg}
        xl={xl}
        noGutter={noGutter}
        offset={offset}
        debug={debug}
        {...rest}>
        {children}
    </StyledCol>
);

export default Col;
