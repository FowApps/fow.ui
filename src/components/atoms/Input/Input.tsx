import React, {
    useState,
    RefObject,
    useEffect,
    ComponentPropsWithRef,
} from 'react';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import Icon from '../Icon';

import { Wrapper, StyledInput, InputWrapper, IconWrapper } from './styles';

export interface InputProps
    extends Omit<ComponentPropsWithRef<'input'>, 'onChange'> {
    prefixIcon?: FontAwesomeIconProps['icon'];
    suffixIcon?: FontAwesomeIconProps['icon'];
    /**
     * clear
     */
    allowClear?: boolean;
    /**
     * change the availability of the component
     */
    disabled?: boolean;
    hasValidationError?: boolean;
    /**
     * handle change input value
     */
    onChange?: (value: string) => void;
    /**
     * input types
     */
    type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url';
    regExp?: RegExp;
}

function fixControlledValue<T>(value: T) {
    if (typeof value === 'undefined' || value === null) {
        return '';
    }
    return value;
}

const Input = (
    {
        prefixIcon = undefined,
        suffixIcon = undefined,
        disabled = false,
        hasValidationError = false,
        type = 'text',
        regExp,
        ...rest
    }: InputProps,
    ref: RefObject<HTMLInputElement>,
): JSX.Element => {
    const [val, setVal] = useState(fixControlledValue(rest.value));

    const handleChange = (e) => {
        if (regExp && !regExp?.test(e.target.value) && e.target.value !== '')
            return e.preventDefault();

        setVal(e.target.value);
        rest.onChange?.(e.target.value);
        return false;
    };

    useEffect(() => {
        setVal(fixControlledValue(rest.value));
    }, [rest.value]);

    return (
        <Wrapper>
            <InputWrapper>
                <StyledInput
                    {...rest}
                    hasValidationError={hasValidationError}
                    hasPrefixIcon={!!prefixIcon}
                    hasSuffixIcon={!!suffixIcon}
                    disabled={disabled}
                    value={val}
                    onChange={handleChange}
                    ref={ref}
                    type={type}
                />
                {prefixIcon && (
                    <IconWrapper position="prefix">
                        <Icon icon={prefixIcon} />
                    </IconWrapper>
                )}
                {suffixIcon && (
                    <IconWrapper position="suffix">
                        <Icon icon={suffixIcon} />
                    </IconWrapper>
                )}
            </InputWrapper>
        </Wrapper>
    );
};

export default React.forwardRef(Input);
