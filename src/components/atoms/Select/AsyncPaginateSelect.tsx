import React from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';

import { BaseSelectProps } from './StaticSelect';
import Loader from '../Loader';

import { theme } from '../../../theme/theme';

type Additional = {
    page: number;
};

export interface AsyncPaginateSelectProps extends BaseSelectProps {
    cacheOptions?: boolean;
    defaultOptions?: boolean;
    debounceTime?: number;
    loadOptions(
        searchQuery: string,
        loadedOptions: any[],
        { page }: Additional,
    ): Promise<{
        options: any[];
        hasMore: boolean;
    }>;
    loadingMessage?: string;
}

const AsyncPaginateSelect = ({
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
}: AsyncPaginateSelectProps): JSX.Element => {
    const handleChange = (option: any) => {
        if (typeof onChange === 'function') {
            onChange(option);
        }
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
            debounceTimeout={debounceTime}
            cacheOptions={cacheOptions}
            defaultOptions={defaultOptions}
            loadOptions={loadOptions}
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
            additional={{
                page: 1,
            }}
            {...rest}
        />
    );
};

export default AsyncPaginateSelect;
