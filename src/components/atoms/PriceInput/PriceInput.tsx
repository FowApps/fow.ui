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
    disableCurrency?: boolean;
    baseCurrency?: string;
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
    baseCurrency,
    disableCurrency,
}: PriceInputProps): JSX.Element => {
    const [number, setNumber] = useState<number | undefined>(
        value?.number || initialValue?.number || undefined,
    );
    const [currency, setCurrency] = useState<Currency['value']>(
        value?.currency ||
            initialValue?.currency ||
            baseCurrency ||
            currencies?.[0]?.value ||
            '',
    );

    const triggerChange = (changedValue: {
        number?: number;
        currency?: Currency['value'];
    }) => {
        if (setFormFieldValue) {
            setFormFieldValue(currency);
            onChange?.({
                number: changedValue?.number ?? number,
                currency: changedValue?.currency || currency,
            });
        } else {
            onChange?.({
                number: changedValue?.number ?? number,
                currency: changedValue?.currency || currency,
            });
        }
        setNumber(changedValue?.number ?? number);
        setCurrency(changedValue?.currency ?? currency);
    };
    const singleOnChange = (changedValue: number) => {
        if (setFormFieldValue) {
            onChange?.(changedValue);
        } else {
            onChange?.(changedValue);
        }
        setNumber(changedValue);
    };

    useEffect(() => {
        if (disableCurrency) {
            singleOnChange?.(Number(value));
        } else if (
            (value?.number !== number || value?.currency !== currency) &&
            !disableCurrency
        ) {
            triggerChange(value);
        }
    }, [value, disableCurrency]);

    return (
        <Space size="xxsmall" inline={false}>
            {disableCurrency ? (
                <InputWrapper>
                    <InputNumber
                        disabled={disabled}
                        type="text"
                        formatter={(val) =>
                            `${val}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                        }
                        {...inputProps}
                        value={number}
                        onChange={(e) => {
                            singleOnChange(Number(e));
                        }}
                    />
                </InputWrapper>
            ) : (
                <>
                    <InputWrapper>
                        <InputNumber
                            disabled={disabled}
                            type="text"
                            formatter={(val) =>
                                `${val}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                            }
                            {...inputProps}
                            value={number}
                            onChange={(e) =>
                                triggerChange({
                                    number: Number(e),
                                    currency,
                                })
                            }
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
                            closeAfterSelect
                            {...selectProps}
                            value={currency}
                            onChange={(e) =>
                                triggerChange({
                                    number,
                                    currency: e,
                                })
                            }
                        />
                    </SelectWrapper>
                </>
            )}
        </Space>
    );
};

export default PriceInput;
