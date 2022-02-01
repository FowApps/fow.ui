import React from 'react';
import { Story, Meta } from '@storybook/react';
import OverviewCard, { OverviewCardProps } from './OverviewCard';
import Space from '../../atoms/Space';

export default {
    title: 'Molecules/OverviewCard',
    component: OverviewCard,
} as Meta;

const Template: Story<OverviewCardProps> = (args) => (
    <Space inline={false}>
        <OverviewCard {...args} />
        <OverviewCard {...args} />
        <OverviewCard {...args} />
    </Space>
);

export const Default = Template.bind({});
Default.args = {
    title: 'Total Amount',
    subtitle: 'Total',
    children: 22,
};
