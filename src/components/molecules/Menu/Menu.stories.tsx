import React from 'react';
import { Story, Meta } from '@storybook/react';

import Menu, { MenuProps } from './Menu';
import Icon from '../../atoms/Icon';

export default {
    title: 'Molecules/Menu',
    component: Menu,
    argTypes: {},
} as Meta;

const wrapperStyles = {
    padding: 16,
    height: 300,
    backgroundColor: '#F4F6F8',
};

const Template: Story<MenuProps> = (args) => (
    <div>
        <Menu {...args}>
            <Menu.Item
                icon={<Icon icon="trash" />}
                index={1}
                label="Item 1"
                collapsable={false}>
                <div style={wrapperStyles}>
                    <Menu.SubItem text="savas" icon={<Icon icon="circle" />} />
                </div>
            </Menu.Item>
            <Menu.Item
                icon={<Icon icon="trash" />}
                index={2}
                label="Item 2"
                collapsable>
                <div style={wrapperStyles}>
                    <Menu.SubItem text="item" icon={<Icon icon="circle" />} />
                </div>
            </Menu.Item>
        </Menu>
    </div>
);

export const Default = Template.bind({});
Default.args = {
    defaultIndex: 1,
    onItemClick: (item: number) => {
        console.log(item);
    },
};
