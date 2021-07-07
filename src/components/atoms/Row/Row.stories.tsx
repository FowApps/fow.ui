import React from 'react';
import { Story, Meta } from '@storybook/react';
import Row, { RowProps } from './Row';

export default {
    title: 'Atoms/Row',
    component: Row,
} as Meta;

const Template: Story<RowProps> = (args) => (
    <>
        <Row {...args} />
        <Row {...args} />
    </>
);

export const Default = Template.bind({});
Default.args = {
    debug: true,
    children: 'Lorem Ipsum Dolor',
};
