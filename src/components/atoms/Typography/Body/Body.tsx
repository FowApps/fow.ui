import React from 'react';
import { StyledBody } from './styles';
import TextWrapper, { TextWrapperProps } from '../TextWrapper';

export interface BodyProps extends TextWrapperProps {
    /**
     * size level
     */
    level?: 1 | 2 | 3;
}

const Body = ({
    level = 1,
    color = 'black',
    fontStyle = 'normal',
    textDecoration = 'none',
    textTransfrom = 'none',
    lineClamp = 0,
    children,
    ...rest
}: BodyProps): JSX.Element => (
    <StyledBody level={level} color={color} {...rest}>
        <TextWrapper
            lineClamp={lineClamp}
            fontStyle={fontStyle}
            color={color}
            textDecoration={textDecoration}
            textTransfrom={textTransfrom}>
            {children}
        </TextWrapper>
    </StyledBody>
);

export default Body;
