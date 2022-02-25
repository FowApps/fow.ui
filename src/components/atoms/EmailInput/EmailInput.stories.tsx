import React from 'react';
import { Story, Meta } from '@storybook/react';

import EmailInput, { EmailProps } from './EmailInput';

export default {
    title: 'Atoms/EmailInput',
    component: EmailInput,
} as Meta;

const Template: Story<EmailProps> = (args) => <EmailInput {...args} />;

export const Default = Template.bind({});
Default.args = {
    onChange: (val) => console.log(val),
};
