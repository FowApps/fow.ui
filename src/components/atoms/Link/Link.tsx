import React from 'react';
import { StyledLink } from './styles';

export interface LinkProps {
    /**
     * color
     */
    color:
        | 'primary'
        | 'secondary'
        | 'disabled'
        | 'white'
        | 'black'
        | 'success'
        | 'warning'
        | 'error';
    /**
     * hoverColor
     */
    hoverColor:
        | 'primary'
        | 'secondary'
        | 'disabled'
        | 'white'
        | 'black'
        | 'success'
        | 'warning'
        | 'error';
    /**
     * text transfrom
     */
    textTransfrom?: 'uppercase' | 'capitalize' | 'lowercase';
    /**
     * size
     */
    size?: 'small' | 'medium' | 'large';
    text: React.ReactNode | 'string';
    href: 'string';
}

const Label = ({
    size = 'medium',
    textTransfrom = 'capitalize',
    color = 'black',
    hoverColor = 'primary',
    text,
    href,
    ...rest
}: LinkProps): JSX.Element => (
    <StyledLink
        href={href}
        size={size}
        textTransfrom={textTransfrom}
        hoverColor={hoverColor}
        color={color}
        {...rest}>
        {text}
    </StyledLink>
);

export default Label;
