import React, {
    forwardRef,
    LegacyRef,
    useContext,
    useEffect,
    useState,
} from 'react';
import { useTheme } from 'styled-components';
import moment, { Moment } from 'moment';
import Picker from 'rc-picker/es/Picker';
import momentGenerateConfig from 'rc-picker/es/generate/moment';
import 'rc-picker/assets/index.css';
import en_US from 'rc-picker/lib/locale/en_US';
import tr_TR from 'rc-picker/lib/locale/tr_TR';
import { SharedTimeProps } from 'rc-picker/es/panels/TimePanel';
import { DatePickerWrapper, TimePickerStyles } from './styles';
import { ConfigContext } from '../../../theme/FowThemeProvider';
import Icon from '../../atoms/Icon';
import Button from '../../atoms/Button';

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
    showTime?: SharedTimeProps<any>;
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
    /**
     * disabled
     */
    disabled?: boolean;
    /**
     * minute range step value
     */
    minuteStep?: number;
    placeholder?: string;
    name?: string;
    hasValidationError?: boolean;
    defaultValue?:
        | false
        | 'today'
        | 'oneWeekLater'
        | 'oneMonthLater'
        | 'oneYearLater';
    renderExtraFooter?: any;
}

const DatePicker = (
    {
        picker = 'date',
        showToday,
        showTime = {
            showHour: true,
            showMinute: true,
            showSecond: false,
            format: 'HH:mm',
        },
        use12Hours,
        disableOptions,
        onChange,
        dateFormat = 'DD/MM/YYYY HH:mm:ss',
        value,
        disabled = false,
        minuteStep = 1,
        placeholder,
        name,
        hasValidationError = false,
        defaultValue = 'today',
        renderExtraFooter,
    }: DatePickerProps,
    ref: LegacyRef<Picker<Moment>>,
): JSX.Element => {
    const theme = useTheme();
    const { language, timezone } = useContext(ConfigContext);
    const [val, setVal] = useState<Moment>();

    const handleChange = (date: any) => {
        if (date) {
            let dateObj = moment(new Date(date))
                .utcOffset(timezone, true)
                .toISOString();
            if (showTime) {
                if (!showTime.showHour) {
                    dateObj = moment(new Date(date))
                        .set({ hour: 0, minute: 0, second: 0, millisecond: 0 })
                        .utcOffset(timezone, true)
                        .toISOString();
                } else if (!showTime.showMinute) {
                    dateObj = moment(new Date(date))
                        .set({ minute: 0, second: 0, millisecond: 0 })
                        .utcOffset(timezone, true)
                        .toISOString();
                } else if (!showTime.showSecond) {
                    dateObj = moment(new Date(date))
                        .set({ second: 0, millisecond: 0 })
                        .utcOffset(timezone, true)
                        .toISOString();
                }
            }
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
            return;
        }
        setVal(undefined);
    }, [value]);

    useEffect(() => {
        if (!value) {
            // eslint-disable-next-line default-case
            switch (defaultValue) {
                case 'today':
                    handleChange(moment());
                    break;
                case 'oneWeekLater':
                    handleChange(moment().add(1, 'weeks'));
                    break;
                case 'oneMonthLater':
                    handleChange(moment().add(1, 'months'));
                    break;
                case 'oneYearLater':
                    handleChange(moment().add(1, 'years'));
                    break;
            }
        }
    }, []);

    return (
        <DatePickerWrapper name={name} hasValidationError={hasValidationError}>
            <TimePickerStyles />
            <Picker<Moment>
                {...config}
                ref={ref}
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
                disabled={disabled}
                placeholder={placeholder}
                showTime={showTime}
                use12Hours={use12Hours}
                locale={locales[language]}
                minuteStep={minuteStep}
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
                name={name}
                renderExtraFooter={renderExtraFooter}
            />
        </DatePickerWrapper>
    );
};
export default forwardRef(DatePicker);
