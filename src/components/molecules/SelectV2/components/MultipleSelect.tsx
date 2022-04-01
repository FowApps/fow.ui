import React, { useEffect, useMemo, useState } from 'react';
import { Space, Loader, Checkbox } from '../../../..';

import Body from '../../../atoms/Typography/Body';
import Subtitle from '../../../atoms/Typography/Subtitle';

import { OptionsWrapper } from '../styles';

import { tr } from '../locales/tr';
import { en } from '../locales/en';

import Link from '../../../atoms/Typography/Link';
import NotFoundContent from './NotFoundContent';

const localization = {
    tr,
    en,
};

type StateProps = {
    text: string;
    value: string | number;
};

const MultipleSelect = ({
    language,
    searchText,
    options,
    loader,
    onChange,
    clearAllButtonRef,
    disabled,
    showSearch,
    noResultContent,
    setSearchText,
    isInitialVal,
    onScroll,
    selectValues,
    formValues,
    onSearch,
    setIsInitialVal,
    setFormValues,
}: any) => {
    const [otherOptions, setOtherOptions] = useState<any>([]);
    const isArrayFormVal = Array.isArray(formValues) && formValues.length > 0;

    const handleClearAllSelected = () => {
        setSearchText('');
        setFormValues([]);
        onChange?.(undefined, undefined);
        onSearch?.();
    };

    const handleChange = (item: StateProps) => {
        setIsInitialVal(true);
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
        if (typeof selectValues !== 'object' || !isInitialVal) return;
        if (!selectValues || selectValues?.length === formValues?.length)
            return;

        const missingElements: any = [];

        if (
            Array.isArray(formValues) &&
            formValues.length > 0 &&
            Array.isArray(selectValues)
        ) {
            selectValues.forEach((val) => {
                const optionValue = val?.value || val;
                if (optionValue === undefined) return;
                const isContain = formValues.some(
                    (i) => i?.value === optionValue,
                );
                if (!isContain) {
                    options.forEach((item) => {
                        if (item.value === optionValue) {
                            missingElements.push(item);
                        }
                    });
                }
            });
        } else if (Array.isArray(selectValues)) {
            selectValues.forEach((val) => {
                const optionValue = val?.value || val;
                options.forEach((item) => {
                    if (item.value === optionValue) {
                        missingElements.push(item);
                    }
                });
            });
        } else if (
            typeof selectValues === 'string' ||
            typeof selectValues === 'number'
        ) {
            missingElements.push(
                options.filter((i) => i?.value === selectValues),
            );
        }
        if (missingElements.length > 0) {
            missingElements.forEach((item) => {
                handleChange(item);
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectValues]);

    useEffect(() => {
        if (Array.isArray(options)) {
            return setOtherOptions(
                options.filter(
                    ({ value: id1 }) =>
                        Array.isArray(formValues) &&
                        !formValues.some((item) => item?.value === id1),
                ),
            );
        }
        return setOtherOptions(options);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formValues, options]);

    useEffect(() => {
        if (
            clearAllButtonRef &&
            Array.isArray(formValues) &&
            formValues.length > 0
        ) {
            clearAllButtonRef.current?.addEventListener('click', () => {
                setFormValues([]);
                setSearchText('');
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [clearAllButtonRef, formValues]);

    const optionsSelectedInSearch = useMemo(
        () =>
            formValues.filter((item) =>
                item?.text?.toLowerCase().includes(searchText),
            ) || [],
        [formValues, searchText],
    );

    const optionsOtherInSearch = useMemo(
        () =>
            otherOptions?.filter((item) =>
                item?.text?.toString().toLowerCase().includes(searchText),
            ) || [],
        [otherOptions, searchText],
    );

    const NoContent = () =>
        noResultContent || (
            <NotFoundContent title={localization[language].noData} />
        );

    if (
        optionsOtherInSearch.length === 0 &&
        optionsSelectedInSearch.length === 0
    )
        return <NoContent />;

    return (
        <OptionsWrapper onScroll={onScroll}>
            {isArrayFormVal && (
                <Space
                    inline={false}
                    size="xsmall"
                    direction="vertical"
                    align="start">
                    <Space
                        inline={false}
                        justify="space-between"
                        style={{
                            marginTop: !showSearch ? 0 : '12px',
                        }}>
                        <Subtitle level={1}>
                            {localization[language].selectedItems}
                        </Subtitle>
                        <Space
                            onClick={() =>
                                !disabled && handleClearAllSelected()
                            }>
                            <Link color="error" level={3}>
                                {localization[language].clearAll}
                            </Link>
                        </Space>
                    </Space>
                    {optionsSelectedInSearch.length > 0 ? (
                        optionsSelectedInSearch.map((m) => (
                            <Space inline={false} size="small">
                                <Checkbox
                                    onChange={() => handleChange(m)}
                                    checked={formValues.some(
                                        (s) => s?.value === m?.value,
                                    )}
                                    value={m?.value}
                                    label={m?.text}
                                />
                            </Space>
                        ))
                    ) : (
                        <Body level={2} color="secondary">
                            {searchText} Not Found.
                        </Body>
                    )}
                </Space>
            )}
            {options ? (
                <Space
                    inline={false}
                    size="xsmall"
                    direction="vertical"
                    align="start"
                    style={{
                        marginTop: showSearch || isArrayFormVal ? '12px' : 0,
                    }}>
                    {isArrayFormVal && (
                        <Space>
                            <Subtitle level={1}>
                                {localization[language].otherItems}
                            </Subtitle>
                        </Space>
                    )}
                    {loader ? (
                        <Loader
                            height={150}
                            isLoading
                            text={localization[language].loading}
                        />
                    ) : (
                        <>
                            {optionsOtherInSearch.length ? (
                                <>
                                    {optionsOtherInSearch
                                        .filter(
                                            (item) =>
                                                item.text.trim().length > 0,
                                        )
                                        .map((m) => (
                                            <Space inline={false} size="small">
                                                <Checkbox
                                                    onChange={() =>
                                                        handleChange(m)
                                                    }
                                                    checked={
                                                        Array.isArray(
                                                            formValues,
                                                        ) &&
                                                        formValues?.some(
                                                            (s) =>
                                                                s?.value ===
                                                                m?.value,
                                                        )
                                                    }
                                                    value={m?.value}
                                                    label={m?.text}
                                                />
                                            </Space>
                                        ))}
                                </>
                            ) : (
                                <NoContent />
                            )}
                        </>
                    )}
                </Space>
            ) : (
                <NoContent />
            )}
        </OptionsWrapper>
    );
};

export default MultipleSelect;
