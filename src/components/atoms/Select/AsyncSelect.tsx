import React from 'react';
import Async from 'react-select/async';

import { BaseSelectProps } from './StaticSelect';
import Loader from '../Loader';

import { theme } from '../../../theme/theme';
import debounce from '../../../utils/debounce';

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

const AsyncSelect = ({
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
    ...rest
}: AsyncSelectProps): JSX.Element => {
    const handleChange = (option: any) => {
        if (typeof onChange === 'function') {
            onChange(option);
        }
    };

    const debouncedLoadOptions = debounce(loadOptions, debounceTime);

    const LoadingMessage = (props: any) => (
        <div
            {...props.innerProps}
            style={props.getStyles('loadingMessage', props)}>
            <Loader isLoading height={150} text={loadingMessage} />
        </div>
    );

    return (
        <Async
            theme={(defaultTheme) => ({
                ...defaultTheme,
                borderRadius: 8,
                colors: {
                    ...defaultTheme.colors,
                    primary25: theme.fow.colors.primary.transparent12,
                    primary50: theme.fow.colors.primary.lighter,
                    primary75: theme.fow.colors.primary.light,
                    primary: theme.fow.colors.primary.main,
                    danger: theme.fow.colors.error.main,
                    dangerLight: theme.fow.colors.error.light,
                },
            })}
            styles={{
                control: (styles) => ({
                    ...styles,
                    transition: 'all 0.3s ease',
                    minHeight: '4rem',
                    borderRadius: 8,
                    fontSize: '16px',
                    lineHeight: '24px',
                }),
            }}
            cacheOptions={cacheOptions}
            defaultOptions={defaultOptions}
            loadOptions={debouncedLoadOptions}
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
            {...rest}
        />
    );
};

export default AsyncSelect;
