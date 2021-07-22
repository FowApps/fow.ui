import React from 'react';
import { Story, Meta } from '@storybook/react';
import AsyncPaginateSelect, {
    AsyncPaginateSelectProps,
} from './AsyncPaginateSelect';
import AsyncSelect, { AsyncSelectProps } from './AsyncSelect';
import StaticSelect, { BaseSelectProps } from './StaticSelect';

export default {
    title: 'Atoms/Select',
} as Meta;

type Additional = {
    page: number;
};

// Mocks
const staticOptions = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];

// Methods
const onChange = (value) => {
    console.log(value);
};

const loadOptionsAsync = async (searchQuery: string) => {
    const response = await fetch(
        `https://www.anapioficeandfire.com/api/houses?name=${searchQuery}&page=1&pageSize=10`,
    );
    const responseJSON = await response.json();

    return responseJSON;
};

const loadOptionsAsyncPaginate = async (
    searchQuery: string,
    loadedOptions: any[],
    { page }: Additional,
) => {
    const response = await fetch(
        `https://www.anapioficeandfire.com/api/houses?name=${searchQuery}&page=${page}&pageSize=10`,
    );
    const responseJSON = await response.json();

    return {
        options: responseJSON,
        hasMore: responseJSON.length >= 1,
        additional: {
            page: page + 1,
        },
    };
};

// Stories
const AsyncSelectTemplate: Story<AsyncSelectProps> = (args) => (
    <AsyncSelect {...args} />
);
export const WithAsyncSelect = AsyncSelectTemplate.bind({});
WithAsyncSelect.args = {
    placeholder: 'Please Select',
    valueKey: 'name',
    labelKey: 'name',
    isMulti: false,
    isSearchable: false,
    isDisabled: false,
    isClearable: false,
    onChange,
    loadOptions: loadOptionsAsync,
};

const AsyncPaginateSelectTemplate: Story<AsyncPaginateSelectProps> = (args) => (
    <AsyncPaginateSelect {...args} />
);
export const WithAsyncPaginate = AsyncPaginateSelectTemplate.bind({});
WithAsyncPaginate.args = {
    placeholder: 'Please Select',
    valueKey: 'name',
    labelKey: 'name',
    isMulti: false,
    isSearchable: false,
    isDisabled: false,
    isClearable: false,
    onChange,
    loadOptions: loadOptionsAsyncPaginate,
};

const StaticSelectTemplate: Story<BaseSelectProps> = (args) => (
    <StaticSelect {...args} />
);
export const WithStatic = StaticSelectTemplate.bind({});
WithStatic.args = {
    placeholder: 'Please Select',
    isMulti: false,
    isSearchable: false,
    isDisabled: false,
    isClearable: false,
    onChange,
    options: staticOptions,
};
