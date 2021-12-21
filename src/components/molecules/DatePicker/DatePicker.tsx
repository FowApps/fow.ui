import React, { useContext } from 'react';
import moment, { Moment } from 'moment';
import Picker from 'rc-picker';
import momentGenerateConfig from 'rc-picker/es/generate/moment';
import 'rc-picker/assets/index.css';
import en_US from 'rc-picker/lib/locale/en_US';
import tr_TR from 'rc-picker/lib/locale/tr_TR';
import { DatePickerWrapper, TimePickerStyles } from './styles';
import { ConfigContext } from '../../../theme/FowThemeProvider';
import { theme } from '../../../theme/theme';
import { Icon } from '../../..';

export interface DatePickerProps {
    /**
     * type of picker
     */
    picker: 'time' | 'date' | 'week' | 'month' | 'quarter' | 'year';
    /**
     * today button visibility
     */
    today?: boolean;
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
    onChange?: (date) => void;
}

const DatePicker = ({
    picker = 'date',
    today,
    showTime,
    use12Hours,
    disableOptions,
    onChange,
    dateFormat,
}: DatePickerProps): JSX.Element => {
    const { language } = useContext(ConfigContext);
    const { timezone } = useContext(ConfigContext);

    const handleChange = (val) => {
        const dateObj = moment(new Date(val))
            .utcOffset(timezone)
            .format(dateFormat);
        onChange?.(dateObj);
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
                        color={theme?.fow.colors.greyLight.darker}
                    />
                }
                showToday={today}
                placeholder={`Select ${picker}`}
                showTime={showTime}
                use12Hours={use12Hours}
                locale={language === 'tr' ? tr_TR : en_US}
                allowClear
            />
        </DatePickerWrapper>
    );
};
export default DatePicker;
