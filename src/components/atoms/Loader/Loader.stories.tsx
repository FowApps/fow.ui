import React from 'react';
import { Story, Meta } from '@storybook/react';

import Loader, { LoaderProps } from './Loader';
import Card from '../Card';

export default {
    title: 'Atoms/Loader',
    component: Loader,
    argTypes: {},
} as Meta;

const Template: Story<LoaderProps> = (args) => <Loader {...args} />;

export const WithCard = Template.bind({});
WithCard.args = {
    isLoading: false,
    text: 'Loading',
    fullPage: true,
    children: <Card>Hello from card</Card>,
};

export const WithLFullPage = Template.bind({});
WithLFullPage.args = {
    isLoading: false,
    text: 'Loading',
    fullPage: true,
    children: <Card>Hello From Card</Card>,
};

export const Static = Template.bind({});
Static.args = {
    isLoading: false,
    text: 'Loading',
    height: 300,
};
