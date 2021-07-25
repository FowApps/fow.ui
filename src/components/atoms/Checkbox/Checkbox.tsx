import React, { InputHTMLAttributes } from 'react';

import { StyledLabel, StyledInput, MarkBox, Mark, LabelText } from './styles';

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
    /**
     * input label
     */
    label?: string;
    /**
     * disable state flag
     */
    disabled?: boolean;
    color?: 'primary' | 'grey';
}

const Checkbox = ({
    label = '',
    disabled = false,
    color = 'primary',
    value,
    ...rest
}: CheckboxProps): JSX.Element => (
    <StyledLabel>
        {label && (
            <LabelText level={2} disabled={disabled}>
                {label}
            </LabelText>
        )}
        <StyledInput
            type="checkbox"
            disabled={disabled}
            color={color}
            checked={!!value}
            {...rest}
        />
        <MarkBox>
            <Mark icon="check" color="white" size="xs" />
        </MarkBox>
    </StyledLabel>
);

export default Checkbox;
