import React from 'react';
import { Story, Meta } from '@storybook/react';
import * as Icons from '@fortawesome/free-solid-svg-icons';

import ColoredIcon, { ColoredIconProps } from './ColoredIcon';

const iconList = Object.keys(Icons)
    .filter((key) => key !== 'fas' && key !== 'prefix')
    .map((icon) => Icons[icon]);

export default {
    title: 'Atoms/ColoredIcon',
    component: ColoredIcon,
    argTypes: {
        color: {
            control: {
                type: 'select',
            },
            options: ['primary', 'info', 'success', 'warning', 'error'],
        },
        icon: {
            control: {
                type: 'select',
            },
            options: iconList.map((icon) => icon.iconName),
        },
    },
} as Meta;

const Template: Story<ColoredIconProps> = (args) => <ColoredIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
    color: 'info',
    icon: 'check',
};
