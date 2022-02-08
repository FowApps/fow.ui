import React, { InputHTMLAttributes } from 'react';
import {
    StyledLabel,
    LabelText,
    StyledInput,
    MarkBox,
    Mark,
    HoverCircle,
} from './styles';

import Space from '../Space';

export interface SwitchProps
    extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    prefixLabel?: string;
    suffixLabel?: string;
    /**
     * size
     */
    size?: 'small' | 'medium';
    /**
     * disabled
     */
    disabled?: boolean;
}

const Switch = ({
    size = 'medium',
    prefixLabel = '',
    suffixLabel = '',
    disabled,
    ...rest
}: SwitchProps): JSX.Element => (
    <StyledLabel>
        <Space>
            {prefixLabel && (
                <LabelText _size={size} disabled={disabled}>
                    {prefixLabel}
                </LabelText>
            )}
            <StyledInput
                _size={size}
                type="checkbox"
                disabled={disabled}
                {...rest}
            />
            <MarkBox _size={size}>
                <Mark _size={size}>
                    <HoverCircle _size={size} />
                </Mark>
            </MarkBox>
            {suffixLabel && (
                <LabelText _size={size} disabled={disabled}>
                    {suffixLabel}
                </LabelText>
            )}
        </Space>
    </StyledLabel>
);

export default Switch;
