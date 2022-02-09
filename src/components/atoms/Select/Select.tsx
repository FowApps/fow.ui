/* eslint-disable no-constant-condition */
import React, { useCallback, useContext, useEffect, useState } from 'react';
import RcSelect, {
    Option as RcOption,
    OptGroup as RcOptGroup,
    SelectProps,
} from 'rc-select';

import Icon from '../Icon';
import Loader from '../Loader';

import { Wrapper, LoaderWrapper } from './styles';
import Space from '../Space';
import Subtitle from '../Typography/Subtitle';
import { ConfigContext } from '../../../theme/FowThemeProvider';

// language files
import { tr } from './locales/tr';
import { en } from './locales/en';

export interface Props extends SelectProps {
    loadOptions?: any;
    /**
     * size of select component
     */
    size?: 'medium' | 'large';
    /**
     * dependencies
     */
    dependencies?: any;
    hasValidationError?: boolean;
}

export type OptionType = {
    /**
     * assign the value to be displayed
     */
    value: string | number;
    /**
     * select text
     */
    text: string;
};

const localization = {
    tr,
    en,
};

const NotFoundContent = ({ title }) => (
    <Space direction="vertical" style={{ padding: 24 }}>
        <Icon color="#919EAB" size="3x" icon={['far', 'folder-open']} />
        <Subtitle color="disabled">{title}</Subtitle>
    </Space>
);

const Select = ({
    loadOptions,
    children,
    loading: initialLoading,
    notFoundContent,
    maxTagTextLength = 30,
    maxTagCount = 3,
    showArrow = true,
    size = 'medium',
    dependencies,
    hasValidationError,
    ...rest
}: Props) => {
    const { language } = useContext(ConfigContext);
    const [options, setOptions] = useState<OptionType[]>([]);
    const [loading, setLoading] = useState<boolean>(
        loadOptions ? true : !!initialLoading,
    );
    const [val, setVal] = useState(rest.value);

    const handleLoadOptions = useCallback(async () => {
        if (typeof loadOptions === 'function') {
            setLoading(true);
            const loadedOptions = await loadOptions();
            setOptions(loadedOptions);
            setLoading(false);
        }
    }, [loadOptions]);

    useEffect(() => {
        if (dependencies?.length > 0) {
            handleLoadOptions();
        }
    }, [dependencies, handleLoadOptions]);

    useEffect(() => {
        handleLoadOptions();
    }, [handleLoadOptions]);

    useEffect(() => {
        setVal(rest.value);
    }, [rest.value]);

    useEffect(() => {
        if (typeof loadOptions !== 'function') {
            setLoading(!!initialLoading);
        }
    }, [initialLoading, loadOptions]);

    const renderOptions = () => {
        if (typeof loadOptions === 'function') {
            return options.map((option) => (
                <Select.Option value={option.value} key={option.value}>
                    {option.text}
                </Select.Option>
            ));
        }
        return children;
    };

    const handleChange = useCallback((value, option) => {
        setVal(value);
        rest?.onChange?.(value, option);
    }, []);

    return (
        <Wrapper
            title={rest.value?.toString()}
            size={size}
            hasValidationError={hasValidationError}>
            <RcSelect
                virtual={false}
                notFoundContent={
                    loading ? (
                        <Loader
                            height={150}
                            isLoading
                            text={localization[language].loading}
                        />
                    ) : (
                        notFoundContent || (
                            <NotFoundContent
                                title={localization[language].noData}
                            />
                        )
                    )
                }
                showArrow={showArrow}
                loading={loading}
                maxTagCount={maxTagCount}
                maxTagTextLength={maxTagTextLength}
                menuItemSelectedIcon={<Icon icon="check" />}
                clearIcon={<Icon icon="times-circle" />}
                removeIcon={
                    <Icon icon="times-circle" size="xs" cursor="pointer" />
                }
                inputIcon={({ open }) =>
                    loading ? (
                        <LoaderWrapper>
                            <Loader isLoading size="small" />
                        </LoaderWrapper>
                    ) : (
                        <Icon
                            style={{
                                transition: 'all 0.3s ease',
                                transform: open
                                    ? 'rotate(180deg)'
                                    : 'rotate(0)',
                            }}
                            icon="chevron-down"
                        />
                    )
                }
                {...rest}
                onChange={handleChange}
                value={options.length === 0 && !!loadOptions ? undefined : val}>
                {renderOptions()}
            </RcSelect>
        </Wrapper>
    );
};

const Option = RcOption;
const OptionGroup = RcOptGroup;

Select.Option = Option;
Select.OptionGroup = OptionGroup;

export default Select;
