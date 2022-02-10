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
    isLoading: true,
    text: 'Loading',
    fullPage: false,
    children: <Card>Hello from card</Card>,
};

export const WithFullPage = Template.bind({});
WithFullPage.args = {
    isLoading: true,
    text: 'Loading',
    fullPage: true,
    children: <Card>Hello From Card</Card>,
};

export const Static = Template.bind({});
Static.args = {
    isLoading: true,
    text: 'Loading',
};
