import React from 'react';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { StyledLink } from './styles';
import Icon from '../Icon';
import Space from '../Space';

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
    /**
     * prefix icon name
     */
    leftIcon?: FontAwesomeIconProps['icon'] | null;
    /**
     * suffix icon name
     */
    rightIcon?: FontAwesomeIconProps['icon'] | null;
    text: React.ReactNode | 'string';
    href: 'string';
}

const Label = ({
    size = 'medium',
    textTransfrom = 'capitalize',
    color = 'black',
    hoverColor = 'primary',
    leftIcon = null,
    rightIcon = null,
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
        <span>
            <Space justify="center" inline={false}>
                {leftIcon && <Icon icon={leftIcon} />}
                {text && <span>{text}</span>}
                {rightIcon && <Icon icon={rightIcon} />}
            </Space>
        </span>
    </StyledLink>
);

export default Label;
