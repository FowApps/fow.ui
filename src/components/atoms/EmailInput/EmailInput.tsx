import React, { forwardRef, RefObject, useState } from 'react';

import Input, { InputProps } from '../Input';
import Space from '../Space';
import { InputWrapper } from './styles';

export interface EmailProps {
    /**
     * inheritence of EmailValue
     */
    value?: string;
    /**
     * handle change value
     */
    onChange?: (value?: string) => void;
    /**
     * props of input
     */
    inputProps?: InputProps;
    name?: string;
    hasValidationError?: boolean;
    disabled?: boolean;
}

const EmailInput = (
    {
        name,
        value,
        onChange,
        inputProps = {},
        hasValidationError,
        disabled,
    }: EmailProps,
    ref: RefObject<HTMLInputElement>,
): JSX.Element => {
    const [email, setEmail] = useState<string | undefined>(value || '');

    const handleChange = (val: string) => {
        setEmail(val);
        onChange?.(val);
    };

    return (
        <Space size="xxsmall" inline={false}>
            <InputWrapper>
                <Input
                    disabled={disabled}
                    ref={ref}
                    name={name}
                    type="email"
                    value={email}
                    onChange={handleChange}
                    {...inputProps}
                    hasValidationError={hasValidationError}
                />
            </InputWrapper>
        </Space>
    );
};

export default forwardRef(EmailInput);
