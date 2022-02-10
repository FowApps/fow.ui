import React from 'react';
import { Story, Meta } from '@storybook/react';
import Subtitle, { SubtitleProps } from './Subtitle';

export default {
    title: 'Atoms/Typography/Subtitle',
    component: Subtitle,
    argTypes: {
        level: {
            control: {
                type: 'select',
            },
            options: [1, 2, 3],
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

const Template: Story<SubtitleProps> = (args) => <Subtitle {...args} />;

export const Default = Template.bind({});
Default.args = {
    level: 1,
    color: 'black',
    children: 'Lorem Ipsum Dolor',
};
