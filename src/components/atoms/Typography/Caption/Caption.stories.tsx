import React from 'react';
import { Story, Meta } from '@storybook/react';
import Caption, { CaptionProps } from './Caption';

export default {
    title: 'Atoms/Typography/Caption',
    component: Caption,
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

const Template: Story<CaptionProps> = (args) => <Caption {...args} />;

export const Default = Template.bind({});
Default.args = {
    color: 'black',
    children: 'Lorem Ipsum Dolor',
};
