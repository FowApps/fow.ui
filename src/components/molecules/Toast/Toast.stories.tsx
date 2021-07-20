import React from 'react';
import { Story, Meta } from '@storybook/react';

import Toast, { ToastProps } from './Toast';
import useToast from './useToast';

export default {
    title: 'Molecules/Toast',
    component: Toast,
    argTypes: {
        appearance: {
            control: {
                type: 'select',
            },
            options: ['default', 'success', 'info', 'warning', 'error'],
        },
        closable: {
            control: {
                type: 'boolean',
            },
        },
        duration: {
            control: {
                type: 'number',
            },
        },
    },
} as Meta;

const Template: Story<ToastProps> = (args) => <Toast {...args} />;
const UsageTemplate: Story = () => {
    const toast = useToast();
    const showToast = () => toast.add('Hello Fow!');
    return (
        <button type="button" onClick={showToast}>
            Show me a toast
        </button>
    );
};

export const Default = Template.bind({});
Default.args = {
    appearance: 'default',
    content: 'Toast message here',
    closable: true,
    duration: 2000,
};

export const Usage = UsageTemplate.bind({});
Usage.args = {};
