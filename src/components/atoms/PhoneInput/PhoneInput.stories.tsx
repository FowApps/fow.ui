import React from 'react';
import { Story, Meta } from '@storybook/react';

import PhoneInput from './PhoneInput';

export default {
    title: 'Atoms/Phone',
    component: PhoneInput,
    argTypes: {
        country: {
            control: {
                type: 'select',
            },
            options: ['tr', 'us', 'de'],
        },
    },
} as Meta;

const Template: Story<any> = (args) => <PhoneInput {...args} />;

export const Default = Template.bind({});
Default.args = {
    onChange: (content: string) => console.log(content),
};
