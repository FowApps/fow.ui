import React from 'react';
import { Story, Meta } from '@storybook/react';
import Avatar, { AvatarProps } from './Avatar';

export default {
    title: 'Atoms/Avatar',
    component: Avatar,
    argTypes: {
        color: {
            control: {
                type: 'select',
            },
            options: ['grey', 'primary'],
        },
        size: {
            control: {
                type: 'select',
            },
            options: ['xsmall', 'small', 'medium', 'large'],
        },
    },
} as Meta;

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
    size: 'medium',
    color: 'grey',
};
