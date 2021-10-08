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
    leftIcon?: FontAwesomeIconProps['icon'] | null;
    /**
     * suffix icon name
     */
    rightIcon?: FontAwesomeIconProps['icon'] | null;
    href: string;
}

const Link = ({
    level = 2,
    textTransfrom = 'capitalize',
    color = 'black',
    textDecoration = 'none',
    fontStyle = 'normal',
    leftIcon = null,
    rightIcon = null,
    href,
    children,
    ...rest
}: LinkProps): JSX.Element => (
    <StyledLink level={level} href={href} {...rest}>
        <TextWrapper
            textDecoration={textDecoration}
            fontStyle={fontStyle}
            color={color}
            textTransfrom={textTransfrom}>
            <Space justify="center" inline={false} size="xsmall">
                {leftIcon && (
                    <span>
                        <Icon icon={leftIcon} fixedWidth />
                    </span>
                )}
                {children && <span>{children}</span>}
                {rightIcon && (
                    <span>
                        <Icon icon={rightIcon} fixedWidth />
                    </span>
                )}
            </Space>
        </TextWrapper>
    </StyledLink>
);

export default Link;
