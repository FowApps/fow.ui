import React, { forwardRef, RefObject, useState } from 'react';
import { withTheme } from 'styled-components';
import { AsyncPaginate } from 'react-select-async-paginate';

import { BaseSelectProps } from './StaticSelect';
import Loader from '../Loader';

import { renderControlStyles, themeColors } from './styles';

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
        formatOptionLabel,
        hasValidationError,
        initialPage = 0,
        theme,
        ...rest
    }: AsyncPaginateSelectProps,
    ref: RefObject<any>,
): JSX.Element => {
    const [options, setOptions] = useState<any[]>([]);

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
        <AsyncPaginate
            {...rest}
            ref={ref}
            theme={(defaultTheme) => ({
                ...defaultTheme,
                borderRadius: 8,
                colors: {
                    ...defaultTheme.colors,
                    ...themeColors(theme),
                },
            })}
            styles={{
                control: (styles, { isFocused }) => ({
                    ...styles,
                    ...{
                        ...renderControlStyles(
                            isFocused,
                            !!hasValidationError,
                            theme,
                        ),
                    },
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
            formatOptionLabel={formatOptionLabel}
            loadOptions={paginatedLoadedOptions}
            getOptionValue={(option) => option[valueKey]}
            getOptionLabel={(option) => option[labelKey]}
            isMulti={isMulti}
            isClearable={isClearable}
            isDisabled={isDisabled}
            isSearchable={isSearchable}
            placeholder={placeholder}
            closeMenuOnSelect={closeMenuOnSelect}
            components={{ LoadingMessage }}
            additional={{
                page: initialPage,
            }}
        />
    );
};

export default withTheme(forwardRef(AsyncPaginateSelect));
