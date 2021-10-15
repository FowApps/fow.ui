/* eslint-disable react-hooks/exhaustive-deps */
import React, { forwardRef, RefObject } from 'react';
import { DefaultTheme, withTheme } from 'styled-components';
import Select from 'react-select';

import { renderControlStyles, themeColors, Wrapper } from './styles';

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
    hasValidationError?: boolean;
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
    /**
     * format method for labels
     */
    formatOptionLabel?: (option) => React.ReactNode;
    theme: DefaultTheme;
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
        hasValidationError,
        theme,
        formatOptionLabel,
        ...rest
    }: BaseSelectProps,
    ref: RefObject<any>,
): JSX.Element => (
    <Wrapper>
        <Select
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
            formatOptionLabel={formatOptionLabel}
            getOptionValue={(option) => option[valueKey]}
            getOptionLabel={(option) => option[labelKey]}
            isMulti={isMulti}
            isClearable={isClearable}
            isDisabled={isDisabled}
            isSearchable={isSearchable}
            placeholder={placeholder}
            closeMenuOnSelect={closeMenuOnSelect}
        />
    </Wrapper>
);

export default withTheme(forwardRef(StaticSelect));
