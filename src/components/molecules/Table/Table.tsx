import React, { useEffect } from 'react';
import { useTable, useSortBy, useAsyncDebounce } from 'react-table';

import Subtitle from '../../atoms/Typography/Subtitle';
import Loader from '../../atoms/Loader';
import Icon from '../../atoms/Icon';

import {
    Container,
    Wrapper,
    StyledTable,
    Th,
    Td,
    Tr,
    EmptyPlaceholder,
    Sorters,
} from './styles';
import { Space } from '../../..';
import { theme } from '../../../theme/theme';

export interface TableProps {
    data: any[];
    columns: any[];
}

const Table = ({ data = [], columns = [], isLoading = false, onChange }) => {
    const tableInstance = useTable(
        { columns, data, manualSortBy: true },
        useSortBy,
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state: { sortBy },
    } = tableInstance;

    const onChangeDebounced = useAsyncDebounce(onChange, 100);

    useEffect(() => {
        onChangeDebounced({ sortBy });
    }, [onChangeDebounced, sortBy]);

    const handleSorter = (column) => {
        const { isSorted, isSortedDesc } = column;
        if (isSorted) {
            return (
                <Sorters>
                    <Icon
                        icon="caret-up"
                        size="lg"
                        color={isSortedDesc ? theme.fow.colors.grey.light : ''}
                    />
                    <Icon
                        icon="caret-down"
                        size="lg"
                        color={isSortedDesc ? '' : theme.fow.colors.grey.light}
                    />
                </Sorters>
            );
        }
        return (
            <Sorters>
                <Icon
                    icon="caret-up"
                    size="lg"
                    color={theme.fow.colors.grey.light}
                />
                <Icon
                    icon="caret-down"
                    size="lg"
                    color={theme.fow.colors.grey.light}
                />
            </Sorters>
        );
    };

    return (
        <Loader isLoading={isLoading} text="Loading..">
            <Container>
                <Wrapper>
                    <StyledTable {...getTableProps()}>
                        <thead>
                            {headerGroups.map((headerGroup) => (
                                <Tr {...headerGroup.getHeaderGroupProps()}>
                                    {headerGroup.headers.map((column) => (
                                        <Th
                                            canSort={column.canSort}
                                            {...column.getHeaderProps(
                                                column.getSortByToggleProps(),
                                            )}>
                                            <Subtitle level={1} color="black">
                                                {column.render('Header')}
                                                {column.canSort &&
                                                    handleSorter(column)}
                                            </Subtitle>
                                        </Th>
                                    ))}
                                </Tr>
                            ))}
                        </thead>
                        <tbody {...getTableBodyProps()}>
                            {data.length === 0 ? (
                                <tr>
                                    <EmptyPlaceholder colSpan={columns.length}>
                                        <Space direction="vertical">
                                            <Icon
                                                icon="inbox"
                                                size="4x"
                                                color={
                                                    theme.fow.colors.text
                                                        .disabled
                                                }
                                            />
                                            <Subtitle color="disabled">
                                                No data
                                            </Subtitle>
                                        </Space>
                                    </EmptyPlaceholder>
                                </tr>
                            ) : (
                                rows.map((row) => {
                                    prepareRow(row);
                                    return (
                                        <Tr {...row.getRowProps()}>
                                            {row.cells.map((cell) => (
                                                <Td {...cell.getCellProps()}>
                                                    <Subtitle
                                                        level={2}
                                                        color="black">
                                                        {cell.render('Cell')}
                                                    </Subtitle>
                                                </Td>
                                            ))}
                                        </Tr>
                                    );
                                })
                            )}
                        </tbody>
                    </StyledTable>
                </Wrapper>
            </Container>
        </Loader>
    );
};

export default Table;
