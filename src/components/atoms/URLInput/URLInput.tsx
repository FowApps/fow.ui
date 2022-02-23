import React, { useEffect, useState } from 'react';

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
     *  inheritence of protocol
     */
    protocols?: Protocol[];
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
}

const URLInput = ({
    value = 'http://www.google.com',
    onChange,
    protocols,
    inputProps = {},
    selectProps = {},
}: URLInputProps): JSX.Element => {
    const [urlName, setURLname] = useState<string | undefined>(value);
    const [protocol, setProtocol] = useState<Protocol['value']>(
        protocols[0].value,
    );

    useEffect(() => {
        if (urlName?.includes('https://') || urlName?.includes('http://')) {
            const seperatedProtocolIndex = urlName.indexOf('/') + 1;
            setProtocol(urlName.slice(0, seperatedProtocolIndex + 1));
            setURLname(
                urlName.substring(seperatedProtocolIndex + 1, urlName.length),
            );
        }
    }, [urlName]);

    const triggerChange = () => {
        const mergedUrl = `${protocol}${urlName}`;
        onChange?.(mergedUrl);
    };

    const handleChange = (inputValue: string) => {
        setURLname(inputValue);
    };

    const onProtocolChange = (newProtocol: any) => {
        setProtocol(newProtocol);
    };

    useEffect(() => {
        triggerChange();
    }, [urlName, protocol]);

    return (
        <Space size="xxsmall" inline={false}>
            <SelectWrapper>
                <Select
                    value={protocol}
                    style={{ width: 150 }}
                    onChange={onProtocolChange}
                    {...selectProps}>
                    {protocols?.map((prot) => (
                        <Option value={prot.value}>{prot.name}</Option>
                    ))}
                </Select>
            </SelectWrapper>
            <InputWrapper>
                <Input
                    type="text"
                    value={urlName}
                    onChange={handleChange}
                    {...inputProps}
                />
            </InputWrapper>
        </Space>
    );
};

export default URLInput;
