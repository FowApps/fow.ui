import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import React from 'react';
import Icon from '../Icon';
import Space from '../Space';
import { StyledLabel } from './styles';

export interface LabelProps {
    /**
     * color
     */
    color?:
        | 'pink'
        | 'orange'
        | 'green'
        | 'blue'
        | 'purple'
        | 'darkPurple'
        | 'grey';
    /**
     * variant of button
     */
    variant?: 'outlined' | 'filled' | 'ghost';
    /**
     * label shape
     */
    shape?: 'flat' | 'rounded';
    /**
     * label size
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
    /**
     * closable
     */
    isClosable?: boolean;
    text?: React.ReactNode | 'string';
    /**
     * handle change close
     */
    onClose?: () => void;
    /**
     * resize component
     */
    noGutter?: boolean;
}

const Label = ({
    shape = 'rounded',
    size = 'medium',
    variant = 'filled',
    color = 'blue',
    isClosable = false,
    leftIcon = null,
    rightIcon = null,
    text,
    noGutter = false,
    onClose,
    ...rest
}: LabelProps): JSX.Element => (
    <StyledLabel
        shape={shape}
        size={size}
        variant={variant}
        color={color}
        hasText={!!text}
        noGutter={noGutter}
        {...rest}>
        <span>
            <Space size="small">
                <Space size="xxsmall">
                    {leftIcon && <Icon size="sm" icon={leftIcon} />}
                    {text && <span>{text}</span>}
                    {rightIcon && <Icon size="sm" icon={rightIcon} />}
                </Space>
                {isClosable && (
                    <Icon
                        size="xs"
                        icon="times"
                        cursor="pointer"
                        onClick={onClose}
                    />
                )}
            </Space>
        </span>
    </StyledLabel>
);

export default Label;
