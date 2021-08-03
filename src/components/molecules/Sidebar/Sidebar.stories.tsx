import React from 'react';
import { Story, Meta } from '@storybook/react';

import Sidebar, { SidebarProps } from './Sidebar';

export default {
    title: 'Molecules/Sidebar',
    component: Sidebar,
    argTypes: {},
} as Meta;

const Template: Story<SidebarProps> = (args) => <Sidebar {...args} />;

export const Default = Template.bind({});
Default.args = {
    text: 'John Doe',
};
