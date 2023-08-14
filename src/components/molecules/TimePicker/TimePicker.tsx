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

export interface TimePickerProps {
    /**
     * type of picker
     */
    picker?: 'time';
    /**
     * 12 hours preview
     */
    use12Hours?: boolean;
    /**
     * format of date
     */
    timeFormat?: string;
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
    placeholder?: string;
}

const TimePicker = ({
    picker = 'time',
    use12Hours,
    onChange,
    timeFormat = 'HH:mm:ss',
    value,
    disabled = false,
    placeholder,
}: TimePickerProps): JSX.Element => {
    const theme = useTheme();
    const { language, timezone } = useContext(ConfigContext);
    const [val, setVal] = useState<Moment>();

    const handleChange = (time: any) => {
        if (time) {
            const dateObj = moment(new Date(time))
                .utcOffset(timezone, true)
                .toISOString();
            onChange?.(moment(dateObj).format('HH:mm:ss'));
            setVal(time);
            console.log(moment(dateObj).format('HH:mm:ss'));
        } else {
            setVal(undefined);
            onChange?.(undefined);
        }
    };

    const config = {
        generateConfig: momentGenerateConfig,
        onChange: handleChange,
        dropdown: false,
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
                        icon={['far', 'clock']}
                        color={theme.fow.colors.greyLight.darker}
                    />
                }
                disabled={disabled}
                placeholder={placeholder}
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
                format={timeFormat}
                value={val ? moment(val) : null}
            />
        </DatePickerWrapper>
    );
};
export default TimePicker;
