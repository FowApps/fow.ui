import React from 'react';
import { Story, Meta } from '@storybook/react';

import Dropdown, { DropdownProps } from './Dropdown';

export default {
    title: 'atoms/Dropdown',
    component: Dropdown,
    argTypes: {},
} as Meta;

const Template: Story<DropdownProps> = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: <div>ss</div>,
};
