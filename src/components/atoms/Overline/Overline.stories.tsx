import React from 'react';
import { Story, Meta } from '@storybook/react';
import Overline, { OverlineProps } from './Overline';

export default {
    title: 'Atoms/Typography/Overline',
    component: Overline,
    argTypes: {
        color: {
            control: {
                type: 'select',
            },
            options: [
                'primary',
                'secondary',
                'disabled',
                'black',
                'success',
                'warning',
                'error',
            ],
        },
    },
} as Meta;

const Template: Story<OverlineProps> = (args) => <Overline {...args} />;

export const Default = Template.bind({});
Default.args = {
    color: 'black',
    children: 'Lorem Ipsum Dolor',
};
