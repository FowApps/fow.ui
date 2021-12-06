import React from 'react';
import { Story, Meta } from '@storybook/react';
import Icon from '../../atoms/Icon';
import Accordion, { AccordionProps } from './Accordion';

export default {
    title: 'Molecules/Accordion',
    component: Accordion,
} as Meta;

const wrapperStyles = {
    padding: '16px 24px',
    height: 300,
    backgroundColor: '#F4F6F8',
};

const accordionTitle = [
    {
        label: 'Item 1',
        action: [
            {
                id: 1,
                message: 'Item 1 Contents',
            },
            { id: 1, message: 'Item 1 Contents' },
            { id: 1, message: 'Item 1 Contents' },
        ],
    },
    { label: 'Item 2', action: [{ id: 1, message: 'Item 2 Contents' }] },
    { label: 'Item 3', action: [{ id: 1, message: 'Item 3 Contents' }] },
    { label: 'Item 4', action: [{ id: 1, message: 'Item 4 Contents' }] },
];

const Template: Story<AccordionProps> = (args) => (
    <div>
        <Accordion {...args}>
            {accordionTitle.map((item, index) => (
                <Accordion.Item
                    index={index}
                    label={item.label}
                    action={item.action}>
                    <div style={wrapperStyles}>Test</div>
                </Accordion.Item>
            ))}
        </Accordion>
    </div>
);

export const Default = Template.bind({});
Default.args = {
    defaultIndex: 0,
    onItemClick: (item: number) => {
        console.log(item);
    },
};
