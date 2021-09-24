import React from 'react';
import { Story, Meta } from '@storybook/react';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons';
import FowIcons from './FowIcons';

import Icon from './Icon';

const AllIcons = { ...Icons, ...FowIcons };

const iconList = Object.keys(AllIcons)
    .filter((key) => key !== 'fas' && key !== 'prefix')
    .map((icon) => AllIcons[icon]);

export default {
    title: 'Atoms/Icon',
    component: Icon,
    argTypes: {
        icon: {
            control: {
                type: 'select',
            },
            options: iconList.map((icon) => icon.iconName),
        },
    },
} as Meta;

const Template: Story<FontAwesomeIconProps> = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
    icon: 'fow-logo',
    color: 'black',
    size: '1x',
};
