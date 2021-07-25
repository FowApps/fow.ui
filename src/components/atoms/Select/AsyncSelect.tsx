/* eslint-disable no-return-await */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { forwardRef, RefObject, useState, useEffect } from 'react';
import Async from 'react-select/async';

import { BaseSelectProps } from './StaticSelect';
import Loader from '../Loader';
import Space from '../Space';
import Caption from '../Typography/Caption';

import debounce from '../../../utils/debounce';

import {
    renderControlStyles,
    themeColors,
    Wrapper,
    Label,
    ValidationMessage,
} from './styles';

export interface AsyncSelectProps extends BaseSelectProps {
    /**
     * cache option flag. look react-select docs for more info.
     */
    cacheOptions?: boolean;
    /**
     * default option flag. look react-select docs for more info.
     */
    defaultOptions?: boolean;
    /**
     * delay of async searching
     */
    debounceTime?: number;
    /**
     * load method for async logic
     */
    loadOptions(searchQuery?: string): any;
    /**
     * loading indicator text
     */
    loadingMessage?: string;
}

const AsyncSelect = (
    {
        placeholder,
        isMulti = false,
        isSearchable = false,
        isDisabled = false,
        isClearable = false,
        closeMenuOnSelect = true,
        valueKey = 'value',
        labelKey = 'label',
        cacheOptions = true,
        defaultOptions = true,
        debounceTime = 500,
        loadingMessage = 'Loading',
        loadOptions,
        onChange,
        error,
        label,
        required,
        value,
        ...rest
    }: AsyncSelectProps,
    ref: RefObject<any>,
): JSX.Element => {
    const [controlledValue, setControlledValue] = useState<any[] | any>();
    const [options, setOptions] = useState([]);
    const handleChange = (data: any) => {
        setControlledValue(data);
        let values = data[valueKey];
        if (Array.isArray(data) && isMulti) {
            values = data.map((option) => option[valueKey]);
        }
        if (typeof onChange === 'function') onChange(values);
    };

    const debouncedLoadOptions = debounce(async (inputValue) => {
        const loadedOptions = await loadOptions(inputValue);
        setOptions(loadedOptions);
        return loadedOptions;
    }, debounceTime);

    const LoadingMessage = (props: any) => (
        <div
            {...props.innerProps}
            style={props.getStyles('loadingMessage', props)}>
            <Loader isLoading height={150} text={loadingMessage} />
        </div>
    );

    useEffect(() => {
        if (options.length > 0) {
            if (Array.isArray(value) && isMulti) {
                const defaultMultipleValues = value.map((val) => {
                    const selecedValue = options.find(
                        (option) => option[valueKey] === val,
                    );
                    return selecedValue;
                });
                setControlledValue(defaultMultipleValues);
            } else {
                const defaultValue = options.find(
                    (option) => option[valueKey] === value,
                );
                setControlledValue(defaultValue);
            }
        }
    }, [options]);

    return (
        <Wrapper>
            {label && (
                <Space size="xxsmall">
                    {required && <Caption color="error">*</Caption>}
                    <Label>{label}</Label>
                </Space>
            )}
            <Async
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
                    menu: (styles) => ({
                        ...styles,
                        top: 'calc(100% - 2.4rem)',
                    }),
                }}
                options={options}
                cacheOptions={cacheOptions}
                defaultOptions={defaultOptions}
                loadOptions={async (inputValue) =>
                    await debouncedLoadOptions(inputValue)
                }
                getOptionValue={(option) => option[valueKey]}
                getOptionLabel={(option) => option[labelKey]}
                onChange={handleChange}
                isMulti={isMulti}
                isClearable={isClearable}
                isDisabled={isDisabled}
                isSearchable={isSearchable}
                placeholder={placeholder}
                closeMenuOnSelect={closeMenuOnSelect}
                components={{ LoadingMessage }}
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

export default forwardRef(AsyncSelect);
