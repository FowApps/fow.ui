import React, { InputHTMLAttributes } from 'react';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import Icon from '../Icon';

import { Wrapper, StyledInput, InputWrapper, IconWrapper } from './styles';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    prefixIcon?: FontAwesomeIconProps['icon'];
    suffixIcon?: FontAwesomeIconProps['icon'];
    allowClear?: boolean;
    disabled?: boolean;
    hasValidationError?: boolean;
}

const Input = ({
    prefixIcon = undefined,
    suffixIcon = undefined,
    disabled = false,
    hasValidationError = false,
    ...rest
}: InputProps): JSX.Element => (
    <Wrapper>
        <InputWrapper>
            <StyledInput
                hasValidationError={hasValidationError}
                hasPrefixIcon={!!prefixIcon}
                hasSuffixIcon={!!suffixIcon}
                disabled={disabled}
                {...rest}
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

export default Input;
