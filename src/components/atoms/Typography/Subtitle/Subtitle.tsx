import React from 'react';
import TextWrapper, { TextWrapperProps } from '../TextWrapper';
import { StyledSubtitle } from './styles';

export interface SubtitleProps extends TextWrapperProps {
    /**
     * size level
     */
    level?: 1 | 2 | 3;
}

const Subtitle = ({
    level = 1,
    color = 'black',
    textDecoration = 'none',
    textTransfrom = 'none',
    fontStyle = 'normal',
    children,
    ...rest
}: SubtitleProps): JSX.Element => (
    <StyledSubtitle level={level} {...rest}>
        <TextWrapper
            color={color}
            fontStyle={fontStyle}
            textDecoration={textDecoration}
            textTransfrom={textTransfrom}>
            {children}
        </TextWrapper>
    </StyledSubtitle>
);

export default Subtitle;
