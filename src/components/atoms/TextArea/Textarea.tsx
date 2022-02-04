import React, {
    useState,
    RefObject,
    useEffect,
    ComponentPropsWithRef,
} from 'react';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import Icon from '../Icon';

import { Wrapper, StyledTextArea, InputWrapper, IconWrapper } from './styles';

export interface TextAreaProps
    extends Omit<ComponentPropsWithRef<'input'>, 'onChange'> {
    prefixIcon?: FontAwesomeIconProps['icon'];
    suffixIcon?: FontAwesomeIconProps['icon'];
    allowClear?: boolean;
    disabled?: boolean;
    hasValidationError?: boolean;
    onChange?: (value: string) => void;
}

function fixControlledValue<T>(value: T) {
    if (typeof value === 'undefined' || value === null) {
        return '';
    }
    return value;
}

const TextArea = (
    {
        prefixIcon = undefined,
        suffixIcon = undefined,
        disabled = false,
        hasValidationError = false,
        ...rest
    }: TextAreaProps,
    ref: RefObject<HTMLInputElement>,
): JSX.Element => {
    const [val, setVal] = useState(rest.value);

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
                <StyledTextArea
                    {...rest}
                    hasValidationError={hasValidationError}
                    hasPrefixIcon={!!prefixIcon}
                    hasSuffixIcon={!!suffixIcon}
                    disabled={disabled}
                    value={val}
                    onChange={handleChange}
                    ref={ref}
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

export default React.forwardRef(TextArea);
