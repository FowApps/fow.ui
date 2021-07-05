import React from 'react';
import { Story, Meta } from '@storybook/react';
import Divider, { DividerProps } from './Divider';

export default {
    title: 'Atoms/Divider',
    component: Divider,
    argTypes: {},
} as Meta;

const Template: Story<DividerProps> = (args) => (
    <div>
        <div>Section A</div>
        <Divider {...args} />
        <div>Section B</div>
    </div>
);

export const Default = Template.bind({});
Default.args = {
    orientation: 'center',
    type: 'horizontal',
    children: 'Title',
};
