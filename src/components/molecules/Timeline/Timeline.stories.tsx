import React from 'react';
import { Story, Meta } from '@storybook/react';

import Card from '../../atoms/Card';
import Heading from '../../atoms/Typography/Heading';
import Body from '../../atoms/Typography/Body';
import Icon from '../../atoms/Icon';
import Space from '../../atoms/Space';
import Caption from '../../atoms/Typography/Caption';
import Overline from '../../atoms/Typography/Overline';
import Subtitle from '../../atoms/Typography/Subtitle';

import Timeline, { TimelineProps } from './Timeline';

export default {
    title: 'Molecules/Timeline',
    component: Timeline,
} as Meta;

const Template: Story<TimelineProps> = (args) => (
    <Timeline {...args}>
        <Timeline.Item isActive icon="star">
            <Heading>Contact</Heading>
            <Space>
                <Body>Sarrah Jonas Maholl</Body>
                <Icon icon="long-arrow-alt-right" />
            </Space>
        </Timeline.Item>
        <Timeline.Item>
            <Card>
                <Space direction="vertical" size="xxsmall" align="start">
                    <Space size="xxsmall">
                        <Caption color="disabled">
                            April 21, 2021 09:30 am
                        </Caption>
                        <Overline color="disabled">Name Surname</Overline>
                    </Space>
                    <Subtitle level={2}>
                        Created Meeting with Sarrah Jonas Maholl on April 22,
                        2021 at 10:00 am
                    </Subtitle>
                </Space>
            </Card>
        </Timeline.Item>
        <Timeline.Item>
            <Card>
                <Space direction="vertical" size="xxsmall" align="start">
                    <Space size="xxsmall">
                        <Caption color="disabled">
                            April 21, 2021 09:30 am
                        </Caption>
                        <Overline color="disabled">Name Surname</Overline>
                    </Space>
                    <Subtitle level={2}>Created new lead Sarrah Jonas</Subtitle>
                </Space>
            </Card>
        </Timeline.Item>
        <Timeline.Item isActive icon="star">
            <Heading>Contact</Heading>
            <Space>
                <Body>Sarrah Jonas Maholl</Body>
                <Icon icon="long-arrow-alt-right" />
            </Space>
        </Timeline.Item>
        <Timeline.Item>
            <Card>
                <Space direction="vertical" size="xxsmall" align="start">
                    <Space size="xxsmall">
                        <Caption color="disabled">
                            April 21, 2021 09:30 am
                        </Caption>
                        <Overline color="disabled">Name Surname</Overline>
                    </Space>
                    <Subtitle level={2}>Added new lead</Subtitle>
                </Space>
            </Card>
        </Timeline.Item>
    </Timeline>
);

export const Default = Template.bind({});
Default.args = {
    align: 'left',
    dotType: 'filled',
};
