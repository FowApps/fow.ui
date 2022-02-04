import React from 'react';
import { Story, Meta } from '@storybook/react';

import TextArea, { TextAreaProps } from './Textarea';

export default {
    title: 'Atoms/Textarea',
    component: TextArea,
    argTypes: {
        autosize: {
            control: 'boolean'
        },
        disabled: {
            control: 'boolean'
        }
    }
} as Meta;

const Template: Story<TextAreaProps> = (args) => <TextArea {...args} />;

export const Default = Template.bind({});
Default.args = {
    minRows: 1,
};
