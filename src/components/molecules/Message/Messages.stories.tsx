import React from 'react';
import { Story, Meta } from '@storybook/react';
import Message, { MessageProps } from './Message';

export default {
    title: 'Molecules/Message',
    component: Message,
} as Meta;

const Template: Story<MessageProps> = (args) => <Message {...args} />;

export const Default = Template.bind({});
Default.args = {
    type: 'error',
    width: 400,
    message: 'There are no content. Add one!',
    actionText: 'Add Activity Type',
    actionIcon: 'plus',
};
