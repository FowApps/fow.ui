import React from 'react';
import { Story, Meta } from '@storybook/react';
import Label, { LabelProps } from './Label';

export default {
    title: 'Atoms/Label',
    component: Label,
    argTypes: {
        color: {
            control: {
                type: 'select',
            },
            options: [
                'grey',
                'primary',
                'info',
                'success',
                'warning',
                'error',
                'pink',
                'orange',
                'green',
                'greenDark',
                'blue',
                'purple',
                'darkPurple',
            ],
        },
        variant: {
            control: {
                type: 'select',
            },
            options: ['outlined', 'filled', 'ghost'],
        },
        shape: {
            control: {
                type: 'select',
            },
            options: ['flat', 'rounded'],
        },
        size: {
            control: {
                type: 'select',
            },
            options: ['small', 'medium', 'large'],
        },
    },
} as Meta;

const Template: Story<LabelProps> = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
    variant: 'filled',
    size: 'medium',
    shape: 'rounded',
    color: 'grey',
    text: 'Lorem Ipsum Dolor',
};
