import React from 'react';
import { Story, Meta } from '@storybook/react';
import Tabs, { TabsProps } from './Tabs';

import Icon from '../../atoms/Icon';

export default {
    title: 'Molecules/Tabs',
    component: Tabs,
} as Meta;

const Template: Story<TabsProps> = (args) => (
    <div>
        <Tabs {...args}>
            <Tabs.Item icon={<Icon icon="user" />} index={1}>
                Lorem ipsum 1
            </Tabs.Item>
            <Tabs.Item index={2} label="Leads">
                Lorem ipsum 2
            </Tabs.Item>
            <Tabs.Item disabled icon={<Icon icon="user" />} index={3} label="Users">
                Lorem ipsum 3
            </Tabs.Item>
        </Tabs>
    </div>
);

export const Default = Template.bind({});
Default.args = {
    defaultIndex: 2,
};
