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
        <Item key="level-1">Level 1</Item>
        <SubMenu key="sub-level-1" title="Sub Menu">
            <Item icon="circle" key="level-2">
                Level 2
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
        <Item key="level-1">Level 1</Item>
        <Item key="level-2">Level 2</Item>
        <Item key="level-3">Level 3</Item>
        <Item key="level-4">Level 4</Item>
        <Item key="level-5">Level 5</Item>
        <Item key="level-6">Level 6</Item>
        <Item key="level-7">Level 7</Item>
        <Item key="level-8">Level 8</Item>
    </Menu>
);

export const Horizontal = HorizontalTemplate.bind({});
Horizontal.args = {
    mode: 'horizontal',
};
