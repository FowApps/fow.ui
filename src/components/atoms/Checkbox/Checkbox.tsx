import React, { InputHTMLAttributes } from 'react';

import { StyledLabel, StyledInput, MarkBox, Mark, LabelText } from './styles';

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
    /**
     * input name
     */
    name: string;
    /**
     * input label
     */
    label?: string;
    /**
     * for react hook form
     */
    register?: (e: string) => any;
    /**
     * disable state flag
     */
    disabled?: boolean;
    color?: 'primary' | 'grey';
}

const Checkbox = ({
    name,
    label = '',
    disabled = false,
    register,
    color = 'primary',
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
            {...(register && register(name))}
            {...rest}
        />
        <MarkBox>
            <Mark icon="check" color="white" size="xs" />
        </MarkBox>
    </StyledLabel>
);

export default Checkbox;
