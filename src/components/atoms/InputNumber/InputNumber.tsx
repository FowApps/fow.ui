import React from 'react';
import RcInputNumber, { InputNumberProps } from 'rc-input-number';
import 'rc-input-number/assets/index.css';

import { Wrapper } from './styles';

export interface IInputNumber extends InputNumberProps {
    hasValidationError?: boolean;
    disabled?: boolean;
}

const InputNumber = (
    { hasValidationError = false, disabled = false, ...rest }: IInputNumber,
    ref,
): JSX.Element => (
    <Wrapper hasValidationError={hasValidationError} disabled={disabled}>
        <RcInputNumber
            onKeyPress={(event) => {
                if (!/[0-9.,]/.test(event.key)) {
                    event.preventDefault();
                }
            }}
            {...rest}
            ref={ref}
            disabled={disabled}
        />
    </Wrapper>
);

export default React.forwardRef(InputNumber);
