import React from 'react';
import { StyledHeading } from './styles';
import TextUtil from '../TextUtil';

export interface HeadingProps {
    /**
     * Element type
     */
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    /**
     * color
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

const Heading = ({
    as = 'h4',
    color = 'black',
    textTransfrom = 'capitalize',
    children,
    textDecoration = 'none',
    ...rest
}: HeadingProps): JSX.Element => (
    <TextUtil
        textDecoration={textDecoration}
        textTransfrom={textTransfrom}
        hoverColor={color}
        color={color}>
        <StyledHeading as={as} {...rest}>
            {children}
        </StyledHeading>
    </TextUtil>
);

export default Heading;
