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
    children: React.ReactNode;
}

const Caption = ({
    color = 'black',
    textDecoration = 'none',
    textTransfrom = 'capitalize',
    children,
    ...rest
}: CaptionProps): JSX.Element => (
    <StyledCaption {...rest}>
        <TextUtil
            hoverColor={color}
            textDecoration={textDecoration}
            textTransfrom={textTransfrom}
            color={color}>
            {children}{' '}
        </TextUtil>
    </StyledCaption>
);

export default Caption;
