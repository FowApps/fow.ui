import React from 'react';
import { Story, Meta } from '@storybook/react';
import styled from 'styled-components';

import Space, { SpaceProps } from './Space';

export default {
    title: 'Atoms/Space',
    component: Space,
    argTypes: {
        align: {
            control: {
                type: 'select',
            },
            options: ['center', 'start', 'end', 'baseline'],
        },
        direction: {
            control: {
                type: 'select',
            },
            options: ['horizontal', 'vertical'],
        },
        size: {
            control: {
                type: 'select',
            },
            options: [
                'small',
                'medium',
                'large',
                'xlarge',
                'xxlarge',
                'xxxlarge',
            ],
        },
    },
} as Meta;

const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 6px;
    background-color: ${(props) => props.theme.fow.colors.primary.light};
    color: #fff;
`;

const Template: Story<SpaceProps> = (args) => (
    <>
        <Space {...args}>
            {new Array(20).fill(null).map((_, index) => (
                <Box key={index}>{index}</Box>
            ))}
        </Space>
    </>
);

export const Default = Template.bind({});
Default.args = {
    size: 'small',
    direction: 'horizontal',
    align: 'center',
    wrap: false,
};
