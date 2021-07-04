import React from 'react';
import { Story, Meta } from '@storybook/react';
import Avatar, { AvatarProps } from './Avatar';

export default {
    title: 'Atoms/Avatar',
    component: Avatar,
    argTypes: {
        use: {
            control: {
                type: 'select',
            },
            options: ['grey', 'primary'],
        },
    },
} as Meta;

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
    use: 'grey',
};
