import React from 'react';
import { Story, Meta } from '@storybook/react';
import Label, { LabelProps } from './Label';

export default {
    title: 'Atoms/Label',
    component: Label,
    argTypes: {
        color: {
            control: {
                type: 'select',
            },
            options: ['grey', 'primary', 'info', 'success', 'warning', 'error'],
        },
    },
} as Meta;

const Template: Story<LabelProps> = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
    color: 'grey',
    text: 'Lorem Ipsum Dolor',
};
