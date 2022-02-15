import React from 'react';
import { Story, Meta } from '@storybook/react';
import Alert, { AlertProps } from './Alert';

export default {
    title: 'Molecules/Alert',
    component: Alert,
    argTypes: {
        type: {
            control: {
                type: 'select',
            },
            options: ['info', 'success', 'error', 'warning'],
        },
    },
} as Meta;

const Template: Story<AlertProps> = (args) => (
    <div>
        <Alert {...args} />
    </div>
);

export const Default = Template.bind({});
Default.args = {
    type: 'info',
    title: 'Alert Title',
    description: 'This is description of alert',
    closable: false,
};
