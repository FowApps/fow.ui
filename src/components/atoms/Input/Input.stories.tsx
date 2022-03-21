import React from 'react';
import { Story, Meta } from '@storybook/react';

import Input, { InputProps } from './Input';

export default {
    title: 'Atoms/Input',
    argTypes: {
        type: {
            control: {
                type: 'select',
            },
            options: ['text', 'password', 'email', 'number', 'tel', 'url'],
        },
    },
    component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
    name: 'firstName',
    placeholder: 'First Name',
    label: 'First Name',
    prefixIcon: 'paper-plane',
    suffixIcon: 'paper-plane',
};

export const WithIcon = Template.bind({});
WithIcon.args = {};
