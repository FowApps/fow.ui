import React from 'react';
import TextUtil from '../TextUtil';
import { StyledSubtitle } from './styles';

export interface SubtitleProps {
    /**
     * size level
     */
    level?: 1 | 2;
    /**
     * color of text
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
     * text transform
     */
    textTransfrom?: 'uppercase' | 'capitalize' | 'lowercase';
    /**
     * text decoration
     */
    textDecoration:
        | 'underline'
        | 'overline'
        | 'none'
        | 'underlineOverline'
        | 'lineThrough'
        | 'none';
    children: React.ReactNode;
}

const Subtitle = ({
    level = 1,
    color = 'black',
    textDecoration = 'none',
    textTransfrom = 'capitalize',
    children,
    ...rest
}: SubtitleProps): JSX.Element => (
    <TextUtil
        color={color}
        hoverColor={color}
        textDecoration={textDecoration}
        textTransfrom={textTransfrom}>
        <StyledSubtitle level={level} {...rest}>
            {children}
        </StyledSubtitle>
    </TextUtil>
);

export default Subtitle;
