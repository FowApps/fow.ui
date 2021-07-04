import React from 'react';
import { StyledSpace } from './styles';

export interface SpaceProps {
    /**
     * size of between items
     */
    size?:
        | 'xxsmall'
        | 'xsmall'
        | 'small'
        | 'medium'
        | 'large'
        | 'xlarge'
        | 'xxlarge'
        | 'xxxlarge';
    /**
     * flex align-items
     */
    align?: 'start' | 'end' | 'center' | 'baseline';
    /**
     * direction of flex row
     */
    direction?: 'horizontal' | 'vertical';
    /**
     * flag for flex wrap
     */
    wrap?: boolean;
    children: React.ReactNode;
}

const Space = ({
    direction = 'horizontal',
    size = 'small',
    align = 'center',
    wrap = false,
    children,
    ...rest
}: SpaceProps): JSX.Element => (
    <StyledSpace
        direction={direction}
        size={size}
        align={align}
        wrap={wrap ? 1 : 0}
        {...rest}>
        {children}
    </StyledSpace>
);

export default Space;
