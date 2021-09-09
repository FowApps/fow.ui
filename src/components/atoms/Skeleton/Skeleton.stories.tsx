import React from 'react';
import { Story, Meta } from '@storybook/react';

import Skeleton, { SkeletonProps } from './Skeleton';

export default {
    title: 'Atoms/Skeleton',
    component: Skeleton,
    argTypes: {},
} as Meta;

const Template: Story<SkeletonProps> = (args) => <Skeleton {...args} />;

export const Default = Template.bind({});
Default.args = {
    width: 500,
    height: 100,
    lines: 5
};
