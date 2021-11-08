import React from 'react';
import { Story, Meta } from '@storybook/react';
import Radio, { RadioProps } from './Radio';

export default {
    title: 'Atoms/Radio',
    component: Radio,
} as Meta;

const Template: Story<RadioProps> = (args) => <Radio {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: 'Label',
};
