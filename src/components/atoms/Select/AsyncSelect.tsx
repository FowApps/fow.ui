/* eslint-disable no-return-await */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { forwardRef, RefObject, useState } from 'react';
import { withTheme } from 'styled-components';
import Async from 'react-select/async';

import { BaseSelectProps } from './StaticSelect';
import Loader from '../Loader';

import debounce from '../../../utils/debounce';

import { renderControlStyles, themeColors } from './styles';

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
        hasValidationError,
        theme,
        formatOptionLabel,
        ...rest
    }: AsyncSelectProps,
    ref: RefObject<any>,
): JSX.Element => {
    const [options, setOptions] = useState([]);

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

    return (
        <Async
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
                placeholder: (styles) => ({
                    ...styles,
                    color: theme.fow.colors.text.disabled,
                }),
            }}
            options={options}
            cacheOptions={cacheOptions}
            defaultOptions={defaultOptions}
            formatOptionLabel={formatOptionLabel}
            loadOptions={async (inputValue) =>
                await debouncedLoadOptions(inputValue)
            }
            getOptionValue={(option) => option[valueKey]}
            getOptionLabel={(option) => option[labelKey]}
            isMulti={isMulti}
            isClearable={isClearable}
            isDisabled={isDisabled}
            isSearchable={isSearchable}
            placeholder={placeholder}
            closeMenuOnSelect={closeMenuOnSelect}
            components={{ LoadingMessage }}
        />
    );
};

export default withTheme(forwardRef(AsyncSelect));
