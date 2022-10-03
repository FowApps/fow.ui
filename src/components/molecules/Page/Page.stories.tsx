import React from 'react';
import styled from 'styled-components';

import { Story, Meta } from '@storybook/react';

import Page from './Page';
import Button from '../../atoms/Button';
import Icon from '../../atoms/Icon';
import Space from '../../atoms/Space';

export default {
    title: 'Extras/Page',
    component: Page,
} as Meta;

const PageContainer = styled.div`
    width: 100%;
`;

const Template: Story = (args) => (
    <PageContainer>
        <Page {...args}>Page content is here...</Page>
    </PageContainer>
);

export const Default = Template.bind({});
Default.args = {
    title: 'Ali Page Test',
    icon: <Icon size="sm" icon="fow-logo" color="black" />,
    quickActions: (
        <Button color="info" size="medium" variant="outlined">
            Quick Action Item
        </Button>
    ),
    sidebar: <Space>Left Sidebar Box</Space>,
};
