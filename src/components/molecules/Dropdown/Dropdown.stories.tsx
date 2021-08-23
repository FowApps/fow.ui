import React from 'react';
import { Story, Meta } from '@storybook/react';
import Dropdown, { DropdownProps } from './Dropdown';

import Button from '../../atoms/Button';

export default {
    title: 'Molecules/Dropdown',
    component: Dropdown,
} as Meta;

const Template: Story<DropdownProps> = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
    trigger: 'hover',
    children: (
        <Button variant="text" rightIcon="caret-down">
            Show Menu
        </Button>
    ),
    content: (
        <ul>
            <li>12</li>
            <li>12</li>
            <li>12</li>
            <li>12</li>
            <li>12</li>
            <li>12</li>
        </ul>
    ),
};
