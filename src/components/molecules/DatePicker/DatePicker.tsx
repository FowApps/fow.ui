import React, { useContext, useEffect, useState } from 'react';
import { useTheme } from 'styled-components';
import moment, { Moment } from 'moment';
import Picker from 'rc-picker';
import momentGenerateConfig from 'rc-picker/es/generate/moment';
import 'rc-picker/assets/index.css';
import en_US from 'rc-picker/lib/locale/en_US';
import tr_TR from 'rc-picker/lib/locale/tr_TR';
import { DatePickerWrapper, TimePickerStyles } from './styles';
import { ConfigContext } from '../../../theme/FowThemeProvider';
import Icon from '../../atoms/Icon';
import { Button } from '../../..';

const locales = {
    tr: { ...tr_TR, ok: 'Tamam' },
    en: en_US,
};

export interface DatePickerProps {
    /**
     * type of picker
     */
    picker?: 'time' | 'date' | 'week' | 'month' | 'quarter' | 'year';
    /**
     * today button visibility
     */
    showToday?: boolean;
    /**
     * times visibility
     */
    showTime?: boolean;
    /**
     * 12 hours preview
     */
    use12Hours?: boolean;
    /**
     * deactivate by selected day
     */
    disableOptions?: 'beforeToday' | 'afterToday';
    /**
     * format of date
     */
    dateFormat?: string;
    /**
     * handle change date
     */
    onChange?: (date: string | undefined) => void;
    /**
     * value
     */
    value?: string;
    placeholder?: string;
}

const DatePicker = ({
    picker = 'date',
    showToday,
    showTime = true,
    use12Hours,
    disableOptions,
    onChange,
    dateFormat = 'DD/MM/YYYY HH:mm:ss',
    value,
    placeholder,
}: DatePickerProps): JSX.Element => {
    const theme = useTheme();
    const { language, timezone } = useContext(ConfigContext);
    const [val, setVal] = useState<Moment>();

    const handleChange = (date: any) => {
        if (date) {
            const dateObj = moment(new Date(date))
                .utcOffset(timezone, true)
                .toISOString();
            onChange?.(dateObj);
            setVal(date);
        } else {
            setVal(undefined);
            onChange?.(undefined);
        }
    };

    const disabledDateBeforeToday = (current: Moment) =>
        current <= moment().endOf('day');

    const disabledDateAfterToday = (current: Moment) =>
        current >= moment().endOf('day');

    const config = {
        generateConfig: momentGenerateConfig,
        onChange: handleChange,
        dropdown: false,
        ...(disableOptions === 'beforeToday' && {
            disabledDate: disabledDateBeforeToday,
        }),
        ...(disableOptions === 'afterToday' && {
            disabledDate: disabledDateAfterToday,
        }),
    };

    useEffect(() => {
        if (value) {
            const date = moment(new Date(value));
            setVal(date);
        }
    }, [value]);

    return (
        <DatePickerWrapper>
            <TimePickerStyles />
            <Picker<Moment>
                {...config}
                picker={picker}
                suffixIcon={
                    <Icon
                        size="lg"
                        icon={
                            picker === 'time'
                                ? ['far', 'clock']
                                : ['far', 'calendar-alt']
                        }
                        color={theme.fow.colors.greyLight.darker}
                    />
                }
                showToday={showToday}
                placeholder={placeholder}
                showTime={showTime}
                use12Hours={use12Hours}
                locale={locales[language]}
                allowClear
                clearIcon={
                    <Button
                        color="primary"
                        size="small"
                        variant="text"
                        onClick={() => setVal(undefined)}>
                        <Icon color="primary" icon="times" />
                    </Button>
                }
                format={dateFormat}
                value={val ? moment(val) : null}
            />
        </DatePickerWrapper>
    );
};
export default DatePicker;
