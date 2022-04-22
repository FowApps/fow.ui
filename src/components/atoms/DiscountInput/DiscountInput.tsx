import React, { useContext, useState } from 'react';

import InputNumber, { IInputNumber } from '../InputNumber';
import Space from '../Space';
import { InputWrapper, SelectWrapper } from './styles';
import { ConfigContext } from '../../../theme/FowThemeProvider';

// language files
import { tr } from './locales/tr';
import { en } from './locales/en';
import SelectV3, { SelectProps } from '../SelectV3';

interface DiscountType {
    /**
     * value of discounttype
     */
    value: string;
    /**
     * name of discounttype
     */
    name: string;
}

interface DiscountValue {
    /**
     * the primitive type of the input
     */
    number?: number;
    /**
     * inheritence of discountvalue value
     */
    type?: DiscountType['value'];
}

export interface DiscountInputProps {
    /**
     * inheritence of discountvalue
     */
    value?: DiscountValue;
    /**
     * handle change value
     */
    onChange?: (value: DiscountValue) => void;
    /**
     * props of input
     */
    inputProps?: IInputNumber;
    /**
     * select props
     */
    selectProps?: Omit<SelectProps, 'options'>;
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
            <SelectWrapper style={{ width: 150 }}>
                <SelectV3
                    value={value.type || discountType}
                    onChange={onTypeChange}
                    width={150}
                    allowClear={false}
                    allowSearch={false}
                    height={80}
                    {...selectProps}
                    options={discountTypes.map((type) => ({
                        label: localization[language][type.name],
                        value: type.value,
                    }))}
                    closeAfterSelect
                />
            </SelectWrapper>
        </Space>
    );
};

export default DiscountInput;
