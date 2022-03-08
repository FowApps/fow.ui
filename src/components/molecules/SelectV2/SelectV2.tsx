import React, { useContext, useEffect, useState } from 'react';
import { Checkbox, Icon, Input, Badge, Radio, Space, Loader } from '../../..';
import { theme } from '../../../theme/theme';
import Body from '../../atoms/Typography/Body';
import Link from '../../atoms/Typography/Link';
import Subtitle from '../../atoms/Typography/Subtitle';
import {
    DropdownButtonContent,
    DropdownWrapper,
    DropdownButtonWrapper,
    DropdownContentWrapper,
    OptionsWrapper,
} from './styles';
import PlusOwl from '../../../assets/svg/PlusOwl';
import useStateRef from '../../../hooks/useStateRef';
import { ConfigContext } from '../../../theme/FowThemeProvider';

// language files
import { tr } from './locales/tr';
import { en } from './locales/en';

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

export interface Props {
    /**
     * placeholder text
     */
    placeholder?: string;
    /**
     * no items found content
     */
    noResultContent?: string;
    /**
     * data type must be like that: [{ value: '', text: '' }]
     */
    options?: OptionType[] | any;
    /**
     * dropdown input style
     */
    styleType?: 'light' | 'grey';
    /**
     * dropdown and button disabled
     */
    disabled?: boolean;
    /**
     * no items extra content
     */
    content?: React.ReactNode;
    /**
     * loading animations
     */
    loader?: boolean;
    /**
     * searchbox visible
     */
    showSearch?: boolean;
    /**
     * clear all component's val set to null when related html element ref is clicked
     */
    clearAllButtonRef?: React.MutableRefObject<HTMLElement>;
}

export interface SingleProps extends Props {
    /**
     * onchange event
     */
    onChange?: (value: OptionType | any, item: OptionType | any) => void;
}
export interface MultipleProps extends Props {
    /**
     * onchange event
     */
    onChange?: (value: OptionType[] | any, item: OptionType | any) => void;
    /**
     * option type checkbox and multiple, you can use this to set the <SelectV2.Multiple>
     */
    multiple?: boolean;
}

type StateProps = {
    text: string;
    value: string | number;
};

const NotFoundContent = ({ title }) => (
    <Space
        direction="vertical"
        align="center"
        justify="center"
        inline={false}
        style={{ padding: 24 }}>
        <Icon color="#919EAB" size="2x" icon={['far', 'folder-open']} />
        <Subtitle color="disabled">{title}</Subtitle>
    </Space>
);

