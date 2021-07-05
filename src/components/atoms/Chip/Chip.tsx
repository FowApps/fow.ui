import React from 'react';
import { StyledChip } from './styles';

export interface ChipProps {
    /**
     * size of chip
     */
    size: 'small' | 'medium';
    /**
     * type of chip
     */
    type: 'filled' | 'outlined';
    /**
     * color
     */
    color: 'grey' | 'primary' | 'info' | 'success' | 'warning' | 'error';
    /**
     * text of chip
     */
    text: React.ReactNode | 'string';
}

const Chip = ({
    size = 'medium',
    type = 'filled',
    color = 'grey',
    text,
    ...rest
}: ChipProps): JSX.Element => (
    <StyledChip size={size} type={type} color={color} {...rest}>
        {text}
    </StyledChip>
);

export default Chip;
