import React from 'react';
import { StyledCaption } from './styles';
import TextWrapper, { TextWrapperProps } from '../TextWrapper';

export type CaptionProps = TextWrapperProps;

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
