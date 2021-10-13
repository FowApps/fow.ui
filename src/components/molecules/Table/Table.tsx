// @ts-nocheck
import React, { useEffect } from 'react';
import {
    useTable,
    useSortBy,
    useAsyncDebounce,
    useFlexLayout,
} from 'react-table';
import { withTheme } from 'styled-components';

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
    ActionHeader,
    ActionTrigger,
} from './styles';
import { Popover, Space, Tooltip } from '../../..';

export interface TableProps {
    data: any[];
    columns: any[];
}

const Table = ({
    data = [],
    columns = [],
    isLoading = false,
    onChange,
    theme,
    renderAction,
}) => {
    const defaultColumn = React.useMemo(
        () => ({
            minWidth: 32,
            width: 150,
            maxWidth: 200,
        }),
        [],
    );
    const tableInstance = useTable(
        { columns, data, defaultColumn, manualSortBy: true },
        useSortBy,
        useFlexLayout,
        (hooks) => {
            hooks.allColumns.push((currColumns) => {
                if (typeof renderAction === 'function') {
                    return [
                        {
                            id: 'selection',
                            disableResizing: true,
                            minWidth: 32,
                            width: 32,
                            maxWidth: 32,
                            actionCell: true,
                            Header: () => (
                                <ActionHeader>
                                    <Icon icon="ellipsis-v" />
                                </ActionHeader>
                            ),
                            Cell: ({ row }) => (
                                <Popover
                                    trigger="click"
                                    placement="bottomLeft"
                                    content={renderAction(row.original)}
                                    onVisibleChange={(visiblity) => {
                                        const cellNode =
                                            document.getElementById(
                                                row.original?.id,
                                            );
                                        if (visiblity) {
                                            cellNode.style.backgroundColor =
                                                theme.fow.colors.primary.main;
                                            cellNode.style.opacity = 1;
                                        } else {
                                            cellNode.style.backgroundColor =
                                                theme.fow.colors.common.white;
                                            cellNode.style.opacity = 0;
                                        }
                                    }}>
                                    <ActionTrigger
                                        className="action"
                                        id={row.original?.id}>
                                        <Icon icon="ellipsis-v" color="white" />
                                    </ActionTrigger>
                                </Popover>
                            ),
                        },
                        ...currColumns,
                    ];
                }
                return [...currColumns];
            });
        },
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
                        color={
                            isSortedDesc
                                ? theme.fow.colors.grey.light
                                : theme.fow.colors.primary.main
                        }
                    />
                    <Icon
                        icon="caret-down"
                        size="lg"
                        color={
                            isSortedDesc
                                ? theme.fow.colors.primary.main
                                : theme.fow.colors.grey.light
                        }
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
                                    {headerGroup.headers.map((column) =>
                                        column.canSort ? (
                                            <Tooltip
                                                placement="top"
                                                overlay="Click to sort">
                                                <Th
                                                    canSort={column.canSort}
                                                    {...column.getHeaderProps(
                                                        column.getSortByToggleProps(),
                                                    )}>
                                                    {column.render('Header')}
                                                    {column.canSort &&
                                                        handleSorter(column)}
                                                </Th>
                                            </Tooltip>
                                        ) : (
                                            <Th
                                                isActionCell={column.actionCell}
                                                {...column.getHeaderProps(
                                                    column.getSortByToggleProps(),
                                                )}>
                                                {column.render('Header')}
                                            </Th>
                                        ),
                                    )}
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
                                                <Td
                                                    isActionCell={
                                                        cell.column?.actionCell
                                                    }
                                                    className={
                                                        cell.column
                                                            ?.clickable &&
                                                        'clickable'
                                                    }
                                                    {...cell.getCellProps()}>
                                                    {cell.render('Cell')}
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

export default withTheme(Table);
