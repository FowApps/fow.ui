import React from 'react';
import { StyledOverline } from './styles';
import TextUtil from '../TextUtil';

export interface OverlineProps {
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
    children: React.ReactNode;
}

const Overline = ({
    color = 'black',
    textDecoration = 'none',
    textTransfrom = 'capitalize',
    children,
    ...rest
}: OverlineProps): JSX.Element => (
    <StyledOverline {...rest}>
        <TextUtil
            color={color}
            hoverColor={color}
            textDecoration={textDecoration}
            textTransfrom={textTransfrom}>
            {children}
        </TextUtil>
    </StyledOverline>
);

export default Overline;
