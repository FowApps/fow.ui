import React from 'react';
import { Story, Meta } from '@storybook/react';

import URLInput, { URLInputProps } from './URLInput';

export default {
    title: 'Atoms/URLInput',
    component: URLInput,
} as Meta;

const Template: Story<URLInputProps> = (args) => <URLInput {...args} />;

export const Default = Template.bind({});
Default.args = {
    onChange: (val) => console.log(val),
    protocols: [
        {
            name: 'https://',
            value: 'https://',
        },
        {
            name: 'http://',
            value: 'http://',
        },
    ],
};
