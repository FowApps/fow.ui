import React from 'react';
import { Story, Meta } from '@storybook/react';
import Badge, { BadgeProps } from './Badge';

export default {
    title: 'Atoms/Badge',
    component: Badge,
    argTypes: {
        color: {
            control: {
                type: 'select',
            },
            options: ['primary', 'info', 'success', 'warning', 'error', 'grey'],
        },
        variant: {
            control: {
                type: 'select',
            },
            options: ['outlined', 'filled'],
        },
        shape: {
            control: {
                type: 'select',
            },
            options: ['circle', 'rounded'],
        },
        size: {
            control: {
                type: 'select',
            },
            options: ['small', 'medium', 'large'],
        },
    },
} as Meta;

const Template: Story<BadgeProps> = (args) => <Badge {...args} />;

export const Default = Template.bind({});
Default.args = {
    text: '1',
};
