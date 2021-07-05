import React from 'react';
import { Story, Meta } from '@storybook/react';
import Chip, { ChipProps } from './Chip';

export default {
    title: 'Atoms/Chip',
    component: Chip,
    argTypes: {
        size: {
            control: {
                type: 'select',
            },
            options: ['medium', 'small'],
        },
        type: {
            control: {
                type: 'select',
            },
            options: ['filled', 'outlined'],
        },
        color: {
            control: {
                type: 'select',
            },
            options: ['grey', 'primary', 'info', 'success', 'warning', 'error'],
        },
    },
} as Meta;

const Template: Story<ChipProps> = (args) => <Chip {...args} />;

export const Default = Template.bind({});
Default.args = {
    size: 'medium',
    color: 'grey',
    type: 'filled',
    text: 'Lorem Ipsum Dolor',
};
