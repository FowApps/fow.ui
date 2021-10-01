import React from 'react';
import { Story, Meta } from '@storybook/react';

import Tooltip, { TooltipProps } from './Tooltip';
import Label from '../Label';

export default {
    title: 'Atoms/Tooltip',
    component: Tooltip,
} as Meta;

const Template: Story<TooltipProps> = (args) => (
    <Tooltip {...args}>
        <Label text="Trigger" />
    </Tooltip>
);

export const Default = Template.bind({});
Default.args = {
    overlay: <span>Tooltip</span>,
    placement: 'top',
};
