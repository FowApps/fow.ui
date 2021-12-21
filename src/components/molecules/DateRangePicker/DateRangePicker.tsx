import React, { useContext } from 'react';
import moment, { Moment } from 'moment';
import RangePicker from 'rc-picker/es/RangePicker';
import momentGenerateConfig from 'rc-picker/es/generate/moment';
import 'rc-picker/assets/index.css';
import tr_TR from 'rc-picker/lib/locale/tr_TR';
import en_US from 'rc-picker/lib/locale/en_US';
import { DateRangePickerWrapper, TimePickerStyles } from './styles';
import { ConfigContext } from '../../../theme/FowThemeProvider';
import { theme } from '../../../theme/theme';
import { Icon } from '../../..';

export interface RangePickerProps {
    /**
     * type of picker
     */
    picker: 'time' | 'date' | 'week' | 'month' | 'quarter' | 'year';
    /**
     * times visibility
     */
    showTime: boolean;
    /**
     * 12 hours preview
     */
    use12Hours?: boolean;
    onChange?: (dates) => void;
    /**
     * format of date
     */
    dateFormat?: string;
    /**
     * type of input's seperator
     */
    seperator?: string;
}

const defaultStartValue = moment(new Date());
const defaultEndValue = moment(new Date());

const DateRangePicker = ({
    picker = 'date',
    showTime = true,
    use12Hours,
    onChange,
    dateFormat,
    seperator,
}: RangePickerProps): JSX.Element => {
    const { language } = useContext(ConfigContext);
    const { timezone } = useContext(ConfigContext);

    const handleChange = (newValue) => {
        const setStartTime = moment(new Date(newValue[0]))
            .utcOffset(timezone)
            .format(dateFormat);
        const setEndTime = moment(new Date(newValue[1]))
            .utcOffset(timezone)
            .format(dateFormat);
        onChange?.([setStartTime, setEndTime]);
    };

    return (
        <DateRangePickerWrapper>
            <TimePickerStyles />
            <RangePicker<Moment>
                generateConfig={momentGenerateConfig}
                onChange={handleChange}
                value={undefined}
                defaultValue={[defaultStartValue, defaultEndValue]}
                picker={picker}
                showTime={showTime}
                placeholder={[`Select ${picker}`, `Select ${picker}`]}
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
                locale={language === 'tr' ? tr_TR : en_US}
                allowClear
                separator={seperator || '-'}
            />
        </DateRangePickerWrapper>
    );
};
export default DateRangePicker;