const SelectV2 = ({
    options,
    placeholder,
    noResultContent,
    styleType = 'light',
    onChange,
    disabled,
    loader = false,
    showSearch = true,
    clearAllButtonRef,
    ...rest
}: SingleProps): JSX.Element => {
    const { language } = useContext(ConfigContext);
    const { value: initialVal }: any = rest;
    const [isInitialVal, setIsInitialVal] = useState(false);
    const [offsetWidth, ref] = useStateRef((node) => node?.offsetWidth || 0);
    const [wrapperWidth, setWrapperWidth] = useState<any>(offsetWidth);
    const [searchText, setSearchText] = useState('');
    const [selectedItem, setSelectedItem] = useState<OptionType | any>(
        initialVal || null,
    );
    const [choices, setChoices] = useState<OptionType[]>();
    const [loading, setLoading] = useState<boolean>(!options);

    useEffect(() => {
        setLoading(true);
        setChoices(options);
        setLoading(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [options, Array.isArray(options) && options.length, loader]);

    const handleClearSelect = () => {
        setSelectedItem(undefined);
        onChange?.(undefined, undefined);
    };
    useEffect(() => {
        setWrapperWidth(offsetWidth);
    }, [offsetWidth]);

    useEffect(() => {
        if (initialVal && !isInitialVal) {
            setSelectedItem(initialVal);
            setIsInitialVal(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [initialVal]);

    useEffect(() => {
        if (clearAllButtonRef && selectedItem !== null) {
            clearAllButtonRef.current?.addEventListener('click', () => {
                setSelectedItem(null);
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [clearAllButtonRef, selectedItem]);

    return (
        <>
            <DropdownWrapper
                ref={ref}
                disabled={disabled}
                width={wrapperWidth}
                trigger="click"
                onClose={() => setSearchText('')}
                content={() => (
                    <DropdownContentWrapper>
                        {choices && showSearch && (
                            <Input
                                disabled={loading}
                                suffixIcon="search"
                                placeholder="Search"
                                onChange={(value) =>
                                    setSearchText(value.toLowerCase())
                                }
                            />
                        )}
                        {loading ? (
                            <Loader
                                height={150}
                                isLoading
                                text={localization[language].loading}
                            />
                        ) : (
                            <OptionsWrapper>
                                {Array.isArray(choices) &&
                                choices.length > 0 ? (
                                    <Space
                                        inline={false}
                                        size="xsmall"
                                        direction="vertical"
                                        align="start"
                                        style={{
                                            marginTop: showSearch ? '12px' : 0,
                                            maxHeight: '250px',
                                            overflowY: 'auto',
                                            padding: '0 8px',
                                        }}>
                                        {choices?.some((item) =>
                                            item.text
                                                .toString()
                                                .toLowerCase()
                                                .includes(searchText),
                                        ) ? (
                                            <>
                                                {choices
                                                    ?.filter((item) =>
                                                        item.text
                                                            .toString()
                                                            .toLowerCase()
                                                            .includes(
                                                                searchText,
                                                            ),
                                                    )
                                                    .map((m) => (
                                                        <Space
                                                            inline={false}
                                                            size="small">
                                                            <Radio
                                                                defaultChecked={
                                                                    initialVal?.value ===
                                                                    m.value
                                                                }
                                                                onChange={() => {
                                                                    onChange?.(
                                                                        m.value,
                                                                        m,
                                                                    );
                                                                    setSelectedItem(
                                                                        m,
                                                                    );
                                                                }}
                                                                value={m.value}
                                                                label={m.text}
                                                                name="radio"
                                                            />
                                                        </Space>
                                                    ))}
                                            </>
                                        ) : (
                                            <>
                                                <Body
                                                    level={2}
                                                    color="secondary">
                                                    {searchText}{' '}
                                                    {noResultContent}.
                                                </Body>
                                            </>
                                        )}
                                    </Space>
                                ) : (
                                    <NotFoundContent
                                        title={localization[language].noData}
                                    />
                                )}
                            </OptionsWrapper>
                        )}
                    </DropdownContentWrapper>
                )}>
                {({ isOpen }) => (
                    <DropdownButtonWrapper
                        variant="text"
                        disabled={disabled}
                        styleType={styleType}
                        isOpen={isOpen}
                        className={isOpen ? 'opened' : ''}>
                        <DropdownButtonContent
                            justify="space-between"
                            inline={false}>
                            <Space justify="space-between" inline={false}>
                                <Body level={1} color="secondary">
                                    {selectedItem?.text || placeholder}
                                </Body>

                                {selectedItem && (
                                    <Space onClick={handleClearSelect}>
                                        <Link color="error" level={3}>
                                            {localization[language].clearAll}
                                        </Link>
                                    </Space>
                                )}
                            </Space>
                            <Icon
                                size="sm"
                                icon={!isOpen ? 'chevron-down' : 'chevron-up'}
                                color="#919EAB"
                            />
                        </DropdownButtonContent>
                    </DropdownButtonWrapper>
                )}
            </DropdownWrapper>
        </>
    );
};

const MultipleV2 = ({
    options,
    placeholder,
    styleType = 'light',
    onChange,
    clearAllButtonRef,
    content,
    disabled,
    noResultContent,
    loader: initialLoader,
    showSearch = true,
    ...rest
}: MultipleProps) => {
    const { language } = useContext(ConfigContext);
    const { value: initialVal }: any = rest;
    const [offsetWidth, ref] = useStateRef((node) => node?.offsetWidth || 0);
    const [loading, setLoading] = useState<boolean>(!options);
    const [isInitialVal, setIsInitialVal] = useState(false);
    const [wrapperWidth, setWrapperWidth] = useState<any>(offsetWidth);
    const [choices, setChoices] = useState<OptionType[]>();
    const [searchText, setSearchText] = useState('');
    const [formValues, setFormValues] = useState<StateProps | StateProps[]>(
        // eslint-disable-next-line no-nested-ternary
        initialVal !== undefined
            ? Array.isArray(initialVal)
                ? [...initialVal]
                : [initialVal]
            : [],
    );
    const [otherOptions, setOtherOptions] = useState<any>([]);
    useEffect(() => {
        setLoading(true);
        setChoices(options);
        setLoading(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [options, Array.isArray(options) && options.length]);

    const isArrayFormVal = Array.isArray(formValues) && formValues.length > 0;

    const handleClearAllSelected = () => {
        setFormValues([]);
        onChange?.(undefined, undefined);
    };

    const handleChange = (item: StateProps) => {
        if (
            formValues === undefined ||
            (Array.isArray(formValues) && formValues.length === 0)
        ) {
            setFormValues([item]);
            onChange?.([item?.value], [item]);
            return;
        }

        setFormValues((prevState: StateProps[]) => {
            const isContain = prevState.some((i) => i?.value === item?.value);
            if (isContain) {
                const list = prevState.filter((i) => i?.value !== item?.value);
                onChange?.(
                    list.map((m) => m?.value),
                    list,
                );
                return [...list];
            }
            onChange?.(
                [...prevState.map((m) => m?.value), item?.value],
                [...prevState, item],
            );
            return [...prevState, item];
        });
    };

    useEffect(() => {
        setChoices(options);
        setWrapperWidth(offsetWidth);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [offsetWidth]);

    useEffect(() => {
        if (initialVal && !isInitialVal) {
            setFormValues(initialVal);
            setIsInitialVal(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [initialVal]);

    useEffect(() => {
        if (Array.isArray(choices)) {
            return setOtherOptions(
                choices.filter(
                    ({ value: id1 }) =>
                        Array.isArray(formValues) &&
                        !formValues.some((item) => item?.value === id1),
                ),
            );
        }
        return setOtherOptions(choices);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formValues, choices]);

    useEffect(() => {
        if (
            clearAllButtonRef &&
            Array.isArray(formValues) &&
            formValues.length > 0
        ) {
            clearAllButtonRef.current?.addEventListener('click', () => {
                setFormValues([]);
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [clearAllButtonRef, formValues]);
    return (
        <>
            <DropdownWrapper
                ref={ref}
                width={wrapperWidth}
                trigger="click"
                onClose={() => setSearchText('')}
                disabled={disabled}
                content={() => (
                    <DropdownContentWrapper>
                        {choices && showSearch && (
                            <Input
                                suffixIcon="search"
                                disabled={initialLoader}
                                placeholder={localization[language].search}
                                onChange={(value) =>
                                    setSearchText(value.toLowerCase())
                                }
                            />
                        )}
                        {loading ? (
                            <Loader
                                height={150}
                                isLoading
                                text={localization[language].loading}
                            />
                        ) : (
                            <OptionsWrapper>
                                <Space
                                    inline={false}
                                    size="xsmall"
                                    direction="vertical"
                                    align="start"
                                    style={{
                                        marginTop:
                                            showSearch &&
                                            Array.isArray(formValues) &&
                                            formValues?.length > 0
                                                ? '12px'
                                                : 0,
                                    }}>
                                    {isArrayFormVal && (
                                        <Space
                                            inline={false}
                                            justify="space-between">
                                            <Subtitle level={1}>
                                                {
                                                    localization[language]
                                                        .selectedItems
                                                }
                                            </Subtitle>
                                            <Space
                                                onClick={
                                                    handleClearAllSelected
                                                }>
                                                <Link color="error" level={3}>
                                                    {
                                                        localization[language]
                                                            .clearAll
                                                    }
                                                </Link>
                                            </Space>
                                        </Space>
                                    )}
                                    {isArrayFormVal && (
                                        <>
                                            {formValues.some((item) =>
                                                item?.text
                                                    .toString()
                                                    .toLowerCase()
                                                    .includes(searchText),
                                            ) ? (
                                                <>
                                                    {formValues
                                                        .filter((item) =>
                                                            String(item?.text)
                                                                .toLowerCase()
                                                                .includes(
                                                                    searchText,
                                                                ),
                                                        )
                                                        ?.map((m) => (
                                                            <Space
                                                                inline={false}
                                                                size="small">
                                                                <Checkbox
                                                                    onChange={() =>
                                                                        handleChange(
                                                                            m,
                                                                        )
                                                                    }
                                                                    checked={
                                                                        Array.isArray(
                                                                            formValues,
                                                                        ) &&
                                                                        formValues?.some(
                                                                            (
                                                                                s,
                                                                            ) =>
                                                                                s?.value ===
                                                                                m?.value,
                                                                        )
                                                                    }
                                                                    value={
                                                                        m?.value
                                                                    }
                                                                    label={
                                                                        m?.text
                                                                    }
                                                                />
                                                            </Space>
                                                        ))}
                                                </>
                                            ) : (
                                                <>
                                                    <Body
                                                        level={2}
                                                        color="secondary">
                                                        {searchText}{' '}
                                                        {noResultContent}.
                                                    </Body>
                                                </>
                                            )}
                                        </>
                                    )}
                                </Space>
                                {initialLoader ? (
                                    <Loader
                                        height={150}
                                        isLoading
                                        text={localization[language].loading}
                                    />
                                ) : (
                                    <>
                                        {choices ? (
                                            <>
                                                <Space
                                                    inline={false}
                                                    size="xsmall"
                                                    direction="vertical"
                                                    align="start"
                                                    style={{
                                                        marginTop: showSearch
                                                            ? '12px'
                                                            : 0,
                                                    }}>
                                                    {choices?.length > 0 && (
                                                        <>
                                                            {Array.isArray(
                                                                formValues,
                                                            ) &&
                                                                formValues.length >
                                                                    0 &&
                                                                formValues.length !==
                                                                    choices.length && (
                                                                    <>
                                                                        <Space
                                                                            style={{
                                                                                marginTop:
                                                                                    !showSearch &&
                                                                                    isArrayFormVal
                                                                                        ? '12px'
                                                                                        : 0,
                                                                            }}>
                                                                            <Subtitle
                                                                                level={
                                                                                    1
                                                                                }>
                                                                                {
                                                                                    localization[
                                                                                        language
                                                                                    ]
                                                                                        .otherItems
                                                                                }
                                                                            </Subtitle>
                                                                        </Space>
                                                                    </>
                                                                )}
                                                        </>
                                                    )}
                                                    {otherOptions?.some(
                                                        (item) =>
                                                            item?.text
                                                                .toString()
                                                                .toLowerCase()
                                                                .includes(
                                                                    searchText,
                                                                ),
                                                    ) ||
                                                    otherOptions?.length < 1 ? (
                                                        <>
                                                            {otherOptions
                                                                ?.filter(
                                                                    (item) =>
                                                                        item?.text
                                                                            .toString()
                                                                            .toLowerCase()
                                                                            .includes(
                                                                                searchText,
                                                                            ),
                                                                )
                                                                .map((m) => (
                                                                    <Space
                                                                        inline={
                                                                            false
                                                                        }
                                                                        size="small">
                                                                        <Checkbox
                                                                            onChange={() =>
                                                                                handleChange(
                                                                                    m,
                                                                                )
                                                                            }
                                                                            checked={
                                                                                Array.isArray(
                                                                                    formValues,
                                                                                ) &&
                                                                                formValues?.some(
                                                                                    (
                                                                                        s,
                                                                                    ) =>
                                                                                        s?.value ===
                                                                                        m?.value,
                                                                                )
                                                                            }
                                                                            value={
                                                                                m?.value
                                                                            }
                                                                            label={
                                                                                m?.text
                                                                            }
                                                                        />
                                                                    </Space>
                                                                ))}
                                                        </>
                                                    ) : (
                                                        <Space
                                                            inline={false}
                                                            direction="vertical"
                                                            justify="center"
                                                            align="center"
                                                            size="none">
                                                            <PlusOwl
                                                                width={60}
                                                            />
                                                            <Body
                                                                level={2}
                                                                color="secondary">
                                                                {searchText}{' '}
                                                                {
                                                                    noResultContent
                                                                }
                                                                .
                                                            </Body>
                                                            {content && (
                                                                <>{content}</>
                                                            )}
                                                        </Space>
                                                    )}
                                                </Space>
                                            </>
                                        ) : (
                                            <NotFoundContent
                                                title={
                                                    localization[language]
                                                        .noData
                                                }
                                            />
                                        )}
                                    </>
                                )}
                            </OptionsWrapper>
                        )}
                    </DropdownContentWrapper>
                )}>
                {({ isOpen }) => (
                    <>
                        <DropdownButtonWrapper
                            variant="text"
                            disabled={disabled}
                            styleType={styleType}
                            isOpen={isOpen}
                            className={isOpen ? 'opened' : ''}>
                            <DropdownButtonContent
                                justify="space-between"
                                inline={false}>
                                <Space justify="space-between" inline={false}>
                                    <Body level={1} color="secondary">
                                        {isArrayFormVal
                                            ? formValues?.[0]?.text
                                            : placeholder}
                                    </Body>
                                    {isArrayFormVal &&
                                        formValues?.length > 1 && (
                                            <Badge
                                                size="medium"
                                                text={`+ ${
                                                    formValues.length - 1
                                                }`}
                                                variant="outlined"
                                                color="primary"
                                            />
                                        )}
                                </Space>
                                <Icon
                                    size="sm"
                                    icon={
                                        !isOpen ? 'chevron-down' : 'chevron-up'
                                    }
                                    color={theme.fow.colors.greyDark.lighter}
                                />
                            </DropdownButtonContent>
                        </DropdownButtonWrapper>
                    </>
                )}
            </DropdownWrapper>
        </>
    );
};

const SelectV2Multiple = React.forwardRef(MultipleV2);

SelectV2.Multiple = React.memo(SelectV2Multiple);

export default SelectV2;
