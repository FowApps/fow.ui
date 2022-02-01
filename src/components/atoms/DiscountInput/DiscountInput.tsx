import React, { useContext, useState } from 'react';

import InputNumber, { IInputNumber } from '../InputNumber';
import Select, { Props as SelectProps } from '../Select';
import Space from '../Space';
import { InputWrapper, SelectWrapper } from './styles';
import { ConfigContext } from '../../../theme/FowThemeProvider';

// language files
import { tr } from './locales/tr';
import { en } from './locales/en';

const { Option } = Select;

interface DiscountType {
    value: string;
    name: string;
}

interface DiscountValue {
    number?: number;
    type?: DiscountType['value'];
}

export interface DiscountInputProps {
    value?: DiscountValue;
    onChange?: (value: DiscountValue) => void;
    inputProps?: IInputNumber;
    selectProps?: SelectProps;
}

const discountTypes: DiscountType[] = [
    {
        name: 'amount',
        value: 'amount',
    },
    {
        name: 'percent',
        value: 'percent',
    },
];

const localization = {
    tr,
    en,
};

const DiscountInput = ({
    value = {},
    onChange,
    inputProps = {},
    selectProps = {},
}: DiscountInputProps): JSX.Element => {
    const { language } = useContext(ConfigContext);
    const [number, setNumber] = useState<number | undefined>();
    const [discountType, setDiscountType] = useState<DiscountType['value']>(
        discountTypes[0].value,
    );

    const triggerChange = (changedValue: {
        number?: number;
        type?: DiscountType['value'];
    }) => {
        onChange?.({ number, type: discountType, ...value, ...changedValue });
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

    const onTypeChange = (newType: any) => {
        if (!('type' in value)) {
            setDiscountType(newType);
        }
        setNumber(undefined);
        triggerChange({ type: newType });
    };

    return (
        <Space size="xxsmall" inline={false}>
            <InputWrapper>
                <InputNumber
                    type="text"
                    value={value.number || number}
                    onChange={onNumberChange}
                    formatter={(val) => {
                        if (discountType === 'amount') {
                            return `${val}`.replace(
                                /\B(?=(\d{3})+(?!\d))/g,
                                ',',
                            );
                        }
                        return `${val}`;
                    }}
                    {...inputProps}
                />
            </InputWrapper>
            <SelectWrapper>
                <Select
                    value={value.type || discountType}
                    style={{ width: 150 }}
                    onChange={onTypeChange}
                    {...selectProps}>
                    {discountTypes.map((type) => (
                        <Option value={type.value}>
                            {localization[language][type.name]}
                        </Option>
                    ))}
                </Select>
            </SelectWrapper>
        </Space>
    );
};

export default DiscountInput;
