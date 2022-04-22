/* eslint-disable no-nested-ternary */
import React, {
    ChangeEvent,
    UIEventHandler,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react';
import Lottie from 'react-lottie';
import useElementSize from '../../../hooks/useElementSize';
import debounce from '../../../utils/debounce';
import Dropdown from '../../molecules/Dropdown';
import Badge from '../Badge';
import Input from '../Input';
import Radio from '../Radio';
import {
    BadgeHolder,
    EmptyWrapper,
    InputWrapper,
    OptionsWrapper,
    SearchWrapper,
    Surface,
} from './styles';
import { empty } from '../../../assets/lotties/empty';
import Loader from '../Loader';
import Body from '../Typography/Body';
import Space from '../Space';
import Checkbox from '../Checkbox';
import Tooltip from '../Tooltip';

type OptionType = {
    value: any;
    label: string;
    disabled?: boolean;
    hidden?: boolean;
};

export interface SelectProps {
    width?: number;
    height?: number;
    options: OptionType[];
    closeAfterSelect?: boolean;
    placeholder?: string;
    allowClear?: boolean;
    onChange?: (value: any | any[], option?: OptionType | OptionType[]) => void;
    value?: any | any[];
    labelKey?: string;
    valueKey?: string;
    disabled?: boolean;
    allowSearch?: boolean;
    defaultValue?: any;
    onSearch?: (query: string) => void;
    notFoundText?: string;
    notFoundContent?: React.ReactNode;
    isLoading?: boolean;
    loadingText?: string;
    mode?: 'single' | 'multiple' | 'combobox';
    onScroll?: UIEventHandler<HTMLDivElement>;
    hasValidationError?: boolean;
}

const Select = (props: React.PropsWithChildren<SelectProps>): JSX.Element => {
    const {
        width,
        height = 280,
        closeAfterSelect = false,
        placeholder,
        allowClear = true,
        labelKey = 'label',
        valueKey = 'value',
        options = [],
        onChange,
        value,
        defaultValue,
        disabled = false,
        allowSearch = true,
        onSearch,
        notFoundText = 'There were no results.',
        notFoundContent,
        isLoading = false,
        loadingText = 'Loading',
        mode = 'single',
        onScroll,
        hasValidationError,
    } = props;

    const isControlled = 'value' in props;
    const isSingle = mode === 'single';

    const searchInputRef = useRef<HTMLInputElement>(null);
    const radioGroupRef = useRef<HTMLDivElement>(null);
    const [ref, { width: elementWidth }] = useElementSize();

    const [internalSearchQuery, setInternalSearchQuery] = useState('');
    const [externalSearchQuery, setExternalSearchQuery] = useState('');

    const [internalValue, setInternalValue] = useState(value || defaultValue);
    const [selected, setSelected] = useState<any | any[]>();
    const [selecteds, setSelecteds] = useState<any[]>([]);

    const handleChangeRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value: targetValue } = e.target;
        const option = options.find(
            (opt) => opt.value.toString() === targetValue,
        );
        // TODO: When value is number, e.target.value return string. Fix it.
        onChange?.(targetValue, option);
        setInternalValue(targetValue);
        if (!isControlled) {
            setSelected(option);
        }
    };

    const handleChangeCheckbox = (
        e: ChangeEvent<HTMLInputElement>,
        option: any,
    ) => {
        const val = e.target.value;
        // TODO: When value is number, e.target.value return string. Fix it.
        setInternalValue((currValues: any[] = []) => {
            let values: any[];
            if (currValues?.indexOf(val) === -1) {
                values = [val, ...currValues];
                if (!isControlled) {
                    setSelected(option);
                    setSelecteds((currSelecteds = []) => [
                        ...currSelecteds,
                        option,
                    ]);
                }
            } else {
                values = currValues.filter((currVal) => currVal !== val);
                if (!isControlled) {
                    setSelecteds((currSelecteds) => {
                        const filtered = currSelecteds?.filter(
                            (currSelected) => currSelected.value !== val,
                        );
                        setSelected(filtered[filtered.length - 1]);
                        return filtered;
                    });
                }
            }

            if (values.length === 0) {
                setSelected('');
            }

            onChange?.(values);
            return values;
        });
    };

    useEffect(() => {
        if (isControlled) {
            setInternalValue(value);
        }
        if (value || defaultValue) {
            if (isSingle) {
                const option = options.find(
                    (opt) => opt.value.toString() === value || defaultValue,
                );
                setSelected(option);
            } else {
                const lastItemValue = value?.[0] || defaultValue?.[0];
                const lastOption = options.find(
                    (opt) => lastItemValue === opt.value,
                );
                const selectedOptions = options.filter((opt) =>
                    (value || defaultValue || []).some(
                        (v: any) => opt.value === v,
                    ),
                );

                setSelected(lastOption);
                setSelecteds(selectedOptions);
            }
        }

        if (!value && isControlled) {
            setSelected(undefined);
            setSelecteds([]);
        }
    }, [defaultValue, isControlled, isSingle, options, value]);

    const handleSearch = debounce(
        (query: string) => {
            if (onSearch) {
                onSearch?.(query);
                setExternalSearchQuery(query);
            } else {
                setInternalSearchQuery(query);
            }
        },
        onSearch ? 750 : 0,
    );

    const searchResultLength = options
        .filter((option) => !option.hidden)
        .filter((option) =>
            option.label
                ?.toLocaleLowerCase()
                ?.includes(internalSearchQuery?.toLocaleLowerCase()),
        ).length;

    const renderEmptyOrNotFoundState = () => {
        if (options.length === 0 || searchResultLength === 0) {
            return (
                <EmptyWrapper>
                    {notFoundContent || (
                        <Space
                            direction="vertical"
                            size="none"
                            align="center"
                            justify="center"
                            inline={false}>
                            <Lottie
                                width={183}
                                options={{
                                    loop: true,
                                    autoplay: true,
                                    animationData: empty,
                                }}
                            />
                            <div
                                style={{
                                    marginTop: '-2rem',
                                    marginBottom: '2rem',
                                }}>
                                <Body>{notFoundText}</Body>
                            </div>
                        </Space>
                    )}
                </EmptyWrapper>
            );
        }
        return null;
    };

    const handleAfterVisibilityChange = useCallback((visible) => {
        if (visible) {
            setTimeout(() => {
                searchInputRef.current?.focus();
                const checkedEl =
                    radioGroupRef.current?.querySelector('[checked]');
                if (checkedEl) {
                    checkedEl.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center',
                    });
                }
            }, 250);
        }
    }, []);

    const content = useCallback(
        (close) =>
            !disabled && (
                <Surface
                    height={height}
                    onScroll={onScroll}
                    style={{ paddingTop: allowSearch ? 0 : '1.2rem' }}>
                    {allowSearch && (
                        <SearchWrapper>
                            <Input
                                ref={searchInputRef}
                                onChange={handleSearch}
                                value={
                                    externalSearchQuery || internalSearchQuery
                                }
                                prefixIcon="search"
                            />
                        </SearchWrapper>
                    )}
                    <OptionsWrapper allowSearch={allowSearch}>
                        {isLoading ? (
                            <Loader
                                isLoading={isLoading}
                                height={210}
                                text={loadingText}
                            />
                        ) : searchResultLength > 0 ? (
                            isSingle ? (
                                <Radio.Group
                                    ref={radioGroupRef}
                                    direction="vertical"
                                    defaultValue={value || internalValue}
                                    value={value || internalValue}
                                    onChange={(e) => {
                                        handleChangeRadio(e);
                                        if (closeAfterSelect) {
                                            close();
                                        }
                                    }}>
                                    {options
                                        .filter((option) => !option.hidden)
                                        .filter((option) =>
                                            option.label
                                                ?.toLocaleLowerCase()
                                                ?.includes(
                                                    internalSearchQuery?.toLocaleLowerCase(),
                                                ),
                                        )
                                        .map((option) => (
                                            <Radio
                                                fluid
                                                key={option[valueKey]}
                                                value={option[valueKey]}
                                                label={option[labelKey]}
                                                disabled={option.disabled}
                                            />
                                        ))}
                                </Radio.Group>
                            ) : (
                                <Space
                                    direction="vertical"
                                    size="xsmall"
                                    align="start"
                                    justify="flex-start">
                                    {options
                                        .filter((option) => !option.hidden)
                                        .filter((option) =>
                                            option.label
                                                ?.toLocaleLowerCase()
                                                ?.includes(
                                                    internalSearchQuery?.toLocaleLowerCase(),
                                                ),
                                        )
                                        .map((option) => (
                                            <Checkbox
                                                checked={
                                                    !!(
                                                        value?.indexOf(
                                                            option.value,
                                                        ) > -1 ||
                                                        internalValue?.indexOf(
                                                            option.value,
                                                        ) > -1
                                                    )
                                                }
                                                onChange={(e) => {
                                                    handleChangeCheckbox(
                                                        e,
                                                        option,
                                                    );
                                                }}
                                                key={option[valueKey]}
                                                value={option[valueKey]}
                                                label={option[labelKey]}
                                                disabled={option.disabled}
                                            />
                                        ))}
                                </Space>
                            )
                        ) : (
                            renderEmptyOrNotFoundState()
                        )}
                    </OptionsWrapper>
                </Surface>
            ),
        [
            value,
            internalValue,
            options,
            isLoading,
            externalSearchQuery,
            internalSearchQuery,
        ],
    );

    return (
        <Dropdown
            disabled={disabled}
            ref={ref}
            transitionDuration={50}
            onAfterVisibleChange={handleAfterVisibilityChange}
            content={(close) => content(close)}
            width={width || elementWidth}>
            {({ isOpen }) => (
                <InputWrapper>
                    <Input
                        hasValidationError={hasValidationError}
                        disabled={disabled || isLoading}
                        value={selected?.label || ''}
                        placeholder={placeholder}
                        readOnly
                        style={{ cursor: disabled ? 'not-allowed' : 'pointer' }}
                        suffixIcon={isOpen ? 'chevron-up' : 'chevron-down'}
                    />
                    <BadgeHolder size="xsmall">
                        {!isSingle && internalValue?.length > 1 && (
                            <Tooltip
                                placement="bottom"
                                overlay={
                                    <Space
                                        align="start"
                                        direction="vertical"
                                        size="xxsmall"
                                        style={{
                                            width: 150,
                                            maxHeight: 150,
                                            overflowY: 'auto',
                                        }}>
                                        {selecteds
                                            .filter(
                                                (s) =>
                                                    s.value !== selected.value,
                                            )
                                            .map((s) => (
                                                <Body
                                                    color="white"
                                                    lineClamp={1}>
                                                    {s.label}
                                                </Body>
                                            ))}
                                    </Space>
                                }>
                                <Badge
                                    text={`+${(
                                        internalValue?.length - 1
                                    ).toString()}`}
                                    variant="outlined"
                                    size="medium"
                                    color="primary"
                                />
                            </Tooltip>
                        )}
                        {allowClear &&
                            (value?.length > 0 || internalValue?.length > 0) &&
                            !disabled && (
                                <Badge
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        onChange?.(undefined);
                                        setInternalValue(undefined);
                                        setSelected(undefined);
                                        setSelecteds([]);
                                    }}
                                    text="x"
                                    variant="outlined"
                                    size="medium"
                                    color="primary"
                                    shape="circle"
                                />
                            )}
                    </BadgeHolder>
                </InputWrapper>
            )}
        </Dropdown>
    );
};

export default Select;
