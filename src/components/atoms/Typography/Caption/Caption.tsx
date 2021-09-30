import React from 'react';
import { StyledCaption } from './styles';
import TextWrapper, { TextWrapperProps } from '../TextWrapper';

export interface CaptionProps {
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

const Caption = ({
    color = 'black',
    textDecoration = 'none',
    textTransfrom = 'capitalize',
    fontStyle = 'normal',
    children,
    ...rest
}: CaptionProps): JSX.Element => (
    <StyledCaption {...rest}>
        <TextWrapper
            fontStyle={fontStyle}
            textDecoration={textDecoration}
            textTransfrom={textTransfrom}
            color={color}>
            {children}{' '}
        </TextWrapper>
    </StyledCaption>
);

export default Caption;
