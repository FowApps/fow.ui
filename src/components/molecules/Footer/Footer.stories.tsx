import React from 'react';
import { Story, Meta } from '@storybook/react';

import Footer, { FooterProps } from './Footer';

export default {
    title: 'Molecules/Footer',
    component: Footer,
    argTypes: {},
} as Meta;

const Template: Story<FooterProps> = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: <div>John Doe</div>,
};
