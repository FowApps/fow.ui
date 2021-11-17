import React from 'react';
import * as Icons from '@fortawesome/free-solid-svg-icons';
import { Story, Meta } from '@storybook/react';
import Label, { LabelProps } from './Label';

const iconList = Object.keys(Icons)
    .filter((key) => key !== 'fas' && key !== 'prefix')
    .map((icon) => Icons[icon]);
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
        fab: {
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

const Template: Story<LabelProps> = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
    variant: 'filled',
    size: 'medium',
    shape: 'rounded',
    color: 'grey',
    text: 'Label',
};
