import React from 'react';
import Space from '../Space';
import { StyledBadge } from './styles';

export interface BadgeProps {
    /**
     * color scheme of label
     */
    color: 'primary' | 'info' | 'success' | 'warning' | 'error' | 'grey';
    /**
     * variant of label
     */
    variant?: 'outlined' | 'filled';
    /**
     * shape scheme of label
     */
    shape?: 'circle' | 'rounded';
    /**
     * size of label
     */
    size?: 'small' | 'medium' | 'large';

    text: 'string';
}

const Badge = ({
    shape = 'rounded',
    size = 'large',
    variant = 'filled',
    color = 'primary',
    text,
}: BadgeProps): JSX.Element => {
    const textLength = text.length;
    return (
        <StyledBadge
            textLength={textLength}
            shape={shape}
            size={size}
            variant={variant}
            color={color}>
            <span>
                <Space size="small">{text}</Space>
            </span>
        </StyledBadge>
    );
};

export default Badge;
