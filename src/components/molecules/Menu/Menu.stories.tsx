import React from 'react';
import { Story, Meta } from '@storybook/react';

import Menu, { MenuProps } from './Menu';

export default {
    title: 'Molecules/Menu',
    component: Menu,
    argTypes: {},
} as Meta;

const menuItems = [
    {
        name: 'Item1',
        icon: 'X',
        url: '#item1',
    },
    {
        name: 'Item2',
        icon: 'X',
        url: '#item2',
    },
    {
        name: 'Item3',
        children: [
            {
                name: 'Child31',
                url: '#child31',
            },
            {
                name: 'Child32',
                url: '#child32',
            },
            {
                name: 'Child32',
                url: '#child32',
            },
        ],
    },
    {
        name: 'Item4',
        children: [
            {
                name: 'Child41',
                url: 'www.google.com',
            },
            {
                name: 'Child42',
                url: '#child42',
            },
            {
                name: 'Child43',
                icon: 'chevron-up',
                children: [
                    {
                        name: 'Child431',
                        url: '#child431',
                    },
                    {
                        name: 'Child432',
                        url: '#child432,',
                    },
                    {
                        name: 'Child433',
                        url: '#child433',
                    },
                ],
            },
        ],
    },
];

// @ts-ignore
const Template: Story<MenuProps> = () => <div>{Menu(menuItems)}</div>;

export const Default = Template.bind({});
Default.args = {};
