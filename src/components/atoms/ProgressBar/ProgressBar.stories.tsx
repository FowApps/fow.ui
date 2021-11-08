import React from 'react';
import { Story, Meta } from '@storybook/react';
import ProgressBar, { ProgressBarProps } from './ProgressBar';

export default {
    title: 'Atoms/ProgressBar',
    component: ProgressBar,
} as Meta;

const Template: Story<ProgressBarProps> = (args) => <ProgressBar {...args} />;

export const Default = Template.bind({});
Default.args = {
    progress: 50,
};
