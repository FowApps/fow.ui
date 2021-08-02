import React, { forwardRef, RefObject, useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';

import Space from '../Space';
import Caption from '../Typography/Caption';

import { BaseSelectProps } from './StaticSelect';
import Loader from '../Loader';

import {
    renderControlStyles,
    themeColors,
    Wrapper,
    Label,
    ValidationMessage,
} from './styles';

type Additional = {
    page: number;
};

export interface AsyncPaginateSelectProps extends BaseSelectProps {
    /**
     * start page number
     */
    initialPage: number;
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
    loadOptions(
        searchQuery: string,
        loadedOptions: any[],
        { page }: Additional,
    ): Promise<{
        options: any[];
        hasMore: boolean;
    }>;
    /**
     * loading indicator text
     */
    loadingMessage?: string;
}

const AsyncPaginateSelect = (
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
        initialPage = 0,
        ...rest
    }: AsyncPaginateSelectProps,
    ref: RefObject<any>,
): JSX.Element => {
    const [controlledValue, setControlledValue] = useState<any[] | any>();
    const [options, setOptions] = useState<any[]>([]);

    const handleChange = (data: any) => {
        setControlledValue(data);
        let values = data?.[valueKey] || null;
        if (Array.isArray(data) && isMulti) {
            values = data.map((option) => option[valueKey]);
        }
        if (typeof onChange === 'function') onChange(values);
    };

    const paginatedLoadedOptions = async (
        inputValue: string,
        loadedOptions: any[],
        { page }: Additional,
    ) => {
        const loadedOptionsResponse = await loadOptions(
            inputValue,
            loadedOptions,
            {
                page,
            },
        );
        setOptions(loadedOptionsResponse.options);
        return loadedOptionsResponse;
    };

    const LoadingMessage = (props: any) => (
        <div
            {...props.innerProps}
            style={props.getStyles('loadingMessage', props)}>
            <Loader isLoading height={150} text={loadingMessage} />
        </div>
    );

    return (
        <Wrapper>
            {label && (
                <Space size="xxsmall">
                    {required && <Caption color="error">*</Caption>}
                    <Label>{label}</Label>
                </Space>
            )}
            <AsyncPaginate
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
                debounceTimeout={debounceTime}
                cacheOptions={cacheOptions}
                defaultOptions={defaultOptions}
                loadOptions={paginatedLoadedOptions}
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
                additional={{
                    page: initialPage,
                }}
            />
            {error && (
                <ValidationMessage color="error">
                    {error.message}
                </ValidationMessage>
            )}
        </Wrapper>
    );
};

export default forwardRef(AsyncPaginateSelect);
