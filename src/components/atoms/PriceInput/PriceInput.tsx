import React, { useState } from 'react';

import InputNumber, { IInputNumber } from '../InputNumber';
import Select, { Props as SelectProps } from '../Select';
import Space from '../Space';
import { InputWrapper, SelectWrapper } from './styles';

const { Option } = Select;

interface Currency {
    value: string;
    name: string;
}

interface PriceValue {
    number?: number;
    currency?: Currency['value'];
}

export interface PriceInputProps {
    currencies: Currency[];
    value?: PriceValue;
    onChange?: (value: PriceValue) => void;
    inputProps?: IInputNumber;
    selectProps?: SelectProps;
}

const PriceInput = ({
    value = {},
    onChange,
    currencies,
    inputProps = {},
    selectProps = {},
}: PriceInputProps): JSX.Element => {
    const [number, setNumber] = useState<number | undefined>();
    const [currency, setCurrency] = useState<Currency['value']>(
        currencies[0].value,
    );

    const triggerChange = (changedValue: {
        number?: number;
        currency?: Currency['value'];
    }) => {
        onChange?.({ number, currency, ...value, ...changedValue });
    };

    const onNumberChange = (val: any) => {
        const newNumber = parseInt(val || '0', 10);
        if (Number.isNaN(number)) {
            return;
        }
        if (!('number' in value)) {
            setNumber(newNumber);
        }
        triggerChange({ number: newNumber });
    };

    const onCurrencyChange = (newCurrency: any) => {
        if (!('currency' in value)) {
            setCurrency(newCurrency);
        }
        triggerChange({ currency: newCurrency });
    };

    return (
        <Space size="xxsmall" inline={false}>
            <InputWrapper>
                <InputNumber
                    type="text"
                    value={value.number || number}
                    onChange={onNumberChange}
                    formatter={(val) =>
                        `${val}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                    }
                    {...inputProps}
                />
            </InputWrapper>
            <SelectWrapper>
                <Select
                    value={value.currency || currency}
                    style={{ width: 150 }}
                    onChange={onCurrencyChange}
                    {...selectProps}>
                    {currencies.map((curr) => (
                        <Option value={curr.value}>{curr.name}</Option>
                    ))}
                </Select>
            </SelectWrapper>
        </Space>
    );
};

export default PriceInput;
