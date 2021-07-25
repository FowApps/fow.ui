import React from 'react';
import { Story, Meta } from '@storybook/react';
import Checkbox, { CheckboxProps } from './Checkbox';

export default {
    title: 'Atoms/Checkbox',
    component: Checkbox,
} as Meta;

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
    onCheck: (checked) => {
        console.log(checked);
    },
};
