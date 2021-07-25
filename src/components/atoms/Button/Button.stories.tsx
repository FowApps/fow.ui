import React from 'react';
import * as Icons from '@fortawesome/free-solid-svg-icons';
import { Story, Meta } from '@storybook/react';
import Button, { ButtonProps } from './Button';

const iconList = Object.keys(Icons)
    .filter((key) => key !== 'fas' && key !== 'prefix')
    .map((icon) => Icons[icon]);

export default {
    title: 'Atoms/Button',
    component: Button,
    argTypes: {
        variant: {
            control: {
                type: 'select',
            },
            options: ['text', 'outlined', 'contained'],
        },
        size: {
            control: {
                type: 'select',
            },
            options: ['large', 'medium', 'small'],
        },
        color: {
            control: {
                type: 'select',
            },
            options: ['primary', 'warning', 'success', 'error', 'info', 'grey'],
        },
        fluid: {
            control: 'boolean',
        },
        fab: {
            control: 'boolean',
        },
        loading: {
            control: 'boolean',
        },
        disabled: {
            control: 'boolean',
        },
        leftIcon: {
            control: {
                type: 'select',
            },
            options: iconList.map((icon) => icon.iconName),
        },
        rightIcon: {
            control: {
                type: 'select',
            },
            options: iconList.map((icon) => icon.iconName),
        },
    },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
    variant: 'contained',
    size: 'medium',
    color: 'primary',
    children: 'Submit',
};
