import React, {
    forwardRef,
    LegacyRef,
    useCallback,
    useContext,
    useState,
} from 'react';

import ReactPhoneInput, { PhoneInputProps } from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

import { Wrapper } from './styles';

import en from './locales/en';
import tr from './locales/tr';
import { ConfigContext } from '../../../theme/FowThemeProvider';

const localization = {
    tr,
    en,
};
export interface Props extends PhoneInputProps {
    country?: string;
    search?: boolean;
    hasValidationError?: boolean;
    name?: string;
    disabled?: boolean;
}

function fixControlledValue<T>(value: T) {
    if (typeof value === 'undefined' || value === null) {
        return '';
    }
    return value;
}

const PhoneInput = (
    {
        hasValidationError = false,
        country = 'tr',
        search = true,
        onChange,
        disabled = false,
        ...rest
    }: Props,
    ref: LegacyRef<HTMLInputElement>,
): JSX.Element => {
    const [isFocused, setIsFocused] = useState(false);
    const { language } = useContext(ConfigContext);
    const [value, setValue] = useState(fixControlledValue(rest?.value));

    const handleChange: Props['onChange'] = useCallback(
        (v, data, event, formattedValue) => {
            setValue(v);
            onChange?.(v, data, event, formattedValue);
        },
        [onChange],
    );

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
            <ReactPhoneInput
                {...rest}
                inputProps={{
                    ref: ref || { current: null },
                    name: rest?.name,
                }}
                preferredCountries={['tr', 'us', 'de', 'gb']}
                onBlur={handleBlur}
                onFocus={handleFocus}
                country={country}
                enableSearch={search}
                searchPlaceholder={localization[language].searchPlaceholder}
                searchNotFound={localization[language].searchNotFound}
                jumpCursorToEnd
                value={value}
                onChange={handleChange}
                disabled={disabled}
            />
        </Wrapper>
    );
};

export default forwardRef(PhoneInput);
