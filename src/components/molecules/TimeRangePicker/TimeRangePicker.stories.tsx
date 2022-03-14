import React from 'react';
import { Story, Meta } from '@storybook/react';
import TimeRangePicker, { RangePickerProps } from './TimeRangePicker';

export default {
    title: 'Molecules/TimeRangePicker',
    component: TimeRangePicker,
    argTypes: {
        picker: {
            control: {
                type: 'select',
            },
            options: ['time'],
        },
    },
} as Meta;

const Template: Story<RangePickerProps> = (args) => (
    <div>
        <TimeRangePicker {...args} />
    </div>
);

export const Default = Template.bind({});
Default.args = {
    showTime: true,
    use12Hours: false,
    dateFormat: 'DD-MM-YYYY',
    seperator: '-',
    disabled: false,
};
