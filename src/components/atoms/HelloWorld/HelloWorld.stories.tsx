/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React from 'react';
import { Story, Meta } from '@storybook/react';
import HelloWorld, { HelloWorldProps } from './HelloWorld';

export default {
    title: 'Atoms/HelloWorld',
    component: HelloWorld,
} as Meta;

const Template: Story<HelloWorldProps> = (args) => <HelloWorld {...args} />;

export const Default = Template.bind({});
Default.args = {
    message: 'Hello World',
};
