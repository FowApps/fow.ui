import React from 'react';
import { Story, Meta } from '@storybook/react';
import Navigation from './Navigation';
import Label from '../../atoms/Label';
import Icon from '../../atoms/Icon';

const { Menu, SubMenu, Item } = Navigation;

export default {
    title: 'Extras/Navigation',
} as Meta;

const InlineTemplate: Story = (args) => (
    <Menu {...args}>
        <Item key="level-1" icon="car">
            <a>Level 1</a>
        </Item>
        <SubMenu key="sub-level-1" title="Sub Menu">
            <Item icon="circle" key="level-2">
                <a>Test</a>
            </Item>
        </SubMenu>
        <SubMenu key="sub-level-2" title="Sub Menu">
            <Item icon="circle" key="level-3">
                Level 3
            </Item>
            <Item icon="circle" key="level-4">
                Level 4
            </Item>
            <Item icon="circle" key="level-5">
                Level 5
            </Item>
        </SubMenu>
    </Menu>
);

export const Inline = InlineTemplate.bind({});
Inline.args = {
    mode: 'inline',
};

const HorizontalTemplate: Story = (args) => (
    <Menu {...args}>
        <Item key="level-1">
            <Icon icon="user-circle" />
        </Item>
        <Item key="level-2">
            <Icon icon="chart-line" />
        </Item>
        <Item key="level-3">
            <Icon icon="database" />
        </Item>
        <SubMenu key="sub-level-1" title="Customer">
            <Item key="level-4">
                <a>Contact</a>
            </Item>
            <Item key="level-5">
                <a>Account</a>
            </Item>
        </SubMenu>
        <SubMenu key="sub-level-2" title="Sales">
            <Item key="level-6">
                <a>Lead</a>
            </Item>
            <Item key="level-7">
                <a>Opportunity</a>
            </Item>
            <Item key="level-8">
                <a>Qoute</a>
            </Item>
        </SubMenu>
        <Item key="level-8">
            <a>Single Item</a>
        </Item>
    </Menu>
);

export const Horizontal = HorizontalTemplate.bind({});
Horizontal.args = {
    mode: 'horizontal',
};
