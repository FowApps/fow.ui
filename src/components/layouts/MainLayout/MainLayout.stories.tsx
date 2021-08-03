import React from 'react';
import { Story, Meta } from '@storybook/react';

import MainLayout, { MainLayoutProps } from './MainLayout';

export default {
    title: 'Layouts/MainLayout',
    component: MainLayout,
    argTypes: {},
} as Meta;

const Template: Story<MainLayoutProps> = (args) => <MainLayout {...args} />;

export const Default = Template.bind({});
Default.args = {
    text: 'John Doe',
};
