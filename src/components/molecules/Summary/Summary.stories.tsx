import React from 'react';
import { Story, Meta } from '@storybook/react';
import Summary from './Summary';

export default {
    title: 'Molecules/Summary',
    component: Summary,
} as Meta;

const Template: Story = (args) => (
    <div>
        <Summary {...args} />
    </div>
);

export const Default = Template.bind({});
