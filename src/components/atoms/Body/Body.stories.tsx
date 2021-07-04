import React from 'react';
import { Story, Meta } from '@storybook/react';
import Body, { BodyProps } from './Body';

export default {
    title: 'Atoms/Body',
    component: Body,
    argTypes: {
        level: {
            control: {
                type: 'select',
                labels: {
                    1: '1',
                    2: '2',
                },
            },
            options: [1, 2],
        },
        color: {
            control: {
                type: 'select',
                labels: {
                    primary: 'primary',
                    secondary: 'secondary',
                    disabled: 'disabled',
                    black: 'black',
                    success: 'success',
                    warning: 'warning',
                    error: 'error',
                },
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

const Template: Story<BodyProps> = (args) => <Body {...args} />;

export const Default = Template.bind({});
Default.args = {
    level: 1,
    color: 'black',
    children: 'Lorem Ipsum Dolor',
};
