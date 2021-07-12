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
     * flex or inline-flex flag
     */
    inline?: boolean;
    /**
     * direction of flex row
     */
    direction?: 'horizontal' | 'vertical';
    /**
     * justify content of flex
     */
    justify?:
        | 'flex-start'
        | 'center'
        | 'flex-end'
        | 'space-around'
        | 'space-between';
    /**
     * flag for flex wrap
     */
    wrap?: boolean;
    /**
     * reverse flex
     */
    reverse?: boolean;
    children: React.ReactNode;
}

const Space = ({
    direction = 'horizontal',
    size = 'small',
    align = 'center',
    wrap = false,
    reverse = false,
    inline = true,
    justify = 'flex-start',
    children,
    ...rest
}: SpaceProps): JSX.Element => (
    <StyledSpace
        direction={direction}
        size={size}
        align={align}
        wrap={wrap ? 1 : 0}
        reverse={reverse}
        inline={inline}
        justify={justify}
        {...rest}>
        {children}
    </StyledSpace>
);

export default Space;
