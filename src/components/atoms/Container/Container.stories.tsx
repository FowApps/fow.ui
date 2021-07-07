import React from 'react';
import { Story, Meta } from '@storybook/react';
import Container, { ContainerProps } from './Container';

export default {
    title: 'Atoms/Container',
    component: Container,
} as Meta;

const Template: Story<ContainerProps> = (args) => <Container {...args} />;

export const Default = Template.bind({});
Default.args = {
    fluid: false,
    debug: true,
    children: 'Lorem Ipsum Dolor',
};
