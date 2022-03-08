import React, { useRef } from 'react';
import { Story, Meta } from '@storybook/react';
import SelectV2 from './SelectV2';
import { Button } from '../../..';

export default {
    title: 'Molecules/SelectV2',
    component: SelectV2,
} as Meta;
const Template: Story = (args) => {
    return (
        <>
            {args.multiple ? (
                <SelectV2.Multiple {...args} />
            ) : (
                <SelectV2 {...args} />
            )}
        </>
    );
};

export const Default = Template.bind({});

Default.args = {
    onChange: (value, option) => {
        console.log(value, option);
    },
    onSelect: (value, option) => {
        console.log(value, option);
    },
    multiple: true,
    loader: false,
    noResultContent: 'Not Found',
    placeholder: 'Filter Name',
    styleType: 'light',
    options: [
        {
            text: 'Label 1',
            value: 'Label1',
        },
        {
            text: 'Label 2',
            value: 'Label2',
        },
        {
            text: 'Label 3',
            value: 'Label3',
        },
    ],
};

export const Async = Default.bind({});
Async.args = {
    onChange: (value, option) => {
        console.log(value, option);
    },
    onSelect: (value, option) => {
        console.log(value, option);
    },
    multiple: true,
    loader: false,
    noResultContent: 'Not Found',
    placeholder: 'Please select',
    options: [
        {
            text: 'Label 1',
            value: 'Label1',
        },
        {
            text: 'Label 2',
            value: 'Label2',
        },
        {
            text: 'Label 3',
            value: 'Label3',
        },
    ],
    content: (
        <>
            <Button
                onClick={() => console.log('add new item')}
                color="success"
                leftIcon="plus"
                size="small"
                variant="text">
                Add New
            </Button>
        </>
    ),
};
