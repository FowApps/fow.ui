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
    textDecoration?:
        | 'underline'
        | 'overline'
        | 'none'
        | 'underlineOverline'
        | 'lineThrough'
        | 'none';
    /**
     * font-style
     */
    fontStyle?: 'normal' | 'italic' | 'oblique';
    children: React.ReactNode;
}

const Subtitle = ({
    level = 1,
    color = 'black',
    fontStyle = 'normal',
    textDecoration = 'none',
    textTransfrom = 'capitalize',
    children,
    ...rest
}: BodyProps): JSX.Element => (
    <StyledSubtitle level={level} color={color} {...rest}>
        <TextUtil
            fontStyle={fontStyle}
            color={color}
            hoverColor={color}
            textDecoration={textDecoration}
            textTransfrom={textTransfrom}>
            {children}
        </TextUtil>
    </StyledSubtitle>
);

export default Subtitle;
