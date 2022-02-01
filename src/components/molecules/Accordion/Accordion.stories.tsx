import React from 'react';
import { Story, Meta } from '@storybook/react';
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
        title: 'Item 1',
        subTitle:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen...',
    },
    {
        title: 'Item 2',
        subTitle:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy...',
        extra: 'Extra Content',
    },
    {
        title: 'Item 3',
    },
];

const Template: Story<AccordionProps> = (args) => (
    <div>
        <Accordion {...args}>
            {accordionTitle.map((item, index) => (
                <Accordion.Item
                    index={index}
                    title={item.title}
                    extra={item.extra}
                    subtitle={item.subTitle}>
                    <div style={wrapperStyles}>Test</div>
                </Accordion.Item>
            ))}
        </Accordion>
    </div>
);

export const Default = Template.bind({});
Default.args = {
    defaultIndex: 0,
    arrowPosition: 'right',
    onItemClick: (item: number) => {
        console.log(item);
    },
};
