import React, { useEffect } from 'react';
import { Radio, Space } from '../../../..';

import { OptionsWrapper } from '../styles';

import { tr } from '../locales/tr';
import { en } from '../locales/en';
import NotFoundContent from './NotFoundContent';

const localization = {
    tr,
    en,
};

const SingleSelect = ({
    language,
    selectValues,
    searchText,
    options,
    onChange,
    clearAllButtonRef,
    showSearch,
    noResultContent,
    onScroll,
    isInitialVal,
    selectedItem,
    setSelectedItem,
}: any): JSX.Element => {
    const handleChange = (selectedOption) => {
        if (!selectedOption) return;

        if (typeof selectedOption === 'string') {
            options.forEach((option) => {
                if (option.value === selectedOption) {
                    setSelectedItem(option);
                    onChange?.(option.value, option);
                }
            });
        } else {
            onChange?.(selectedOption.value, selectedOption);
            setSelectedItem(selectedOption);
        }
    };

    useEffect(() => {
        if (!selectValues && !isInitialVal) return;
        handleChange(selectValues);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectValues]);

    useEffect(() => {
        if (clearAllButtonRef && selectedItem !== null) {
            clearAllButtonRef.current?.addEventListener('click', () => {
                setSelectedItem(null);
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [clearAllButtonRef, selectedItem]);

    const NoContent = () =>
        noResultContent || (
            <NotFoundContent title={localization[language].noData} />
        );

    return (
        <OptionsWrapper onScroll={onScroll}>
            {options?.length > 0 &&
            options.some((item) =>
                item?.text?.toString().toLowerCase().includes(searchText),
            ) ? (
                <Space
                    inline={false}
                    size="xsmall"
                    direction="vertical"
                    align="start"
                    style={{
                        marginTop: showSearch ? '12px' : 0,
                        padding: '0 8px',
                    }}>
                    {options
                        ?.filter((item) =>
                            item?.text
                                ?.toString()
                                .toLowerCase()
                                .includes(searchText),
                        )
                        .map((m) => (
                            <Space inline={false} size="small">
                                <Radio
                                    defaultChecked={
                                        selectValues?.value === m.value ||
                                        selectedItem?.value === m.value
                                    }
                                    onChange={() => {
                                        handleChange(m);
                                    }}
                                    value={m.value}
                                    label={m.text}
                                    name="radio"
                                />
                            </Space>
                        ))}
                </Space>
            ) : (
                <NoContent />
            )}
        </OptionsWrapper>
    );
};

export default SingleSelect;
