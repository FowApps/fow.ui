import React from 'react';
import { StyledSubtitle } from './styles';

export interface SubtitleProps {
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

const Subtitle = ({
    level = 1,
    color = 'black',
    children,
    ...rest
}: SubtitleProps): JSX.Element => (
    <StyledSubtitle level={level} color={color} {...rest}>
        {children}
    </StyledSubtitle>
);

export default Subtitle;
