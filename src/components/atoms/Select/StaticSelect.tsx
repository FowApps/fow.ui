import React from 'react';
import Select from 'react-select';
import { theme } from '../../../theme/theme';

export interface BaseSelectProps {
    placeholder?: string;
    isMulti?: boolean;
    isSearchable?: boolean;
    isDisabled?: boolean;
    isClearable?: boolean;
    closeMenuOnSelect?: boolean;
    valueKey?: string;
    labelKey?: string;
    options: any[];
    onChange?: (option: any) => void;
}

const StaticSelect = ({
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
    ...rest
}: BaseSelectProps): JSX.Element => {
    const handleChange = (option: any) => {
        if (typeof onChange === 'function') {
            onChange(option);
        }
    };
    return (
        <Select
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
                control: (styles, { isFocused }) => ({
                    ...styles,
                    transition: 'all 0.3s ease',
                    minHeight: '4rem',
                    borderRadius: 8,
                    fontSize: '16px',
                    lineHeight: '24px',
                    borderColor: isFocused
                        ? theme.fow.colors.primary.main
                        : styles.borderColor,
                    boxShadow: isFocused
                        ? `0 0 0 1px ${theme.fow.colors.primary.main}`
                        : styles.boxShadow,
                }),
            }}
            options={options}
            getOptionValue={(option) => option[valueKey]}
            getOptionLabel={(option) => option[labelKey]}
            onChange={handleChange}
            isMulti={isMulti}
            isClearable={isClearable}
            isDisabled={isDisabled}
            isSearchable={isSearchable}
            placeholder={placeholder}
            closeMenuOnSelect={closeMenuOnSelect}
            {...rest}
        />
    );
};

export default StaticSelect;
