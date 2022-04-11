/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import { StyledCol } from './styles';

export interface ColProps extends React.HTMLAttributes<HTMLElement> {
    /**
     * column size of less then 768px
     */
    xs?: number;
    /**
     * column size of less then 768px
     */
    sm?: number;
    /**
     * column size of less then 1024px?
     */
    md?: number;
    /**
     * column size of less then 1024px?
     */
    lg?: number;
    /*
     * column size of less then 1440px
     */
    xl?: number;
    /**
     * resize component
     */
    noGutter?: boolean;
    /**
     * offset
     */
    offset?: object | number;
    /**
     * highligth the content in the col
     */
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
