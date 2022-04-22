import React, { useEffect, useState } from 'react';

import InputNumber, { IInputNumber } from '../InputNumber';
import SelectV3, { SelectProps } from '../SelectV3';
import Space from '../Space';
import { InputWrapper, SelectWrapper } from './styles';

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
    selectProps?: Omit<SelectProps, 'options'>;
    setFormFieldValue?: (fieldValue: string) => void;
    initialValue?: {
        number?: number;
        currency?: Currency['value'];
    };
    disabled?: boolean;
}

const PriceInput = ({
    value = {},
    onChange,
    currencies = [],
    inputProps = {},
    selectProps = {},
    setFormFieldValue,
    initialValue,
    disabled = false,
}: PriceInputProps): JSX.Element => {
    const [number, setNumber] = useState<number | undefined>(
        initialValue?.number || value?.number || undefined,
    );

    const [currency, setCurrency] = useState<Currency['value']>(
        initialValue?.currency || value?.currency || '',
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
                    disabled={disabled}
                    type="text"
                    value={value.number || number}
                    onChange={onNumberChange}
                    formatter={(val) =>
                        `${val}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                    }
                    {...inputProps}
                />
            </InputWrapper>
            <SelectWrapper style={{ width: 150 }}>
                <SelectV3
                    allowSearch={false}
                    allowClear={false}
                    options={currencies?.map((curr) => ({
                        value: curr.value,
                        label: curr.name,
                    }))}
                    disabled={disabled}
                    value={value.currency || currency}
                    onChange={onCurrencyChange}
                    closeAfterSelect
                    {...selectProps}
                />
            </SelectWrapper>
        </Space>
    );
};

export default PriceInput;
