import React from 'react';
import { StyledSubtitle } from './styles';
import TextUtil from '../TextUtil';

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
    /**
     * text transform
     */
    textTransfrom?: 'uppercase' | 'capitalize' | 'lowercase';
    /**
     * text decoration
     */
    textDecoration:
        | 'underline'
        | 'overline'
        | 'none'
        | 'underlineOverline'
        | 'lineThrough'
        | 'none';
    children: React.ReactNode;
}

const Subtitle = ({
    level = 1,
    color = 'black',
    textDecoration = 'none',
    textTransfrom = 'capitalize',
    children,
    ...rest
}: BodyProps): JSX.Element => (
    <TextUtil
        color={color}
        hoverColor={color}
        textDecoration={textDecoration}
        textTransfrom={textTransfrom}>
        <StyledSubtitle level={level} color={color} {...rest}>
            {children}
        </StyledSubtitle>
    </TextUtil>
);

export default Subtitle;
