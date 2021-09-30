import React from 'react';
import { StyledOverline } from './styles';
import TextWrapper, { TextWrapperProps } from '../TextWrapper';

export type OverlineProps = TextWrapperProps;

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
