import React from 'react';
import { Story, Meta } from '@storybook/react';
import Menu, { MenuProps } from './Menu';

import Space from '../../atoms/Space';
import Icon from '../../atoms/Icon';
import Subtitle from '../../atoms/Typography/Subtitle';

export default {
    title: 'Molecules/Menu',
    component: Menu,
} as Meta;

const Template: Story<MenuProps> = (args) => (
    <Menu onClick={(key) => console.log(key)}>
        <Menu.Item index={1}>Item 1</Menu.Item>
        <Menu.Item index={2}>Item 2</Menu.Item>
        <Menu.Item index={3}>
            <Subtitle level={2} color="secondary">
                <Space>
                    <Icon icon="user" />
                    <span>Item 3</span>
                </Space>
            </Subtitle>
        </Menu.Item>
    </Menu>
);

export const Default = Template.bind({});
Default.args = {};
