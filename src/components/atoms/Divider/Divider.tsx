import React from 'react';

import { StyledDivider, Title } from './styles';

export interface DividerProps {
    /**
     * divider title oriantation
     */
    orientation?: 'left' | 'right' | 'center';
    /**
     * profile username or fullname
     */
    type?: 'horizontal' | 'vertical';
    children?: React.ReactNode;
}

const Divider = ({
    orientation = 'center',
    type = 'horizontal',
    children,
    ...rest
}: DividerProps): JSX.Element => (
    <StyledDivider
        hasTitle={!!children}
        orientation={orientation}
        type={type}
        {...rest}>
        {children && type !== 'vertical' && <Title>{children}</Title>}
    </StyledDivider>
);

export default Divider;
