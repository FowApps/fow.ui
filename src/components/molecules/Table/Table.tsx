/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
// @ts-nocheck
import React, {
    useEffect,
    useLayoutEffect,
    useRef,
    useState,
    useContext,
    useCallback,
} from 'react';
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

import Body from '../../atoms/Typography/Body';
import Subtitle from '../../atoms/Typography/Subtitle';
import Loader, { LoaderProps } from '../../atoms/Loader';
import Icon from '../../atoms/Icon';

// language files
import { tr } from './locales/tr';
import { en } from './locales/en';

import { ConfigContext } from '../../../theme/FowThemeProvider';

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
    LeftShadow,
    RightShadow,
    ActionCard,
} from './styles';

import { Checkbox, Divider, Input, Menu, Space } from '../../..';

import Dropdown from '../Dropdown';
import Message from '../Message';
import useIsMountFirstTime from '../../../hooks/useIsMountFirstTime';

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
    initialPage?: number;
    loaderProps?: LoaderProps;
}

const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

const localization = {
    tr,
    en,
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
    initialPage = 1,
    loaderProps = {},
}: TableProps): JSX.Element => {
    const { language } = useContext(ConfigContext);
    const leftShadowRef = useRef();
    const rightShadowRef = useRef();

    const [pageSize, setPageSize] = useState(controlledPageSize);
    const [currentPage, setCurrentPage] = useState(initialPage);
    const [columnQuery, setColumnQuery] = useState('');

    const isMountFirstTime = useIsMountFirstTime();

    const scrollRef = useRef(null);

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
                                <Dropdown
                                    trigger="click"
                                    content={(close) => (
                                        <ActionCard onClick={close}>
                                            {renderAction(row.original)}
                                        </ActionCard>
                                    )}>
                                    {({ isOpen }) => (
                                        <ActionTrigger
                                            className={`action ${
                                                isOpen ? 'open' : ''
                                            }`}
                                            id={row.original?.id}>
                                            <Icon
                                                icon="ellipsis-v"
                                                color="white"
                                            />
                                        </ActionTrigger>
                                    )}
                                </Dropdown>
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

    const onChangeDebounced = useAsyncDebounce(onChange, 100);

    const handleChangeTableState = useCallback(
        ({ currPage, currPageSize, currSortBy }) => {
            onChangeDebounced({
                sortBy: currSortBy,
                page: currPage,
                pageSize: currPageSize,
            });
        },
        [onChangeDebounced],
    );

    useEffect(() => {
        if (!isMountFirstTime) {
            handleChangeTableState({
                currPage: currentPage,
                currPageSize: pageSize,
                currSortBy: sortBy,
            });
        }
    }, [sortBy]);

    useEffect(() => {
        const filteredColumns = visibleColumns.filter(
            (column) => column.id !== 'selection',
        );
        onChangeColumns?.(filteredColumns);
    }, [onChangeColumns, visibleColumns]);

    useEffect(() => {
        setHiddenColumns(
            columns
                .filter((column) =>
                    Object.getOwnPropertyDescriptor(column, 'isVisible')
                        ? !column.isVisible
                        : false,
                )
                .map((column) => column.accessor),
        );
    }, [setHiddenColumns, columns]);

    useLayoutEffect(() => {
        leftShadowRef.current.style.display = 'none';
        rightShadowRef.current.style.display = 'none';

        if (scrollRef.current?.scrollWidth > scrollRef.current?.clientWidth) {
            rightShadowRef.current.style.display = 'block';
        }
    }, []);

    useEffect(() => {
        setCurrentPage(initialPage);
    }, [initialPage]);

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

    const handleChangePagination = (currPage: number, currPageSize: number) => {
        handleChangeTableState({ currPage, currPageSize, currSortBy: sortBy });
        setCurrentPage(currPage);
    };

    const handleChangeSize = (currPageSize) => {
        handleChangeTableState({
            currPage: 1,
            currPageSize,
            currSortBy: sortBy,
        });
        setCurrentPage(1);
        setPageSize(currPageSize);
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

    const handleScrollTable = (e) => {
        const left = e.target.scrollLeft === 0;
        const right =
            e.target.scrollWidth - e.target.scrollLeft === e.target.clientWidth;
        if (left) {
            leftShadowRef.current.style.display = 'none';
        } else {
            leftShadowRef.current.style.display = 'block';
        }
        if (right) {
            rightShadowRef.current.style.display = 'none';
        } else {
            rightShadowRef.current.style.display = 'block';
        }
    };

    return (
        <Loader
            isLoading={isLoading}
            text={localization[language].loading}
            {...loaderProps}>
            <Container>
                {(typeof renderFilters === 'function' ||
                    showColumnControls) && (
                    <Space
                        inline={false}
                        align="center"
                        justify="space-between"
                        style={{ marginBottom: 16 }}>
                        <div>
                            {typeof renderFilters === 'function' &&
                                renderFilters()}
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
                                                        {
                                                            localization[
                                                                language
                                                            ].selectedColumns
                                                        }
                                                    </Subtitle>
                                                    <DragDropContext
                                                        onDragEnd={
                                                            handleColumnDragEnd
                                                        }>
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
                                                        onChange={(value) =>
                                                            setColumnQuery(
                                                                value,
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
                                                            message={
                                                                localization[
                                                                    language
                                                                ]
                                                                    .allColumnSelected
                                                            }
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
                                                                label={
                                                                    column.Header
                                                                }
                                                                key={column.id}
                                                                {...column.getToggleHiddenProps()}
                                                            />
                                                        ))}
                                                </Space>
                                            </div>
                                        </ColumnList>
                                    }>
                                    <Subtitle level={1} color="secondary">
                                        <Space>
                                            <Icon icon="columns" />
                                            <span>
                                                {localization[language].columns}
                                            </span>
                                        </Space>
                                    </Subtitle>
                                </Dropdown>
                            )}
                        </div>
                    </Space>
                )}
                <Wrapper
                    isLoading={isLoading && data.length === 0}
                    onScroll={handleScrollTable}
                    ref={scrollRef}>
                    <LeftShadow
                        ref={leftShadowRef}
                        hasPagination={showPagination}
                        hasHeader={showColumnControls || !!renderFilters}
                    />
                    <StyledTable {...getTableProps()}>
                        <thead>
                            {headerGroups.map((headerGroup) => (
                                <Tr {...headerGroup.getHeaderGroupProps()}>
                                    {headerGroup.headers.map((column) =>
                                        column.canSort ? (
                                            <Th
                                                canSort={column.canSort}
                                                {...column.getHeaderProps(
                                                    column.getSortByToggleProps(),
                                                )}>
                                                {column.render('Header')}
                                                {column.canSort &&
                                                    handleSorter(column)}
                                            </Th>
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
                    <RightShadow
                        ref={rightShadowRef}
                        hasPagination={showPagination}
                        hasHeader={showColumnControls || !!renderFilters}
                    />
                </Wrapper>
                {data.length === 0 && !isLoading && (
                    <EmptyPlaceholder>
                        <Space direction="vertical">
                            <Icon
                                icon="inbox"
                                size="4x"
                                color={theme.fow.colors.text.disabled}
                            />
                            <Subtitle color="disabled">
                                {localization[language].noData}
                            </Subtitle>
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
                            content={(close) => (
                                <Menu>
                                    {[10, 20, 30, 40, 50].map((size) => (
                                        <Menu.Item
                                            index={size}
                                            key={size}
                                            onClick={() => {
                                                handleChangeSize(size);
                                                close();
                                            }}>
                                            {size} /{' '}
                                            {localization[language].page}
                                        </Menu.Item>
                                    ))}
                                </Menu>
                            )}>
                            <SizePicker>
                                <Subtitle level={3}>
                                    <Space>
                                        <span>
                                            {pageSize} /{' '}
                                            {localization[language].page}
                                        </span>
                                        <Icon icon="chevron-down" />
                                    </Space>
                                </Subtitle>
                            </SizePicker>
                        </Dropdown>
                        <Body level={2}>
                            {localization[language].results}:{' '}
                            {(currentPage - 1) * pageSize} -
                            {currentPage * pageSize > totalCount
                                ? totalCount
                                : currentPage * pageSize}{' '}
                            / {totalCount}
                        </Body>
                    </PaginationWrapper>
                )}
            </Container>
        </Loader>
    );
};

export default withTheme(Table);
