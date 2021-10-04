import React from 'react';
import styled from 'styled-components';

import { Story, Meta } from '@storybook/react';

import Sidebar from './Sidebar';

export default {
    title: 'Extras/Sidebar',
    component: Sidebar,
} as Meta;

const Container = styled.div`
    display: flex;
    min-width: 0;
    min-height: 100vh;
    font-family: sans-serif;
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
        <Sidebar noGutter>Sidebar Content</Sidebar>
        <Content>Page Content Goes here</Content>
    </Container>
);

export const Default = Template.bind({});
Default.args = {};
