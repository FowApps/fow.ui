import React, { useEffect, useState } from 'react';

import Input, { InputProps } from '../Input';
import Select, { Props as SelectProps } from '../Select';
import Space from '../Space';
import { InputWrapper, SelectWrapper, FixedWrapper } from './styles';
import useIsMountFirstTime from '../../../hooks/useIsMountFirstTime';

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
    extensions?: Extension[];
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

const defaultExtensions: Extension[] = [
    {
        name: 'gmail.com',
        value: 'gmail.com',
    },
    {
        name: 'hotmail.com',
        value: 'hotmail.com',
    },
    {
        name: 'yahoo.com',
        value: 'yahoo.com',
    },
    {
        name: 'outlook.com',
        value: 'outlook.com',
    },
];

const EmailInput = ({
    value,
    onChange,
    extensions = defaultExtensions,
    inputProps = {},
    selectProps = {},
}: EmailProps): JSX.Element => {
    const [email, setEmail] = useState<string | undefined>(value || '');
    const [extension, setExtension] = useState<Extension['value']>('');
    const [isDefaultValueSetted, setIsDefaultValueSetted] = useState(false);
    const isFirstTime = useIsMountFirstTime();

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
        if (!isFirstTime) {
            triggerChange();
        }
    }, [email, extension]);

    useEffect(() => {
        if (!isDefaultValueSetted && value) {
            const [initialEmail, initialExtension] = value?.split('@');
            setEmail(initialEmail);
            setExtension(initialExtension);
            setIsDefaultValueSetted(true);
        }
    }, [value]);

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
            <FixedWrapper>
                <Input placeholder="@" disabled={!inputProps.disabled} />
            </FixedWrapper>
            <SelectWrapper>
                <Select
                    mode="combobox"
                    value={extension}
                    onChange={onExtensionChange}
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
