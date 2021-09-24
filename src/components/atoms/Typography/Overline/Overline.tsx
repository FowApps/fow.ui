import React from 'react';
import { StyledOverline } from './styles';
import TextUtil from '../TextUtil';

export interface OverlineProps {
    /**
     * color of text
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

const Overline = ({
    color = 'black',
    textDecoration = 'none',
    textTransfrom = 'capitalize',
    fontStyle = 'normal',
    children,
    ...rest
}: OverlineProps): JSX.Element => (
    <StyledOverline {...rest}>
        <TextUtil
            fontStyle={fontStyle}
            color={color}
            hoverColor={color}
            textDecoration={textDecoration}
            textTransfrom={textTransfrom}>
            {children}
        </TextUtil>
    </StyledOverline>
);

export default Overline;
