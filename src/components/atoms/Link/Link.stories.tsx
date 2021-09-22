import React from 'react';
import { Story, Meta } from '@storybook/react';
import Link, { LinkProps } from './Link';
import * as Icons from '@fortawesome/free-solid-svg-icons';

const iconList = Object.keys(Icons)
    .filter((key) => key !== 'fas' && key !== 'prefix')
    .map((icon) => Icons[icon]);

export default {
    title: 'Atoms/Link',
    component: Link,
    argTypes: {
        size: {
            control: {
                type: 'select',
            },
            options: ['small', 'medium', 'large'],
        },
        hoverColor: {
            control: {
                type: 'select',
            },
            options: [
                'primary',
                'secondary',
                'disabled',
                'black',
                'success',
                'warning',
                'error',
            ],
        },
        color: {
            control: {
                type: 'select',
            },
            options: [
                'primary',
                'secondary',
                'disabled',
                'black',
                'success',
                'warning',
                'error',
            ],
        },
        leftIcon: {
            control: {
                type: 'select',
            },
            options: iconList.map((icon) => icon.iconName),
        },
        rightIcon: {
            control: {
                type: 'select',
            },
            options: iconList.map((icon) => icon.iconName),
        },
    },
} as Meta;

const Template: Story<LinkProps> = (args) => <Link {...args} />;

export const Default = Template.bind({});
Default.args = {
    color: 'black',
    hoverColor: 'primary',
    size: 'medium',
    href: '#',
    text: 'Lorem',
};
