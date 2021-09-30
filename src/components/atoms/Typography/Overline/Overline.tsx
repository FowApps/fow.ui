import React from 'react';
import { StyledOverline } from './styles';
import TextWrapper, { TextWrapperProps } from '../TextWrapper';

export interface OverlineProps {
    /**
     * color of text
     */
    color?: TextWrapperProps['color'];
    /**
     * text transform
     */
    textTransfrom?: TextWrapperProps['textTransfrom'];
    /**
     * text decoration
     */
    textDecoration?: TextWrapperProps['textDecoration'];

    /**
     * font-style
     */
    fontStyle?: TextWrapperProps['fontStyle'];
    children: React.ReactNode;
}

const Overline = ({
    color = 'black',
    textDecoration = 'none',
    textTransfrom = 'none',
    fontStyle = 'normal',
    children,
    ...rest
}: OverlineProps): JSX.Element => (
    <StyledOverline {...rest}>
        <TextWrapper
            fontStyle={fontStyle}
            color={color}
            textDecoration={textDecoration}
            textTransfrom={textTransfrom}>
            {children}
        </TextWrapper>
    </StyledOverline>
);

export default Overline;
