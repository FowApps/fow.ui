import React, {
    forwardRef,
    LegacyRef,
    useContext,
    useEffect,
    useState,
} from 'react';
import { useTheme } from 'styled-components';
import moment, { Moment } from 'moment';
import RangePicker from 'rc-picker/es/RangePicker';
import momentGenerateConfig from 'rc-picker/es/generate/moment';
import 'rc-picker/assets/index.css';
import tr_TR from 'rc-picker/lib/locale/tr_TR';
import en_US from 'rc-picker/lib/locale/en_US';
import { SharedTimeProps } from 'rc-picker/es/panels/TimePanel';
import { DateRangePickerWrapper, TimePickerStyles } from './styles';
import { ConfigContext } from '../../../theme/FowThemeProvider';
import Icon from '../../atoms/Icon';
import Button from '../../atoms/Button';

const locales = {
    tr: { ...tr_TR, ok: 'Tamam' },
    en: en_US,
};

export interface RangePickerProps {
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
     * handle change dates
     */
    onChange?: (dates: [string, string] | undefined) => void;
    /**
     * format of date
     */
    dateFormat?: string;
    /**
     * type of input's seperator
     */
    seperator?: string;
    /**
     * value
     */
    value?: string;
    /**
     * disabled
     */
    disabled?: boolean;
    placeholder?: [string, string];
    name?: string;
    hasValidationError?: boolean;
}

const DateRangePicker = (
    {
        picker = 'date',
        showTime,
        use12Hours,
        onChange,
        dateFormat = 'DD/MM/YYYY HH:mm:ss',
        seperator,
        value,
        disabled = false,
        placeholder,
        name,
        hasValidationError = false,
    }: RangePickerProps,
    ref: LegacyRef<RangePicker<Moment>>,
): JSX.Element => {
    const theme = useTheme();
    const { language, timezone } = useContext(ConfigContext);
    const [val, setVal] = useState<Moment[]>();

    const handleChange = (values: any) => {
        if (values) {
            let startTime = moment(new Date(values[0]))
                .utcOffset(timezone, true)
                .toISOString();
            let endTime = moment(new Date(values[1]))
                .utcOffset(timezone, true)
                .toISOString();
            if (showTime) {
                if (!showTime.showHour) {
                    startTime = moment(new Date(values[0]))
                        .set({ hour: 0, minute: 0, second: 0, millisecond: 0 })
                        .utcOffset(timezone, true)
                        .toISOString();
                    endTime = moment(new Date(values[1]))
                        .set({ hour: 0, minute: 0, second: 0, millisecond: 0 })
                        .utcOffset(timezone, true)
                        .toISOString();
                } else if (!showTime.showMinute) {
                    startTime = moment(new Date(values[0]))
                        .set({ minute: 0, second: 0, millisecond: 0 })
                        .utcOffset(timezone, true)
                        .toISOString();
                    endTime = moment(new Date(values[1]))
                        .set({ minute: 0, second: 0, millisecond: 0 })
                        .utcOffset(timezone, true)
                        .toISOString();
                } else if (!showTime.showSecond) {
                    startTime = moment(new Date(values[0]))
                        .set({ second: 0, millisecond: 0 })
                        .utcOffset(timezone, true)
                        .toISOString();
                    endTime = moment(new Date(values[1]))
                        .set({ second: 0, millisecond: 0 })
                        .utcOffset(timezone, true)
                        .toISOString();
                }
            }
            onChange?.([startTime, endTime]);
            setVal(values);
        } else {
            setVal([]);
            onChange?.(undefined);
        }
    };

    useEffect(() => {
        if (value) {
            const momentStartDate = moment(new Date(value[0]));
            const momentEndDate = moment(new Date(value[1]));
            setVal([momentStartDate, momentEndDate]);
            return;
        }
        setVal(undefined);
    }, [value]);

    return (
        <DateRangePickerWrapper
            name={name}
            hasValidationError={hasValidationError}>
            <TimePickerStyles />
            <RangePicker<Moment>
                ref={ref}
                generateConfig={momentGenerateConfig}
                onChange={handleChange}
                picker={picker}
                showTime={showTime}
                disabled={disabled}
                placeholder={placeholder}
                use12Hours={use12Hours}
                className="fow-range-picker"
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
                separator={seperator || '-'}
                format={dateFormat}
                defaultValue={val ? [moment(val[0]), moment(val[1])] : null}
                value={val ? [moment(val[0]), moment(val[1])] : null}
            />
        </DateRangePickerWrapper>
    );
};
export default forwardRef(DateRangePicker);
