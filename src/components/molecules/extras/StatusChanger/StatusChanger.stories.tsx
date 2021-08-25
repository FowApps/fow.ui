import React from 'react';
import { Story, Meta } from '@storybook/react';
import StatusChanger, { StatusChangerProps } from './StatusChanger';

export default {
    title: 'Molecules/Extras/StatusChanger',
    component: StatusChanger,
    argTypes: {},
} as Meta;

const marks = {
    0: <strong>0°C</strong>,
    26: '26°C',
    37: '37°C',
    50: '50°C',
    100: {
        style: {
            color: 'red',
        },
        label: <strong>100°C</strong>,
    },
};
const containerStyle = {
    width: '500px',
    margin: '0 auto',
    padding: '100px 0',
};

const Template: Story<StatusChangerProps> = (args) => (
    <div style={containerStyle}>
        <StatusChanger min={0} marks={marks} step={null} {...args} />
    </div>
);

export const Default = Template.bind({});
Default.args = {};
