import React from 'react';
import { Story, Meta } from '@storybook/react';
import Alert, { AlertProps } from './Alert';

export default {
    title: 'Molecules/Alert',
    component: Alert,
} as Meta;

const Template: Story<AlertProps> = (args) => (
    <div>
        <Alert {...args} />
    </div>
);

export const Default = Template.bind({});
Default.args = {
    title: 'Alert Title',
    description: 'This is description of alert',
};
