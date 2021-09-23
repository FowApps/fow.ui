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
    textDecoration:
        | 'underline'
        | 'overline'
        | 'none'
        | 'underlineOverline'
        | 'lineThrough'
        | 'none';
    children: React.ReactNode;
}

const TextUtil = ({
    textTransfrom = 'capitalize',
    color = 'black',
    hoverColor = color,
    textDecoration = 'none',
    children,
    ...rest
}: TextProps): JSX.Element => (
    <StyledText
        textDecoration={textDecoration}
        hoverColor={hoverColor}
        textTransfrom={textTransfrom}
        color={color}
        {...rest}>
        {children}
    </StyledText>
);

export default TextUtil;
