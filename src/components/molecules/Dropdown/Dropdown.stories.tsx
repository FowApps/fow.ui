import React from 'react';
import { Story, Meta } from '@storybook/react';
import Dropdown, { DropdownProps } from './Dropdown';

import Button from '../../atoms/Button';
import Menu from '../Menu';

export default {
    title: 'Molecules/Dropdown',
    component: Dropdown,
} as Meta;

const Template: Story<DropdownProps> = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
    trigger: 'hover',
    closeAfterClickContent: true,
    children: (
        <div>
            <Button variant="text" rightIcon="caret-down">
                Show Menu
            </Button>
        </div>
    ),
    style: {
        zIndex: 100,
    },
    content: (toggle) => (
        <Menu>
            <Menu.Item onClick={toggle} index={1}>
                12
            </Menu.Item>
            <Menu.Item index={2}>12</Menu.Item>
            <Menu.Item index={3}>12</Menu.Item>
            <Menu.Item index={4}>12</Menu.Item>
            <Menu.Item index={5}>12</Menu.Item>
            <Menu.Item index={6}>12</Menu.Item>
        </Menu>
    ),
};
