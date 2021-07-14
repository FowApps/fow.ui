import React from 'react';
import { Story, Meta } from '@storybook/react';

import Menu, { MenuProps } from './Menu';
import Icon from '../../atoms/Icon';

export default {
    title: 'Molecules/Menu',
    component: Menu,
    argTypes: {},
} as Meta;

const menu = [
    {
        id: 1,
        title: 'Activitiies',
        children: [
            {
                id: 2,
                title: 'Today',
                icon: 'user',
            },
            {
                id: 3,
                title: 'Overdue',
                icon: 'user',
            },
        ],
    },
    {
        id: 4,
        title: 'Calendar',
        icon: 'calendar',
    },
];

const Template: Story<MenuProps> = (args) => (
    <div>
        <Menu {...args}>
            {menu.map((item) => (
                <Menu.Item
                    icon={<Icon icon="trash" />}
                    index={1}
                    label={item.title}
                    onClick={() => {
                        console.log(item);
                    }}
                    collapsable={!!item?.children?.length}>
                    {item?.children?.map((child) => (
                        <Menu.SubItem
                            onClick={() => {
                                console.log(child);
                            }}
                            key={child.id}
                            text={child.title}
                            icon={<Icon icon="circle" />}
                        />
                    ))}
                </Menu.Item>
            ))}
        </Menu>
    </div>
);

export const Default = Template.bind({});
Default.args = {
    defaultIndex: 1,
};
