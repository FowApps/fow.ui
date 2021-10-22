/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
// @ts-nocheck
import React, { useEffect, useState } from 'react';
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';

import {
    useTable,
    useSortBy,
    useAsyncDebounce,
    useFlexLayout,
    useColumnOrder,
} from 'react-table';
import { withTheme } from 'styled-components';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

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
    SizePicker,
    PaginationWrapper,
    ColumnList,
    OrderDots,
} from './styles';

import {
    Checkbox,
    Divider,
    Input,
    Menu,
    Popover,
    Space,
    Tooltip,
} from '../../..';
import Link from '../../atoms/Typography/Link';
import Body from '../../atoms/Typography/Body';
import Dropdown from '../Dropdown';
import Message from '../Message';

export interface TableProps {
    data: any[];
    columns: any[];
    isLoading?: boolean;
    onChange?: ({ sortBy: any, page: number, pageSize: number }) => void;
    onChangeColumns?: (columns: any[]) => void;
    totalCount?: number;
    pageSize?: number;
    renderAction?: (row: any) => React.ReactNode;
    renderFilters?: () => React.ReactNode;
    showColumnControls?: boolean;
    showPagination?: boolean;
    manualSortBy?: boolean;
    manualPagination?: boolean;
    sortBy?: any[];
}

const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

