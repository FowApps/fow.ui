/* eslint-disable no-constant-condition */
import React, { useEffect, useState } from 'react';
import RcSelect, {
    Option as RcOption,
    OptGroup as RcOptGroup,
    SelectProps,
} from 'rc-select';

import Icon from '../Icon';
import Loader from '../Loader';

import { Wrapper, LoaderWrapper } from './styles';

export interface Props extends SelectProps {
    loadOptions?: any;
    size?: 'medium' | 'large';
    dependencies?: any;
}

export type OptionType = {
    value: string | number;
    text: string;
};

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
    ...rest
}: Props) => {
    const [options, setOptions] = useState<OptionType[]>([]);
    const [loading, setLoading] = useState<boolean>(
        loadOptions ? true : !!initialLoading,
    );
    const [val, setVal] = useState(rest.value);

    const handleLoadOptions = async () => {
        if (typeof loadOptions === 'function') {
            setLoading(true);
            const loadedOptions = await loadOptions();
            setOptions(loadedOptions);
            setLoading(false);
        }
    };

    useEffect(() => {
        handleLoadOptions();
    }, [dependencies]);

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

    const handleChange = (value, option) => {
        setVal(value);
        rest?.onChange?.(value, option);
    };

    return (
        <Wrapper title={rest.value?.toString()} size={size}>
            <RcSelect
                virtual={false}
                notFoundContent={
                    loading ? (
                        <Loader height={150} isLoading text="Loading" />
                    ) : (
                        notFoundContent
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
