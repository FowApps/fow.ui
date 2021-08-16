import React, { InputHTMLAttributes, useState, ChangeEvent } from 'react';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import Icon from '../Icon';

import {
    Wrapper,
    StyledInput,
    InputWrapper,
    Message,
    Label,
    PrefixIconWrapper,
    SuffixIconWrapper,
} from './styles';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name?: string;
    label?: string;
    required?: boolean;
    prefixIcon?: FontAwesomeIconProps['icon'];
    suffixIcon?: FontAwesomeIconProps['icon'];
    allowClear?: boolean;
    disabled?: boolean;
    error?: any;
    value?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export type Ref = HTMLInputElement;

const Input = ({
    name,
    label = undefined,
    prefixIcon = undefined,
    suffixIcon = undefined,
    disabled = false,
    required,
    error,
    value = '',
    onChange,
    ...rest
}: InputProps): JSX.Element => {
    const [controlledValue, setControlledValue] = useState<string>(value);
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setControlledValue(event.target.value);
        if (typeof onChange === 'function') onChange(event);
    };
    return (
        <Wrapper>
            {label && (
                <Label
                    disabled={disabled}
                    hasError={!!error}
                    htmlFor={name}
                    required={!!required}>
                    {label}
                </Label>
            )}
            <InputWrapper>
                <StyledInput
                    id={name}
                    name={name}
                    hasError={!!error}
                    hasPrefixIcon={!!prefixIcon}
                    hasSuffixIcon={!!suffixIcon}
                    disabled={disabled}
                    value={controlledValue}
                    onChange={handleChange}
                    {...rest}
                />
                {prefixIcon && (
                    <PrefixIconWrapper>
                        <Icon icon={prefixIcon} />
                    </PrefixIconWrapper>
                )}
                {suffixIcon && (
                    <SuffixIconWrapper>
                        <Icon icon={suffixIcon} />
                    </SuffixIconWrapper>
                )}
                {!!error && <Message>{error?.message}</Message>}
            </InputWrapper>
        </Wrapper>
    );
};

export default Input;
