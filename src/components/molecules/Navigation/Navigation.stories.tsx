import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import Navigation from './Navigation';
import Loader from '../../atoms/Loader';
import Icon from '../../atoms/Icon';

const { Menu, SubMenu, Item } = Navigation;

export default {
    title: 'Extras/Navigation',
} as Meta;

const VerticalTemplate: Story = (args) => (
    <Menu {...args}>
        <Item icon="bed" as={NavLink}>
            Home
        </Item>
        <Item>Contacts</Item>
        <SubMenu title="Sub Menu" icon="bed">
            <Item as={NavLink}>Sub 1</Item>
            <Item>Sub 2</Item>
        </SubMenu>
        <SubMenu title="Sub Menu" icon="bed">
            <Item as={NavLink}>Sub 1</Item>
            <Item>Sub 2</Item>
        </SubMenu>
    </Menu>
);

export const Vertical = VerticalTemplate.bind({});
Vertical.args = {
    mode: 'vertical',
};

const NavLink = ({ to, children, ...rest }) => {
    return (
        <a {...rest} className="active" href={to}>
            {children}
        </a>
    );
};

const HorizontalTemplate: Story = (args) => {
    return (
        <Menu {...args}>
            <Item icon="bed" as={NavLink}>
                Home
            </Item>
            <Item>Contacts</Item>
            <SubMenu title="Sub Menu" icon="bed">
                <Item as={NavLink}>Sub 1</Item>
                <Item>Sub 2</Item>
            </SubMenu>
        </Menu>
    );
};

export const Horizontal = HorizontalTemplate.bind({});
Horizontal.args = {
    mode: 'horizontal',
};
