import React from 'react';
import { StyledText } from './styles';

export interface TextProps {
    /**
     * color
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
    /**
     * hovercolor
     */
    hoverColor:
        | 'primary'
        | 'secondary'
        | 'disabled'
        | 'white'
        | 'black'
        | 'success'
        | 'warning'
        | 'error';
    /**
     * text transfrom
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

const TextUtil = ({
    textTransfrom = 'capitalize',
    color = 'black',
    hoverColor = color,
    textDecoration = 'none',
    fontStyle = 'normal',
    children,
    ...rest
}: TextProps): JSX.Element => (
    <StyledText
        fontStyle={fontStyle}
        textDecoration={textDecoration}
        hoverColor={hoverColor}
        textTransfrom={textTransfrom}
        color={color}
        {...rest}>
        {children}
    </StyledText>
);

export default TextUtil;
