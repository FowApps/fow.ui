import React from 'react';
import { Story, Meta } from '@storybook/react';

import Card, { CardProps } from './Card';

export default {
    title: 'Atoms/Card',
    component: Card,
    argTypes: {},
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args}>Hello World</Card>;

export const Default = Template.bind({});
Default.args = {};
