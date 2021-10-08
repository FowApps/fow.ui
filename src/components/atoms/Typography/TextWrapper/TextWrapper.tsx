import React from 'react';
import { StyledText } from './styles';

export interface TextWrapperProps {
    lineClamp?: number | undefined;
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
     * text transfrom
     */
    textTransfrom?: 'uppercase' | 'capitalize' | 'lowercase' | 'none';
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
    children?: React.ReactNode;
}

const TextWrapper = ({
    textTransfrom = 'none',
    color = 'black',
    textDecoration = 'none',
    fontStyle = 'normal',
    lineClamp = undefined,
    children,
    ...rest
}: TextWrapperProps): JSX.Element => (
    <StyledText
        lineClamp={lineClamp}
        fontStyle={fontStyle}
        textDecoration={textDecoration}
        textTransfrom={textTransfrom}
        color={color}
        {...rest}>
        {children}
    </StyledText>
);

export default TextWrapper;
