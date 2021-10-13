import React, { useState, useMemo, useCallback } from 'react';
import { Story, Meta } from '@storybook/react';
import Table, { TableProps } from './Table';

export default {
    title: 'Molecules/Table',
    component: Table,
} as Meta;

const Template: Story<TableProps> = (args) => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const columns = useMemo(
        () => [
            {
                Header: 'ID',
                accessor: 'id', // accessor is the "key" in the data
                disableSortBy: true,
            },
            {
                Header: 'Email',
                accessor: 'email', // accessor is the "key" in the data
                Cell: ({ value }) => <a href={`mailto:${value}`}>{value}</a>,
                clickable: true, // hover state for clickable cells
            },
            {
                Header: 'First Name',
                accessor: 'first_name', // accessor is the "key" in the data
            },
            {
                Header: 'Last Name',
                accessor: 'last_name', // accessor is the "key" in the data
            },
        ],
        [],
    );

    const fetchAPIData = async ({ sortBy }) => {
        console.log(sortBy);
        try {
            setIsLoading(true);
            const response = await fetch(
                `https://reqres.in/api/users?per_page=10`,
            );
            const data = await response.json();

            setUsers(data.data);

            setIsLoading(false);
        } catch (e) {
            console.log('Error while fetching', e);
        }
    };

    const handleChange = useCallback(({ sortBy }) => {
        fetchAPIData({
            sortBy,
        });
    }, []);

    const renderAction = (row) => {
        return <div>{row.email}</div>;
    };

    return (
        <Table
            onChange={handleChange}
            data={users}
            columns={columns}
            isLoading={isLoading}
            renderAction={renderAction}
        />
    );
};

export const Default = Template.bind({});
