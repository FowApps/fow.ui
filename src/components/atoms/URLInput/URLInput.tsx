import React, { forwardRef, RefObject, useEffect, useState } from 'react';
import useIsMountFirstTime from '../../../hooks/useIsMountFirstTime';

import Input, { InputProps } from '../Input';
import Select, { Props as SelectProps } from '../Select';
import Space from '../Space';
import { InputWrapper, SelectWrapper } from './styles';

const { Option } = Select;

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
    onChange?: (value: string) => void;
    /**
     * props of input
     */
    inputProps?: InputProps;
    /**
     * select props
     */
    selectProps?: SelectProps;
    /**
     * name of input
     */
    name?: string;
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
    { value, onChange, inputProps = {}, selectProps = {}, name }: URLInputProps,
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
        const mergedUrl = `${protocol}${urlName}`;
        onChange?.(mergedUrl);
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
            <SelectWrapper>
                <Select
                    value={protocol}
                    style={{ width: 150 }}
                    onChange={ProtocolChange}
                    {...selectProps}>
                    {protocols?.map((prot) => (
                        <Option value={prot.value} key={prot.value}>
                            {prot.name}
                        </Option>
                    ))}
                </Select>
            </SelectWrapper>
            <InputWrapper>
                <Input
                    ref={ref}
                    name={name}
                    type="text"
                    value={urlName}
                    onChange={handleChange}
                    {...inputProps}
                />
            </InputWrapper>
        </Space>
    );
};

export default forwardRef(URLInput);
