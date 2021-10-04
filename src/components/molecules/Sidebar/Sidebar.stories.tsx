import React from 'react';
import styled from 'styled-components';

import { Story, Meta } from '@storybook/react';

import Sidebar from './Sidebar';

import Navigtion from '../Navigation';

const { Menu, SubMenu, Item } = Navigtion;

export default {
    title: 'Extras/Sidebar',
    component: Sidebar,
} as Meta;

const Container = styled.div`
    display: flex;
    min-width: 0;
    min-height: 100vh;
`;

const Content = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    padding: 10px;
    background-color: #f9fafb;
`;

const Template: Story = (args) => (
    <Container>
        <Sidebar noGutter>
            <Menu>
                <Item key="level-1" icon="user">
                    Level 1
                </Item>
                <SubMenu key="sub-level-1" title="Sub Menu" icon="comment">
                    <Item key="level-2">Level 2</Item>
                </SubMenu>
                <SubMenu key="sub-level-2" title="Sub Menu" icon="calendar">
                    <Item key="level-3">Level 3</Item>
                    <Item key="level-4">Level 4</Item>
                    <Item key="level-5">Level 5</Item>
                </SubMenu>
            </Menu>
        </Sidebar>
        <Content>Page Content Goes here</Content>
    </Container>
);

export const Default = Template.bind({});
Default.args = {};
