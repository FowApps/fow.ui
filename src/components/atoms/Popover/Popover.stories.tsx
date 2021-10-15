import React from 'react';
import { Story, Meta } from '@storybook/react';

import Popover, { PopoverProps } from './Popover';
import Label from '../Label';

export default {
    title: 'Atoms/Popover',
    component: Popover,
} as Meta;

const Template: Story<PopoverProps> = (args) => (
    <Popover placement="right" {...args}>
        <Label text="Trigger" />
    </Popover>
);

export const Default = Template.bind({});
Default.args = {
    content: <span>PopOver</span>,
};
