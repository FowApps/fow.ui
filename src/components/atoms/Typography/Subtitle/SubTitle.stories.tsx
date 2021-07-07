import React from 'react';
import { Story, Meta } from '@storybook/react';
import SubTitle, { SubTitleProps } from './SubTitle';

export default {
    title: 'Atoms/Typography/SubTitle',
    component: SubTitle,
    argTypes: {
        level: {
            control: {
                type: 'select',
            },
            options: [1, 2],
        },
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

const Template: Story<SubTitleProps> = (args) => <SubTitle {...args} />;

export const Default = Template.bind({});
Default.args = {
    level: 1,
    color: 'black',
    children: 'Lorem Ipsum Dolor',
};
