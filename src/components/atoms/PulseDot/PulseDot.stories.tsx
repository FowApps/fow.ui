import React from 'react';
import { Story, Meta } from '@storybook/react';

import PulseDot from './PulseDot';

export default {
    title: 'Atoms/PulseDot',
    component: PulseDot,
} as Meta;

const Template: Story = (args) => <PulseDot />;

export const Default = Template.bind({});
Default.args = {};
