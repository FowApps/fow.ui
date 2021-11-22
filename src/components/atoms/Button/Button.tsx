import React, { ButtonHTMLAttributes, forwardRef, RefObject } from 'react';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

import Icon from '../Icon';

import { StyledButton, StyledButtonLoader } from './styles';
import Space from '../Space';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * color scheme of button
     */
    color?: 'primary' | 'info' | 'warning' | 'success' | 'error' | 'grey';
    /**
     * size of button
     */
    size?: 'large' | 'medium' | 'small';
    /**
     * variant of button
     */
    variant?: 'text' | 'outlined' | 'contained';
    /**
     * fluid flag (fluid means width: '100%')
     */
    fluid?: boolean;
    /**
     * loading spinner flag
     */
    loading?: boolean;
    /**
     * insert fab styles
     */
    fab?: boolean;
    /**
     * prefix icon name
     */
    leftIcon?: FontAwesomeIconProps['icon'] | null;
    /**
     * suffix icon name
     */
    rightIcon?: FontAwesomeIconProps['icon'] | null;
    children?: React.ReactNode;
}

const loadingVariants = {
    hidden: {
        opacity: 0,
        y: 5,
        transition: {
            duration: 0.3,
        },
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.3,
        },
    },
};

const setSpaceSize = (size: ButtonProps['size']) => {
    switch (size) {
        case 'small':
            return 'xxsmall';
        case 'medium':
            return 'small';
        case 'large':
            return 'xsmall';
        default:
            return 'small';
    }
};

const Button = (
    {
        color = 'primary',
        variant = 'contained',
        size = 'medium',
        fluid = false,
        loading = false,
        leftIcon = null,
        rightIcon = null,
        fab = false,
        children,
        ...rest
    }: ButtonProps,
    ref: RefObject<HTMLButtonElement>,
): JSX.Element => (
    <StyledButton
        ref={ref}
        color={color}
        variant={variant}
        fluid={fluid}
        loading={loading ? 1 : 0}
        size={size}
        fab={fab}
        hasChildren={!!children}
        {...rest}>
        {loading && (
            <StyledButtonLoader
                initial="hidden"
                animate="show"
                variants={loadingVariants}
                variant={variant}
                color={color}
            />
        )}
        <span>
            <Space size={setSpaceSize(size)} inline={false}>
                {leftIcon && <Icon icon={leftIcon} />}
                {children && <span>{children}</span>}
                {rightIcon && !fab && <Icon icon={rightIcon} />}
            </Space>
        </span>
    </StyledButton>
);

export default forwardRef(Button);
