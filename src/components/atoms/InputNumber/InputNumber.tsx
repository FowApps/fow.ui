import React from 'react';
import RcInputNumber, { InputNumberProps } from 'rc-input-number';
import 'rc-input-number/assets/index.css';

import { Wrapper } from './styles';

export interface IInputNumber extends InputNumberProps {
    hasValidationError?: boolean;
}

const InputNumber = (
    { hasValidationError = false, ...rest }: IInputNumber,
    ref,
): JSX.Element => (
    <Wrapper hasValidationError={hasValidationError}>
        <RcInputNumber {...rest} ref={ref} />
    </Wrapper>
);

export default React.forwardRef(InputNumber);
