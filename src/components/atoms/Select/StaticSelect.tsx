/* eslint-disable react-hooks/exhaustive-deps */
import React, { forwardRef, RefObject, useState, useEffect } from 'react';
import Select from 'react-select';
import Space from '../Space';
import Caption from '../Typography/Caption';

import {
    renderControlStyles,
    themeColors,
    Wrapper,
    Label,
    ValidationMessage,
} from './styles';

export interface BaseSelectProps {
    /**
     * placeholder text
     */
    placeholder?: string;
    /**
     *multiple tag select flag
     */
    isMulti?: boolean;
    /**
     * searchable flag
     */
    isSearchable?: boolean;
    /**
     * disable flag
     */
    isDisabled?: boolean;
    /**
     * show clear icon flag
     */
    isClearable?: boolean;
    /**
     * close menu after selection flag
     */
    closeMenuOnSelect?: boolean;
    /**
     * value key of given options
     */
    valueKey?: string;
    /**
     * label key of given options
     */
    labelKey?: string;
    /**
     * options of select
     */
    options?: any[];
    /**
     * fire after change option
     */
    onChange?: (option: any) => void;
    /**
     * for form api
     */
    error?: any;
    /**
     * label for form field
     */
    label?: string;
    /**
     * required flag form field
     */
    required?: boolean;
    /**
     * value of select for form api
     */
    value?: boolean;
}

const StaticSelect = (
    {
        placeholder,
        isMulti = false,
        isSearchable = false,
        isDisabled = false,
        isClearable = false,
        closeMenuOnSelect = true,
        valueKey = 'value',
        labelKey = 'label',
        options,
        onChange,
        error,
        label,
        required,
        value,
        ...rest
    }: BaseSelectProps,
    ref: RefObject<any>,
): JSX.Element => {
    const [controlledValue, setControlledValue] = useState<any[] | any>();
    const handleChange = (data: any) => {
        setControlledValue(data);
        let values = data?.[valueKey] || null;
        if (Array.isArray(data) && isMulti) {
            values = data.map((option) => option[valueKey]);
        }
        if (typeof onChange === 'function') onChange(values);
    };

    useEffect(() => {
        if (Array.isArray(value) && isMulti) {
            const defaultMultipleValues = value.map((val) => {
                const selecedValue = options?.find(
                    (option) => option[valueKey] === val,
                );
                return selecedValue;
            });
            setControlledValue(defaultMultipleValues);
        } else {
            const defaultValue = options?.find(
                (option) => option[valueKey] === value,
            );
            setControlledValue(defaultValue);
        }
    }, []);

    return (
        <Wrapper>
            {label && (
                <Space size="xxsmall">
                    {required && <Caption color="error">*</Caption>}
                    <Label>{label}</Label>
                </Space>
            )}
            <Select
                {...rest}
                ref={ref}
                theme={(defaultTheme) => ({
                    ...defaultTheme,
                    borderRadius: 8,
                    colors: {
                        ...defaultTheme.colors,
                        ...themeColors,
                    },
                })}
                styles={{
                    control: (styles, { isFocused }) => ({
                        ...styles,
                        ...{ ...renderControlStyles(isFocused, !!error) },
                    }),
                    option: (styles) => ({
                        ...styles,
                        whiteSpace: 'nowrap',
                        textOverflow: 'ellipsis',
                        overflow: 'hidden',
                    }),
                }}
                options={options}
                getOptionValue={(option) => option[valueKey]}
                getOptionLabel={(option) => option[labelKey]}
                isMulti={isMulti}
                isClearable={isClearable}
                isDisabled={isDisabled}
                isSearchable={isSearchable}
                placeholder={placeholder}
                closeMenuOnSelect={closeMenuOnSelect}
                onChange={handleChange}
                value={controlledValue}
            />
            {error && (
                <ValidationMessage color="error">
                    {error.message}
                </ValidationMessage>
            )}
        </Wrapper>
    );
};

export default forwardRef(StaticSelect);
