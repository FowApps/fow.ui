import React from 'react';
import { StyledSubTitle } from './styles';

export interface BodyProps {
    /**
     * size level
     */
    level?: 1 | 2;
    /**
     * color
     */
    color?:
        | 'primary'
        | 'secondary'
        | 'disabled'
        | 'white'
        | 'black'
        | 'success'
        | 'warning'
        | 'error';
    children: React.ReactNode;
}

const SubTitle = ({
    level = 1,
    color = 'black',
    children,
    ...rest
}: BodyProps): JSX.Element => (
    <StyledSubTitle level={level} color={color} {...rest}>
        {children}
    </StyledSubTitle>
);

export default SubTitle;
