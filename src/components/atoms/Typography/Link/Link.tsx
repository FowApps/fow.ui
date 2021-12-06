import React from 'react';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { StyledLink } from './styles';
import Icon from '../../Icon';
import Space from '../../Space';
import TextWrapper, { TextWrapperProps } from '../TextWrapper';

export interface LinkProps extends TextWrapperProps {
    /**
     * size level
     */
    level?: 1 | 2 | 3;
    /**
     * prefix icon name
     */
    leftIcon?: FontAwesomeIconProps['icon'] | null;
    /**
     * prefix icon props
     */
    leftIconProps?: FontAwesomeIconProps;
    /**
     * suffix icon name
     */
    rightIcon?: FontAwesomeIconProps['icon'] | null;
    /**
     * prefix icon props
     */
    rightIconProps?: FontAwesomeIconProps;
    href?: string;
}

const Link = ({
    level = 2,
    textTransfrom = 'none',
    color = 'black',
    textDecoration = 'none',
    fontStyle = 'normal',
    leftIcon = null,
    leftIconProps,
    rightIcon = null,
    rightIconProps,
    href,
    children,
    ...rest
}: LinkProps): JSX.Element => (
    <StyledLink color={color} level={level} href={href} {...rest}>
        <TextWrapper
            textDecoration={textDecoration}
            fontStyle={fontStyle}
            color={color}
            textTransfrom={textTransfrom}>
            <Space justify="flex-start" inline={false} size="xxsmall">
                {leftIcon && (
                    <span>
                        <Icon {...leftIconProps} icon={leftIcon} fixedWidth />
                    </span>
                )}
                {children && <span>{children}</span>}
                {rightIcon && (
                    <span>
                        <Icon {...rightIconProps} icon={rightIcon} fixedWidth />
                    </span>
                )}
            </Space>
        </TextWrapper>
    </StyledLink>
);

export default Link;
