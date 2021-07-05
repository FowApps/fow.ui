import React from 'react';
import { StyledCaption } from './styles';

export interface CaptionProps {
    /**
     * color of text
     */
    color:
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

const Overline = ({
    color = 'black',
    children,
    ...rest
}: CaptionProps): JSX.Element => (
    <StyledCaption color={color} {...rest}>
        {children}
    </StyledCaption>
);

export default Overline;
