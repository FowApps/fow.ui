import React, { useEffect, useState } from 'react';

import InputNumber, { IInputNumber } from '../InputNumber';
import Select, { Props as SelectProps } from '../Select';
import Space from '../Space';
import { InputWrapper, SelectWrapper } from './styles';

const { Option } = Select;

interface Currency {
    /**
     * value of currency
     */
    value: string;
    /**
     * name of currency
     */
    name: string;
}

interface PriceValue {
    /**
     * the primitive type of the input
     */
    number?: number;
    /**
     * inheritence of currency value
     */
    currency?: Currency['value'];
}

export interface PriceInputProps {
    /**
     *  inheritence of currency
     */
    currencies: Currency[];
    /**
     * inheritence of pricevalue
     */
    value?: PriceValue;
    /**
     * handle change value
     */
    onChange?: (value?: PriceValue | number) => void;
    /**
     * props of input
     */
    inputProps?: IInputNumber;
    /**
     * select props
     */
    selectProps?: SelectProps;
    setFormFieldValue?: (fieldValue: string) => void;
    initialValue?: {
        number?: number;
        currency?: Currency['value'];
    };
}

const PriceInput = ({
    value = {},
    onChange,
    currencies = [],
    inputProps = {},
    selectProps = {},
    setFormFieldValue,
    initialValue,
}: PriceInputProps): JSX.Element => {
    const [number, setNumber] = useState<number | undefined>(
        initialValue?.number || undefined,
    );
    const [currency, setCurrency] = useState<Currency['value']>(
        initialValue?.currency || currencies?.[0]?.value || '',
    );

    const triggerChange = (changedValue: {
        number?: number;
        currency?: Currency['value'];
    }) => {
        if (setFormFieldValue) {
            setFormFieldValue(currency);
            onChange?.(changedValue.number);
        } else {
            onChange?.({
                number: changedValue.number,
                currency,
                ...value,
                ...changedValue,
            });
        }
    };

    const onNumberChange = (val: any) => {
        const newNumber = parseInt(val || '0', 10);
        if (Number.isNaN(number)) {
            return;
        }
        setNumber(newNumber);
        triggerChange({ number: newNumber });
    };

    const onCurrencyChange = (newCurrency: any) => {
        setNumber(undefined);
        setCurrency(newCurrency);
        setFormFieldValue?.(newCurrency);
        triggerChange({ currency: newCurrency });
    };

    useEffect(() => {
        if (setFormFieldValue) {
            setFormFieldValue(currency);
        }
    }, []);

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
                    {currencies?.map((curr) => (
                        <Option key={curr.value} value={curr.value}>
                            {curr.name}
                        </Option>
                    ))}
                </Select>
            </SelectWrapper>
        </Space>
    );
};

export default PriceInput;
