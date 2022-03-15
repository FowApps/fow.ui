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
        ...rest
    }: InputProps,
    ref: RefObject<HTMLInputElement>,
): JSX.Element => {
    const [val, setVal] = useState(fixControlledValue(rest.value));

    const handleChange = (e) => {
        setVal(e.target.value);
        rest.onChange?.(e.target.value);
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
                    type="text"
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
