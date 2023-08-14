import React from 'react';
import { Story, Meta } from '@storybook/react';
import TimePicker, { TimePickerProps } from './TimePicker';

export default {
    title: 'Molecules/TimePicker',
    component: TimePicker,
} as Meta;

const Template: Story<TimePickerProps> = (args) => (
    <div>
        <TimePicker {...args} />
    </div>
);

export const Time = Template.bind({});
