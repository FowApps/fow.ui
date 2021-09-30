import React from 'react';
import { StyledHeading } from './styles';
import TextWrapper, { TextWrapperProps } from '../TextWrapper';

export interface HeadingProps {
    /**
     * Element type
     */
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
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

const Heading = ({
    as = 'h4',
    color = 'black',
    textTransfrom = 'capitalize',
    children,
    textDecoration = 'none',
    fontStyle = 'normal',
    ...rest
}: HeadingProps): JSX.Element => (
    <StyledHeading as={as} {...rest}>
        <TextWrapper
            fontStyle={fontStyle}
            textDecoration={textDecoration}
            textTransfrom={textTransfrom}
            color={color}>
            {children}
        </TextWrapper>
    </StyledHeading>
);

export default Heading;
