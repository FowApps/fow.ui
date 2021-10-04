import React from 'react';
import { Story, Meta } from '@storybook/react';
import Navigation from './Navigation';
import Label from '../../atoms/Label';

const { Menu, SubMenu, Item } = Navigation;

export default {
    title: 'Extras/Navigation',
} as Meta;

const Template: Story = (args) => (
    <Menu>
        <Item
            extra={
                <Label
                    color="primary"
                    shape="rounded"
                    size="small"
                    text={12}
                    variant="filled"
                />
            }
            key="level-1"
            icon="user">
            Level 1
        </Item>
        <SubMenu key="sub-level-1" title="Sub Menu" icon="comment">
            <Item key="level-2">Level 2</Item>
        </SubMenu>
        <SubMenu key="sub-level-2" title="Sub Menu" icon="calendar">
            <Item
                extra={
                    <Label
                        color="primary"
                        shape="rounded"
                        size="small"
                        text={12}
                        variant="filled"
                    />
                }
                key="level-3">
                Level 3
            </Item>
            <Item key="level-4">Level 4</Item>
            <Item key="level-5">Level 5</Item>
        </SubMenu>
    </Menu>
);

export const Default = Template.bind({});
Default.args = {};