import React, { forwardRef, RefObject, useState } from 'react';

import Input, { InputProps } from '../Input';
import { Wrapper } from './styles';

export interface PhoneInputProps extends InputProps {
    country?: string;
    search?: boolean;
    hasValidationError?: boolean;
    name?: string;
}

function fixControlledValue<T>(value: T) {
    if (typeof value === 'undefined' || value === null) {
        return '';
    }
    return value;
}

const PhoneInput = (
    {
        name,
        hasValidationError = false,
        disabled = false,
        ...rest
    }: PhoneInputProps,
    ref: RefObject<HTMLInputElement>,
): JSX.Element => {
    const [isFocused, setIsFocused] = useState(false);
    const [value, setValue] = useState(fixControlledValue(rest?.value));

    const handleChange = (val: string) => {
        setValue(val);
    };

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    return (
        <Wrapper
            hasValidationError={hasValidationError}
            isFocused={isFocused}
            disabled={disabled}>
            <Input
                ref={ref}
                name={name}
                type="email"
                onBlur={handleBlur}
                onFocus={handleFocus}
                value={value}
                onChange={handleChange}
                disabled={disabled}
                regExp={/^[\d#+*]+$/}
                {...rest}
            />
        </Wrapper>
    );
};

export default forwardRef(PhoneInput);
