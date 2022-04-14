import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { Story, Meta } from '@storybook/react';

import Table, { TableProps } from './Table';

export default {
    title: 'Molecules/Table',
    component: Table,
} as Meta;

const Template: Story<TableProps> = (args) => {
    const [users, setUsers] = useState({
        data: [],
        total: 0,
    });
    const [isLoading, setIsLoading] = useState(true);
    const [pagination, setPagination] = useState({ page: 1, pageSize: 10 });

    const columns = useMemo(
        () => [
            {
                key: 'first_name',
                Header: 'First Name',
                accessor: 'first_name',
                disableSortBy: false,
            },
            {
                key: 'last_name',
                Header: 'Last Name',
                accessor: 'last_name',
                disableSortBy: true,
                isVisible: true,
            },
            {
                key: 'email',
                Header: 'Email',
                accessor: 'email',
                disableSortBy: true,
                isVisible: true,
            },
        ],
        [],
    );

    const fetchAPIData = async () => {
        try {
            setIsLoading(true);
            const response = await fetch(
                `https://reqres.in/api/users?page=${pagination.page}&per_page=${pagination.pageSize}`,
            );
            const data = await response.json();
            setUsers(data);
        } catch (e) {
            console.log('Error while fetching', e);
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (pagination) => {
        setPagination((currPagination) => ({
            ...currPagination,
            ...pagination,
        }));
    };

    useEffect(() => {
        fetchAPIData();
    }, [pagination]);

    const renderAction = (row) => {
        return <div style={{ padding: 24 }}>Action Buttons</div>;
    };

    return (
        <Table
            showColumnControls
            data={users?.data || []}
            columns={columns}
            renderAction={renderAction}
            onChange={handleChange}
            showPagination
            isLoading={isLoading}
            totalCount={users?.total || 0}
            manualSortBy
            initialPage={pagination.page}
            pageSize={pagination.pageSize}
            sortBy={[{ id: 'first_name', desc: false }]}
        />
    );
};

export const Default = Template.bind({});
