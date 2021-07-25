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
    /**
     * invoke after each
     */
    onCheck?: (checked: boolean) => void;
    color?: 'primary' | 'grey';
}

const Checkbox = ({
    label = '',
    disabled = false,
    color = 'primary',
    value,
    onChange,
    onCheck,
    ...rest
}: CheckboxProps): JSX.Element => {
    const handleChange = (e) => {
        if (typeof onChange === 'function') onChange(e.target.checked);
        if (typeof onCheck === 'function') onCheck(e.target.checked);
    };

    return (
        <StyledLabel>
            {label && (
                <LabelText level={2} disabled={disabled}>
                    {label}
                </LabelText>
            )}
            <StyledInput
                {...rest}
                type="checkbox"
                disabled={disabled}
                color={color}
                defaultChecked={!!value}
                onChange={handleChange}
            />
            <MarkBox>
                <Mark icon="check" color="white" size="xs" />
            </MarkBox>
        </StyledLabel>
    );
};

export default Checkbox;
