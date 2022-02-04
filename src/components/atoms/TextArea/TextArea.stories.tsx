import React from 'react';
import { Story, Meta } from '@storybook/react';

import TextArea, { TextAreaProps } from './Textarea';

export default {
    title: 'Atoms/Textarea',
    component: TextArea,
} as Meta;

const Template: Story<TextAreaProps> = (args) => <TextArea {...args} />;

export const Default = Template.bind({});
Default.args = {
    minRows: '3',
    maxRows: '5',
    prefixIcon: 'paper-plane',
    suffixIcon: 'paper-plane'
};

export const Textarea = Template.bind({});
Textarea.args = {
};
