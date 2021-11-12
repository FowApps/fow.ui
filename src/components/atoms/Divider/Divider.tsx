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
    direction?: 'horizontal' | 'vertical';
    size?:
        | 'xxsmall'
        | 'xsmall'
        | 'small'
        | 'medium'
        | 'large'
        | 'xlarge'
        | 'xxlarge'
        | 'xxxlarge';
    children?: React.ReactNode;
}

const Divider = ({
    orientation = 'center',
    direction = 'horizontal',
    size = 'medium',
    children,
    ...rest
}: DividerProps): JSX.Element => (
    <StyledDivider
        hasTitle={!!children}
        orientation={orientation}
        direction={direction}
        size={size}
        {...rest}>
        {children && direction !== 'vertical' && <Title>{children}</Title>}
    </StyledDivider>
);

export default Divider;
