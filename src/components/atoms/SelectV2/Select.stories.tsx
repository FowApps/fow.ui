import React from 'react';
import { SelectProps } from 'rc-select';
import { Story, Meta } from '@storybook/react';

import Select from './Select';
import Icon from '../Icon';
import Space from '../Space';
import Button from '../Button';

export default {
    title: 'Atoms/SelectV2',
} as Meta;

const Default: Story<SelectProps> = (args) => <Select {...args} />;

export const Single = Default.bind({});
Single.args = {
    onChange: (value, option) => {
        console.log({ value, option });
    },
    onSelect: (value, option) => {
        console.log({ value, option });
    },
    placeholder: 'Please select',
    children: [
        <Select.Option value="Test">Test</Select.Option>,
        <Select.Option value="Test">Test</Select.Option>,
        <Select.Option value="Test">Test</Select.Option>,
        <Select.Option value="Test">Test</Select.Option>,
        <Select.Option value="Test">Test</Select.Option>,
        <Select.Option value="Test">Test</Select.Option>,
        <Select.Option value="Test">Test</Select.Option>,
        <Select.Option value="Test">Test</Select.Option>,
        <Select.Option value="Test">Test</Select.Option>,
        <Select.Option value="Test">Test</Select.Option>,
        <Select.Option value="Test">Test</Select.Option>,
        <Select.Option value="Test">Test</Select.Option>,
        <Select.Option value="Test">Test</Select.Option>,
    ],
};

export const Multiple = Default.bind({});
Multiple.args = {
    mode: 'multiple',
    onChange: (value, option) => {
        console.log({ value, option });
    },
    onSelect: (value, option) => {
        console.log({ value, option });
    },
    placeholder: 'Please select',
    children: [
        <Select.Option value="Test 1">Test 1</Select.Option>,
        <Select.Option value="Test 2">Test 2</Select.Option>,
        <Select.Option value="Test 3">Test 3</Select.Option>,
        <Select.Option value="Test 4">Test 4</Select.Option>,
        <Select.Option value="Test 5">Test 5</Select.Option>,
        <Select.Option value="Test 6">Test 6</Select.Option>,
    ],
};

export const Empty = Default.bind({});
Empty.args = {
    onChange: (value, option) => {
        console.log({ value, option });
    },
    onSelect: (value, option) => {
        console.log({ value, option });
    },
    placeholder: 'Please select',
    notFoundContent: (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '24px 0',
            }}>
            <Space direction="vertical">
                <Icon icon="database" size="4x" />
                <span>No data found.</span>
                <Button size="medium" leftIcon="plus">
                    Add New One
                </Button>
            </Space>
        </div>
    ),
};

export const Async = Default.bind({});
Async.args = {
    onChange: (value, option) => {
        console.log({ value, option });
    },
    onSelect: (value, option) => {
        console.log({ value, option });
    },
    defaultValue: 1,
    placeholder: 'Please select',
    loadOptions: async () => {
        const response = await fetch('https://reqres.in/api/users');
        const json = await response.json();
        return json.data.map((item) => ({
            value: item.id,
            text: item.first_name,
        }));
    },
};

export const AsyncMultple = Default.bind({});
AsyncMultple.args = {
    onChange: (value, option) => {
        console.log({ value, option });
    },
    onSelect: (value, option) => {
        console.log({ value, option });
    },
    defaultValue: [1, 2, 3],
    placeholder: 'Please select',
    mode: 'multiple',
    allowClear: true,
    loadOptions: async () => {
        const response = await fetch('https://reqres.in/api/users');
        const json = await response.json();
        return json.data.map((item) => ({
            value: item.id,
            text: item.first_name,
        }));
    },
};
