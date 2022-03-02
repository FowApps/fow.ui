import React from 'react';

import ReactPhoneInput, { PhoneInputProps } from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { Wrapper } from './styles';

export interface Props extends PhoneInputProps {
    country?: string;
    search?: boolean;
    hasValidationError?: boolean;
}

const PhoneInput = ({
    hasValidationError = false,
    country,
    search,
    ...rest
}: Props): JSX.Element => (
    <Wrapper hasValidationError={hasValidationError}>
        <ReactPhoneInput country={country} enableSearch={search} {...rest} />
    </Wrapper>
);

export default PhoneInput;
