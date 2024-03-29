import React, { forwardRef, RefObject, useEffect, useState } from 'react';
import useIsMountFirstTime from '../../../hooks/useIsMountFirstTime';

import Input, { InputProps } from '../Input';
import SelectV3, { SelectProps } from '../SelectV3';
import Space from '../Space';
import { InputWrapper, SelectWrapper } from './styles';

interface Protocol {
    /**
     * value of protocol
     */
    value: string;
    /**
     * name of protocol
     */
    name: string;
}

export interface URLInputProps {
    /**
     * inheritence of URLvalue
     */
    value?: string;
    /**
     * handle change value
     */
    onChange?: (value?: string) => void;
    /**
     * props of input
     */
    inputProps?: InputProps;
    /**
     * select props
     */
    selectProps?: Omit<SelectProps, 'options'>;
    /**
     * name of input
     */
    name?: string;
    hasValidationError?: boolean;
    disabled?: boolean;
}

const protocols: Protocol[] = [
    {
        name: 'https://',
        value: 'https://',
    },
    {
        name: 'http://',
        value: 'http://',
    },
];

const URLInput = (
    {
        value,
        onChange,
        inputProps = {},
        selectProps = {},
        name,
        hasValidationError = false,
        disabled = false,
    }: URLInputProps,
    ref: RefObject<HTMLInputElement>,
): JSX.Element => {
    const [urlName, setURLname] = useState<string | undefined>(value);
    const [protocol, setProtocol] = useState<Protocol['value']>(
        protocols[0].value,
    );
    const [isDefaultValueSetted, setIsDefaultValueSetted] = useState(false);
    const isFirstTime = useIsMountFirstTime();

    useEffect(() => {
        if (urlName?.includes('https://') || urlName?.includes('http://')) {
            const seperatedProtocolIndex = urlName.indexOf('/') + 1;
            setProtocol(urlName.slice(0, seperatedProtocolIndex + 1));
            setURLname(
                urlName.substring(seperatedProtocolIndex + 1, urlName.length),
            );
        }
    }, [urlName]);

    useEffect(() => {
        if (!isDefaultValueSetted && value) {
            if (value.includes('https://') || value.includes('http://')) {
                const seperatedValueIndex = value.indexOf('/') + 1;
                setProtocol(value.slice(0, seperatedValueIndex + 1));
                setURLname(
                    value.substring(seperatedValueIndex + 1, value.length),
                );
                setIsDefaultValueSetted(true);
            } else {
                setProtocol(protocols[0].value);
                setURLname(value);
                setIsDefaultValueSetted(true);
            }
        }
    }, [value]);

    const triggerChange = () => {
        if (!urlName) {
            onChange?.(undefined);
        } else {
            const mergedUrl = `${protocol}${urlName}`;
            onChange?.(mergedUrl);
        }
    };

    const handleChange = (inputValue: string) => {
        setURLname(inputValue);
    };

    const ProtocolChange = (newProtocol: any) => {
        setProtocol(newProtocol);
    };

    useEffect(() => {
        if (!isFirstTime) {
            triggerChange();
        }
    }, [urlName, protocol]);

    return (
        <Space size="xxsmall" inline={false}>
            <SelectWrapper style={{ width: 150 }}>
                <SelectV3
                    options={protocols?.map((prot) => ({
                        value: prot.value,
                        label: prot.name,
                    }))}
                    allowClear={false}
                    allowSearch={false}
                    value={protocol}
                    onChange={ProtocolChange}
                    hasValidationError={hasValidationError}
                    disabled={disabled}
                    closeAfterSelect
                    {...selectProps}
                />
            </SelectWrapper>
            <InputWrapper>
                <Input
                    ref={ref}
                    name={name}
                    type="text"
                    value={urlName}
                    onChange={handleChange}
                    hasValidationError={hasValidationError}
                    disabled={disabled}
                    {...inputProps}
                />
            </InputWrapper>
        </Space>
    );
};

export default forwardRef(URLInput);
