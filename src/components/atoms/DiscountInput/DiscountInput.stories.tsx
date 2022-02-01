import React from 'react';
import { Story, Meta } from '@storybook/react';

import DiscountInput, { DiscountInputProps } from './DiscountInput';

export default {
    title: 'Atoms/DiscountInput',
    component: DiscountInput,
} as Meta;

const Template: Story<DiscountInputProps> = (args) => (
    <DiscountInput {...args} />
);

export const Default = Template.bind({});
Default.args = {
    onChange: (val) => console.log(val),
};

export const WithIcon = Template.bind({});
WithIcon.args = {};
