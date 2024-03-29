import React from 'react';
import { Story, Meta } from '@storybook/react';
import DatePicker, { DatePickerProps } from './DatePicker';

export default {
    title: 'Molecules/DatePicker',
    component: DatePicker,
} as Meta;

const Template: Story<DatePickerProps> = (args) => (
    <div>
        <DatePicker {...args} />
    </div>
);

export const Default = Template.bind({});
Default.args = {
    picker: 'date',
    today: true,
    showTime: {
        showHour: true,
        showMinute: true,
        showSecond: false,
        format: 'HH:mm',
    },
    use12Hours: false,
    dateFormat: 'DD-MM-YYYY',
    disabled: false,
    minuteStep: 5,
};

export const Time = Template.bind({});
Time.args = {
    picker: 'time',
};

export const DisabledDays = Template.bind({});
DisabledDays.args = {
    picker: 'date',
    disableOptions: 'afterToday',
};
