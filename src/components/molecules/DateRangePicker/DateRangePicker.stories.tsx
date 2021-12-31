import React from 'react';
import { Story, Meta } from '@storybook/react';
import DateRangePicker, { RangePickerProps } from './DateRangePicker';

export default {
    title: 'Molecules/DateRangePicker',
    component: DateRangePicker,
    argTypes: {
        picker: {
            control: {
                type: 'select',
            },
            options: ['time', 'date', 'week', 'month', 'quarter', 'year'],
        },
    },
} as Meta;

const Template: Story<RangePickerProps> = (args) => (
    <div>
        <DateRangePicker {...args} />
    </div>
);

export const Default = Template.bind({});
Default.args = {
    showTime: true,
    use12Hours: false,
    dateFormat: 'DD-MM-YYYY',
    seperator: '-',
};
