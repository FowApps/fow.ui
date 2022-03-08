import React from 'react';
import { Story, Meta } from '@storybook/react';
import Button from '../../atoms/Button';
import Section, { SectionProps } from './Section';

export default {
    title: 'Molecules/Section',
    component: Section,
} as Meta;

const Template: Story<SectionProps> = (args) => (
    <div>
        <Section {...args} />
    </div>
);

export const Default = Template.bind({});
Default.args = {
    title: 'Awesome Title',
    actions: <Button>Go Detail</Button>,
    children: <div>Awesome Content</div>,
};
