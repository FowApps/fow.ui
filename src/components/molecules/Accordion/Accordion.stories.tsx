import React from 'react';
import { Story, Meta } from '@storybook/react';
import Icon from '../../atoms/Icon';
import Accordion, { AccordionProps } from './Accordion';

export default {
    title: 'Molecules/Accordion',
    component: Accordion,
} as Meta;

const wrapperStyles = {
    padding: 16,
    height: 300,
    backgroundColor: '#F4F6F8',
};

const Template: Story<AccordionProps> = (args) => (
    <div>
        <Accordion {...args}>
            <Accordion.Item
                icon={<Icon icon="trash" />}
                index={1}
                label="Item 1"
                extra="Extra Content Here"
                >
                <div style={wrapperStyles}>Test</div>
            </Accordion.Item>
            <Accordion.Item
                icon={<Icon icon="paint-brush" />}
                index={2}
                label="Item 2">
                <div style={wrapperStyles}>Test</div>
            </Accordion.Item>
            <Accordion.Item
                icon={<Icon icon="car-side" />}
                index={3}
                label="Item 3">
                <div style={wrapperStyles}>Test</div>
            </Accordion.Item>
            <Accordion.Item
                icon={<Icon icon="microchip" />}
                index={4}
                label="Item 4">
                <div style={wrapperStyles}>Test</div>
            </Accordion.Item>
        </Accordion>
    </div>
);

export const Default = Template.bind({});
Default.args = {
    defaultIndex: 1,
    onItemClick: (item: number) => {
        console.log(item);
    },
};
