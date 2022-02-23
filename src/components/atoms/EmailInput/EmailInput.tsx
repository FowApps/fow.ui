import React, { useEffect, useState } from 'react';

import Input, { InputProps } from '../Input';
import Select, { Props as SelectProps } from '../Select';
import Space from '../Space';
import { InputWrapper, SelectWrapper } from './styles';

const { Option } = Select;

interface Extension {
    /**
     * value of extension
     */
    value: string;
    /**
     * name of extension
     */
    name: string;
}

export interface EmailProps {
    /**
     *  inheritence of extension
     */
    extensions: Extension[];
    /**
     * inheritence of EmailValue
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

const EmailInput = ({
    value = '',
    onChange,
    extensions,
    inputProps = {},
    selectProps = {},
}: EmailProps): JSX.Element => {
    const [email, setEmail] = useState<string | undefined>(value);
    const [extension, setExtension] = useState<Extension['value']>(
        extensions[0].value,
    );
    const [isDisabled, setIsDisabled] = useState(false);

    const triggerChange = () => {
        const mergeEmail = `${email}@${extension}`;
        onChange?.(mergeEmail);
    };

    const handleChange = (val: string) => {
        setEmail(val);
    };

    const onExtensionChange = (newExtension: any) => {
        setExtension(newExtension);
    };

    useEffect(() => {
        triggerChange();
    }, [email, extension]);

    useEffect(() => {
        if (email?.includes('@')) {
            setIsDisabled(true);
            onChange?.(email);
        } else {
            setIsDisabled(false);
            triggerChange();
        }
    }, [email]);

    return (
        <Space size="xxsmall" inline={false}>
            <InputWrapper>
                <Input
                    type="text"
                    value={email}
                    onChange={handleChange}
                    {...inputProps}
                />
            </InputWrapper>
            <InputWrapper style={{ flexGrow: '0.05' }}>
                <Input placeholder="@" disabled={!inputProps.disabled} />
            </InputWrapper>
            <SelectWrapper>
                <Select
                    value={extension}
                    onChange={onExtensionChange}
                    disabled={isDisabled}
                    {...selectProps}>
                    {extensions.map((curr) => (
                        <Option value={curr.value}>{curr.name}</Option>
                    ))}
                </Select>
            </SelectWrapper>
        </Space>
    );
};

export default EmailInput;
