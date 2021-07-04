import React from 'react';
import { Story, Meta } from '@storybook/react';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons';

import Icon from './Icon';

const iconList = Object.keys(Icons)
    .filter((key) => key !== 'fas' && key !== 'prefix')
    .map((icon) => Icons[icon]);

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
    icon: 'coffee',
    color: 'black',
};
