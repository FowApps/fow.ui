import React from 'react';
import { Story, Meta } from '@storybook/react';

import Skeleton, { SkeletonProps } from './Skeleton';

export default {
    title: 'Atoms/Skeleton',
    component: Skeleton,
    argTypes: {
        variant: {
            control: {
                type: 'select',
            },
            options: ['flat', 'pill', 'circle'],
        },
    },
} as Meta;

const Template: Story<SkeletonProps> = (args) => <Skeleton {...args} />;

export const Default = Template.bind({});
Default.args = {
    width: 500,
    height: 100,
    variant: 'pill',
    lines: 5,
};
