import React from 'react';
import { StyledText } from './styles';

export interface TextWrapperProps {
    lineClamp?: number;
    /**
     * color
     */
    color?:
        | 'primary'
        | 'secondary'
        | 'disabled'
        | 'white'
        | 'black' // corresponds to the primary text color.
        | 'success'
        | 'warning'
        | 'error'
        | 'info';
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
    children: React.ReactNode | string;
}

const TextWrapper = ({
    textTransfrom = 'none',
    color = 'black',
    textDecoration = 'none',
    fontStyle = 'normal',
    lineClamp = 0,
    children,
    ...rest
}: TextWrapperProps): JSX.Element => (
    <StyledText
        lineClamp={lineClamp < 0 ? 0 : lineClamp}
        fontStyle={fontStyle}
        textDecoration={textDecoration}
        textTransfrom={textTransfrom}
        color={color}
        title={typeof children === 'string' ? children : undefined}
        {...rest}>
        {children}
    </StyledText>
);

export default TextWrapper;
