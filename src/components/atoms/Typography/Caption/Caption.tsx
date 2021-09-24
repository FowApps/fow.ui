import React from 'react';
import { StyledCaption } from './styles';
import TextUtil from '../TextUtil';

export interface CaptionProps {
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

const Caption = ({
    color = 'black',
    textDecoration = 'none',
    textTransfrom = 'capitalize',
    fontStyle = 'normal',
    children,
    ...rest
}: CaptionProps): JSX.Element => (
    <StyledCaption {...rest}>
        <TextUtil
            fontStyle={fontStyle}
            hoverColor={color}
            textDecoration={textDecoration}
            textTransfrom={textTransfrom}
            color={color}>
            {children}{' '}
        </TextUtil>
    </StyledCaption>
);

export default Caption;
