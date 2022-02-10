import React from 'react';
import { Story, Meta } from '@storybook/react';
import Radio, { RadioProps } from './Radio';
import Icon from '../Icon';

export default {
    title: 'Atoms/Radio',
    component: Radio,
} as Meta;

const Template: Story<RadioProps> = (args) => <Radio {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: 'Label',
};

const RadioGroupTemplate: Story<RadioProps> = (args) => (
    <Radio.Group direction="horizontal" {...args}>
        <Radio value="Test" label={<Icon icon="list" />} />
        <Radio value="Test 2" label={<Icon icon="th" />} />
        <Radio value="Test 3" label={<Icon icon="border-all" />} />
        <Radio value="Test 4" label={<Icon icon="border-none" />} />
    </Radio.Group>
);

export const RadioGroup = RadioGroupTemplate.bind({});
RadioGroup.args = {
    optionType: 'button',
};
