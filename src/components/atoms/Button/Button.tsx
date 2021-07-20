import React, { ButtonHTMLAttributes, forwardRef, RefObject } from 'react';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

import Icon from '../Icon';

import { StyledButton, StyledButtonLoader } from './styles';
import Space from '../Space';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    color?: 'primary' | 'info' | 'warning' | 'success' | 'error' | 'grey';
    size?: 'large' | 'medium' | 'small';
    variant?: 'text' | 'outlined' | 'contained';
    fluid?: boolean;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    loading?: boolean;
    fab?: boolean;
    leftIcon?: FontAwesomeIconProps['icon'] | null;
    rightIcon?: FontAwesomeIconProps['icon'] | null;
    hasChildren?: boolean;
    children: React.ReactNode;
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

const Button = (
    {
        color = 'primary',
        variant = 'contained',
        size = 'medium',
        type = 'button',
        fluid = false,
        disabled = false,
        loading = false,
        leftIcon = null,
        rightIcon = null,
        fab = false,
        children,
        ...rest
    }: ButtonProps,
    ref: RefObject<HTMLButtonElement>,
): JSX.Element => (
    <div>
        <StyledButton
            ref={ref}
            color={color}
            variant={variant}
            type={type}
            fluid={fluid}
            disabled={disabled}
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
                <Space inline={false}>
                    {leftIcon && <Icon icon={leftIcon} />}
                    {children && <span>{children}</span>}
                    {rightIcon && !fab && <Icon icon={rightIcon} />}
                </Space>
            </span>
        </StyledButton>
    </div>
);

export default forwardRef(Button);
