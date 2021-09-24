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
    children: React.ReactNode;
}

const Subtitle = ({
    level = 1,
    color = 'black',
    textDecoration = 'none',
    textTransfrom = 'capitalize',
    fontStyle = 'normal',
    children,
    ...rest
}: SubtitleProps): JSX.Element => (
    <StyledSubtitle level={level} {...rest}>
        <TextUtil
            color={color}
            fontStyle={fontStyle}
            hoverColor={color}
            textDecoration={textDecoration}
            textTransfrom={textTransfrom}>
            {children}
        </TextUtil>
    </StyledSubtitle>
);

export default Subtitle;
