import React from 'react';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { StyledLink } from './styles';
import Icon from '../../Icon';
import Space from '../../Space';
import TextUtil from '../TextUtil';

export interface LinkProps {
    /**
     * size level
     */
    level?: 1 | 2 | 3;
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

const Link = ({
    level = 2,
    textTransfrom = 'capitalize',
    color = 'black',
    hoverColor = 'primary',
    textDecoration = 'none',
    leftIcon = null,
    rightIcon = null,
    text,
    href,
    ...rest
}: LinkProps): JSX.Element => (
    <StyledLink level={level} hoverColor={hoverColor} href={href} {...rest}>
        <span>
            <TextUtil
                textDecoration={textDecoration}
                hoverColor={hoverColor}
                color={color}
                textTransfrom={textTransfrom}>
                <Space justify="center" inline={false}>
                    {leftIcon && <Icon icon={leftIcon} fixedWidth />}
                    {text && <span>{text}</span>}
                    {rightIcon && <Icon icon={rightIcon} fixedWidth />}
                </Space>
            </TextUtil>
        </span>
    </StyledLink>
);

export default Link;
