import React from 'react';
import Body from '../Typography/Body';
import Caption from '../Typography/Caption';
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
     * color sheme of chip
     */
    color: 'grey' | 'primary' | 'info' | 'success' | 'warning' | 'error';
    /**
     * text of chip
     */
    text: React.ReactNode | 'string';
}

const renderText = (size: ChipProps['size'], text: ChipProps['text']) => {
    switch (size) {
        case 'small':
            return <Caption>{text}</Caption>;
        case 'medium':
            return <Body level={2}>{text}</Body>;
        default:
            return '';
    }
};

const Chip = ({
    size = 'medium',
    type = 'filled',
    color = 'grey',
    text,
    ...rest
}: ChipProps): JSX.Element => (
    <StyledChip size={size} type={type} color={color} {...rest}>
        {renderText(size, text)}
    </StyledChip>
);

export default Chip;
