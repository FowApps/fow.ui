import React from 'react';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { StyledLink } from './styles';
import Icon from '../../Icon';
import Space from '../../Space';
import TextWrapper, { TextWrapperProps } from '../TextWrapper';

export interface LinkProps {
    /**
     * size level
     */
    level?: 1 | 2 | 3;
    /**
     * color of text
     */
    color?: TextWrapperProps['color'];
    /**
     * text transform
     */
    textTransfrom?: TextWrapperProps['textTransfrom'];
    /**
     * text decoration
     */
    textDecoration?: TextWrapperProps['textDecoration'];

    /**
     * font-style
     */
    fontStyle?: TextWrapperProps['fontStyle'];
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
    textDecoration = 'none',
    fontStyle = 'normal',
    leftIcon = null,
    rightIcon = null,
    text,
    href,
    ...rest
}: LinkProps): JSX.Element => (
    <StyledLink level={level} href={href} {...rest}>
        <TextWrapper
            textDecoration={textDecoration}
            fontStyle={fontStyle}
            color={color}
            textTransfrom={textTransfrom}>
            <Space justify="center" inline={false}>
                {leftIcon && <Icon icon={leftIcon} fixedWidth />}
                {text && <span>{text}</span>}
                {rightIcon && <Icon icon={rightIcon} fixedWidth />}
            </Space>
        </TextWrapper>
    </StyledLink>
);

export default Link;
