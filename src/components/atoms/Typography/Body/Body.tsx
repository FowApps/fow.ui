import React from 'react';
import { StyledSubtitle } from './styles';
import TextWrapper, { TextWrapperProps } from '../TextWrapper';

export interface BodyProps {
    /**
     * size level
     */
    level?: 1 | 2;
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
        <TextWrapper
            fontStyle={fontStyle}
            color={color}
            textDecoration={textDecoration}
            textTransfrom={textTransfrom}>
            {children}
        </TextWrapper>
    </StyledSubtitle>
);

export default Subtitle;
