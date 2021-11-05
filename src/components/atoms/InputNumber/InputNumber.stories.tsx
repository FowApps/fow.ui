import React from 'react';
import { Story, Meta } from '@storybook/react';

import InputNumber, { IInputNumber } from './InputNumber';

export default {
    title: 'Atoms/InputNumber',
    component: InputNumber,
} as Meta;

const Template: Story<IInputNumber> = (args) => <InputNumber {...args} />;

export const Default = Template.bind({});
Default.args = {
    placeholder: 'Terst',
};

export const WithIcon = Template.bind({});
WithIcon.args = {};