const Table = ({
    data = [],
    columns = [],
    isLoading,
    pageSize: controlledPageSize = 10,
    onChange,
    onChangeColumns,
    theme,
    totalCount,
    renderAction,
    renderFilters,
    showColumnControls = false,
    showPagination = false,
    manualSortBy = false,
    sortBy: controlledSortBy = [],
}: TableProps): JSX.Element => {
    const [pageSize, setPageSize] = useState(controlledPageSize);
    const [currentPage, setCurrentPage] = useState(1);
    const [columnQuery, setColumnQuery] = useState('');

    const tableInstance = useTable(
        {
            columns,
            data,
            manualSortBy,
            initialState: { sortBy: controlledSortBy },
        },
        useSortBy,
        useFlexLayout,
        useColumnOrder,
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
        allColumns,
        visibleColumns,
        setColumnOrder,
        setHiddenColumns,
        state: { sortBy },
    } = tableInstance;

    const onChangeDebounced = useAsyncDebounce(onChange, 300);

    useEffect(() => {
        onChangeDebounced({
            sortBy,
            page: currentPage,
            pageSize,
        });
    }, [onChangeDebounced, sortBy, currentPage, pageSize]);

    useEffect(() => {
        const filteredColumns = visibleColumns.filter(
            (column) => column.id !== 'selection',
        );
        onChangeColumns?.(filteredColumns);
    }, [onChangeColumns, visibleColumns]);

    useEffect(() => {
        setHiddenColumns(
            columns
                .filter((column) => !column.isVisible)
                .map((column) => column.accessor),
        );
    }, [setHiddenColumns, columns]);

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

    const handleChangePagination = (current) => {
        setCurrentPage(current);
    };

    const handleChangeSize = (size) => {
        if (size > totalCount) {
            setCurrentPage(1);
        }
        setPageSize(size);
    };

    const paginationRenderer = (current, type, element) => {
        if (type === 'prev') {
            return <Icon icon="chevron-left" />;
        }
        if (type === 'next') {
            return <Icon icon="chevron-right" />;
        }
        if (type === 'page') {
            return <Subtitle level={3}>{current}</Subtitle>;
        }
        return element;
    };

    const handleColumnDragEnd = (result) => {
        if (!result.destination) {
            return;
        }

        const orderedColumns = reorder(
            visibleColumns.filter(
                (column) => column.id !== 'selection' && column.isVisible,
            ),
            result.source.index,
            result.destination.index,
        );

        if (renderAction) {
            orderedColumns.unshift({ id: 'selection' });
        }

        setColumnOrder(orderedColumns.map((col) => col.id));
    };

    return (
        <Container>
            <Space
                inline={false}
                align="center"
                justify="space-between"
                style={{ marginBottom: 16 }}>
                <div>
                    {typeof renderFilters === 'function' && renderFilters()}
                </div>
                <div>
                    {showColumnControls && (
                        <Dropdown
                            trigger="click"
                            content={
                                <ColumnList>
                                    <div>
                                        <Space
                                            direction="vertical"
                                            align="start"
                                            size="xsmall">
                                            <Subtitle level={1}>
                                                Table Of Contents
                                            </Subtitle>
                                            <DragDropContext
                                                onDragEnd={handleColumnDragEnd}>
                                                <Droppable droppableId="droppable">
                                                    {(dropProvided) => (
                                                        <div
                                                            {...dropProvided.droppableProps}
                                                            ref={
                                                                dropProvided.innerRef
                                                            }>
                                                            <Space
                                                                direction="vertical"
                                                                align="start"
                                                                size="xsmall">
                                                                {allColumns
                                                                    .filter(
                                                                        (
                                                                            column,
                                                                        ) =>
                                                                            column.id !==
                                                                                'selection' &&
                                                                            column.isVisible,
                                                                    )
                                                                    .map(
                                                                        (
                                                                            column,
                                                                            idx,
                                                                        ) => (
                                                                            <Draggable
                                                                                key={
                                                                                    column.id
                                                                                }
                                                                                draggableId={
                                                                                    column.id
                                                                                }
                                                                                index={
                                                                                    idx
                                                                                }>
                                                                                {(
                                                                                    dragProvided,
                                                                                ) => (
                                                                                    <div
                                                                                        ref={
                                                                                            dragProvided.innerRef
                                                                                        }
                                                                                        {...dragProvided.draggableProps}
                                                                                        {...dragProvided.dragHandleProps}>
                                                                                        <Space>
                                                                                            <OrderDots>
                                                                                                <Icon icon="fow-order-dots" />
                                                                                            </OrderDots>
                                                                                            <Checkbox
                                                                                                label={
                                                                                                    column.Header
                                                                                                }
                                                                                                key={
                                                                                                    column.id
                                                                                                }
                                                                                                {...column.getToggleHiddenProps()}
                                                                                            />
                                                                                        </Space>
                                                                                        {
                                                                                            dragProvided.placeholder
                                                                                        }
                                                                                    </div>
                                                                                )}
                                                                            </Draggable>
                                                                        ),
                                                                    )}
                                                            </Space>
                                                        </div>
                                                    )}
                                                </Droppable>
                                            </DragDropContext>
                                        </Space>
                                    </div>
                                    <Divider
                                        direction="vertical"
                                        size="small"
                                        style={{
                                            flex: 'unset',
                                            height: '100%',
                                        }}
                                    />
                                    <div>
                                        <Space
                                            direction="vertical"
                                            align="start"
                                            size="xsmall">
                                            <Input
                                                placeholder="Search"
                                                suffixIcon="search"
                                                onChange={(e) =>
                                                    setColumnQuery(
                                                        e.target.value,
                                                    )
                                                }
                                                value={columnQuery}
                                            />
                                            {allColumns
                                                .filter(
                                                    (column) =>
                                                        column.id !==
                                                            'selection' &&
                                                        !column.isVisible,
                                                )
                                                .filter(
                                                    (column) =>
                                                        column.Header.toLowerCase().indexOf(
                                                            columnQuery.toLocaleLowerCase(),
                                                        ) > -1,
                                                ).length === 0 && (
                                                <Message
                                                    message="All columns are selected."
                                                    type="empty"
                                                    width="100"
                                                />
                                            )}
                                            {allColumns
                                                .filter(
                                                    (column) =>
                                                        column.id !==
                                                            'selection' &&
                                                        !column.isVisible,
                                                )
                                                .filter(
                                                    (column) =>
                                                        column.Header.toLowerCase().indexOf(
                                                            columnQuery.toLocaleLowerCase(),
                                                        ) > -1,
                                                )
                                                .map((column) => (
                                                    <Checkbox
                                                        label={column.Header}
                                                        key={column.id}
                                                        {...column.getToggleHiddenProps()}
                                                    />
                                                ))}
                                        </Space>
                                    </div>
                                </ColumnList>
                            }>
                            <Link leftIcon="columns">Columns</Link>
                        </Dropdown>
                    )}
                </div>
            </Space>
            <Loader isLoading={isLoading} text="Loading..">
                <Wrapper isLoading={isLoading && data.length === 0}>
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
                        {data.length > 0 && (
                            <tbody {...getTableBodyProps()}>
                                {rows.map((row) => {
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
                                })}
                            </tbody>
                        )}
                    </StyledTable>
                </Wrapper>
            </Loader>
            {data.length === 0 && !isLoading && (
                <EmptyPlaceholder>
                    <Space direction="vertical">
                        <Icon
                            icon="inbox"
                            size="4x"
                            color={theme.fow.colors.text.disabled}
                        />
                        <Subtitle color="disabled">No data</Subtitle>
                    </Space>
                </EmptyPlaceholder>
            )}
            {showPagination && (
                <PaginationWrapper>
                    <Pagination
                        defaultPageSize={controlledPageSize}
                        pageSize={pageSize}
                        current={currentPage}
                        defaultCurrent={1}
                        onChange={handleChangePagination}
                        total={totalCount}
                        showSizeChanger
                        itemRender={paginationRenderer}
                        showTitle={false}
                    />
                    <Dropdown
                        trigger="click"
                        closeAfterClickContent
                        content={
                            <Menu>
                                {[10, 20, 30, 40, 50].map((size) => (
                                    <Menu.Item
                                        index={size}
                                        key={size}
                                        onClick={() => {
                                            handleChangeSize(size);
                                        }}>
                                        {size} / page
                                    </Menu.Item>
                                ))}
                            </Menu>
                        }>
                        <SizePicker>
                            <Subtitle level={3}>
                                <Space>
                                    <span>{pageSize} / page</span>
                                    <Icon icon="chevron-down" />
                                </Space>
                            </Subtitle>
                        </SizePicker>
                    </Dropdown>
                    <Body level={2}>
                        Results: {(currentPage - 1) * pageSize} -
                        {currentPage * pageSize > totalCount
                            ? totalCount
                            : currentPage * pageSize}{' '}
                        / {totalCount}
                    </Body>
                </PaginationWrapper>
            )}
        </Container>
    );
};

export default withTheme(Table);
