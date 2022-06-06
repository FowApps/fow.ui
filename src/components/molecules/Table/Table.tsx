/* eslint-disable @typescript-eslint/no-unused-vars */
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
    useFlexLayout,
    useColumnOrder,
    useRowSelect,
    usePagination,
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

function useGetLatest(obj) {
    const ref = React.useRef();
    ref.current = obj;

    return React.useCallback(() => ref.current, []);
}

export function useAsyncDebounce(defaultFn, defaultWait = 0) {
    const debounceRef = React.useRef({});

    const getDefaultFn = useGetLatest(defaultFn);
    const getDefaultWait = useGetLatest(defaultWait);

    return React.useCallback(
        async (...args) => {
            if (!debounceRef.current.promise) {
                debounceRef.current.promise = new Promise((resolve, reject) => {
                    debounceRef.current.resolve = resolve;
                    debounceRef.current.reject = reject;
                });
            }

            if (debounceRef.current.timeout) {
                clearTimeout(debounceRef.current.timeout);
            }

            debounceRef.current.timeout = setTimeout(async () => {
                delete debounceRef.current.timeout;
                try {
                    if (typeof defaultFn === 'function') {
                        debounceRef.current.resolve(
                            await getDefaultFn()(...args),
                        );
                    }
                } catch (err) {
                    debounceRef.current.reject(err);
                } finally {
                    delete debounceRef.current.promise;
                }
            }, getDefaultWait());

            return debounceRef.current.promise;
        },
        [getDefaultFn, getDefaultWait],
    );
}

export interface TableProps {
    /**
     * data which is fetched from an endpoint
     */
    data: any[];
    /**
     * columns of table
     */
    columns: any[];
    /**
     * global loading
     */
    isLoading?: boolean;
    /**
     * handle change
     */
    onChange?: ({ sortBy: any, page: number, pageSize: number }) => void;
    /**
     * handle change columns
     */
    onChangeColumns?: (columns: any[]) => void;
    /**
     * total count
     */
    totalCount?: number;
    /**
     * page size
     */
    pageSize?: number;
    renderAction?: (row: any) => React.ReactNode;
    renderFilters?: () => React.ReactNode;
    /**
     * column controls
     */
    showColumnControls?: boolean;
    /**
     * gives the ability of switching between page numbers
     */
    showPagination?: boolean;
    /**
     * manuel sort by
     */
    manualSortBy?: boolean;
    /**
     * manuel pagination
     */
    manualPagination?: boolean;
    /**
     * sort by
     */
    sortBy?: any[];
    /**
     * initial page
     */
    initialPage?: number;
    /**
     * props of loader
     */
    loaderProps?: LoaderProps;
    showSelection?: boolean;
    selectedRows?: any;
    notFoundMessage?: string;
    noDataStyle?: React.CSSProperties;
    onSelectedRowChange?: (rows: any[]) => void;
}

const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

const IndeterminateCheckbox = React.forwardRef(
    ({ indeterminate, ...rest }, ref) => {
        const defaultRef = React.useRef();
        const resolvedRef = ref || defaultRef;

        React.useEffect(() => {
            resolvedRef.current.indeterminate = indeterminate;
        }, [resolvedRef, indeterminate]);

        return (
            <>
                <Checkbox ref={resolvedRef} {...rest} />
            </>
        );
    },
);

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
    manualPagination = true,
    showSelection = false,
    selectedRows = {},
    onSelectedRowChange,
    noDataStyle,
    notFoundMessage,
}: TableProps): JSX.Element => {
    const { language } = useContext(ConfigContext);
    const leftShadowRef = useRef();
    const rightShadowRef = useRef();

    const [pageSize, setPageSize] = useState(controlledPageSize);
    const [currentPage, setCurrentPage] = useState(initialPage);
    const [columnQuery, setColumnQuery] = useState('');
    const [isDragTouched, setIsDragTouched] = useState(false);

    const isMountFirstTime = useIsMountFirstTime();

    const scrollRef = useRef(null);

    const tableInstance = useTable(
        {
            columns,
            data,
            manualSortBy,
            initialState: {
                sortBy: controlledSortBy,
                pageSize: controlledPageSize,
                pageIndex: 0,
                selectedRowIds: selectedRows,
            },
        },
        useSortBy,
        useFlexLayout,
        useColumnOrder,
        usePagination,
        useRowSelect,
        (hooks) => {
            hooks.allColumns.push((currColumns) => {
                let rowSelection: any, rowAction: any;

                if (typeof renderAction === 'function') {
                    rowAction = {
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
                                    <ActionCard>
                                        {renderAction(row.original, close)}
                                    </ActionCard>
                                )}>
                                {({ isOpen }) => (
                                    <ActionTrigger
                                        className={`action ${
                                            isOpen ? 'open' : ''
                                        }`}
                                        id={row.original?.id}>
                                        <Icon icon="ellipsis-v" color="white" />
                                    </ActionTrigger>
                                )}
                            </Dropdown>
                        ),
                    };
                }

                if (showSelection) {
                    rowSelection = {
                        id: 'indeterminate',
                        Header: ' ',
                        minWidth: 32,
                        width: 32,
                        maxWidth: 32,
                        actionCell: true,
                        disableResizing: true,
                        Cell: ({ row }) => (
                            <div
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                <IndeterminateCheckbox
                                    disabled={row.original.disabled}
                                    {...row.getToggleRowSelectedProps()}
                                />
                            </div>
                        ),
                    };
                }
                return [rowAction, rowSelection, ...currColumns].filter(
                    Boolean,
                );
            });
        },
    );

    const {
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize: setUncontrolledPageSize,
        selectedFlatRows,
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
        allColumns,
        visibleColumns,
        setColumnOrder,
        setHiddenColumns,
        state: {
            sortBy,
            pageSize: uncontrolledPageSize,
            selectedRowIds,
            pageIndex,
        },
    } = tableInstance;

    // console.log({
    //     canPreviousPage,
    //     canNextPage,
    //     pageOptions,
    //     pageCount,
    //     gotoPage,
    //     nextPage,
    //     previousPage,
    //     setPageSize: setUncontrolledPageSize,
    //     selectedFlatRows,
    //     selectedRowIds,
    // });

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
        if (isDragTouched) {
            const filteredColumns = visibleColumns.filter(
                (column) => column.id !== 'selection',
            );
            onChangeColumns?.(filteredColumns);
        }
    }, [onChangeColumns, visibleColumns, isDragTouched]);

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

    useEffect(() => {
        if (onSelectedRowChange) {
            const rows = selectedFlatRows?.map((row) => row.original);
            onSelectedRowChange(rows);
        }
    }, [selectedFlatRows]);

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
        if (manualPagination) {
            handleChangeTableState({
                currPage,
                currPageSize,
                currSortBy: sortBy,
            });
            setCurrentPage(currPage);
        } else {
            gotoPage(currPage - 1);
        }
    };

    const handleChangeSize = (currPageSize) => {
        if (manualPagination) {
            handleChangeTableState({
                currPage: 1,
                currPageSize,
                currSortBy: sortBy,
            });
            setCurrentPage(1);
            setPageSize(currPageSize);
        } else {
            gotoPage(0);
        }
        setUncontrolledPageSize(currPageSize);
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
        setIsDragTouched(true);
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

    const renderTableCellValue = (value) => {
        const regex = /<[^>]*>/g;
        if (typeof value === 'string' && value.match(regex)) {
            return value.replace(new RegExp('<[^>]*>', 'g'), '');
        }
        return value;
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
                                                                                                        disabled={
                                                                                                            allColumns.filter(
                                                                                                                (
                                                                                                                    c,
                                                                                                                ) =>
                                                                                                                    c.id !==
                                                                                                                        'selection' &&
                                                                                                                    c.isVisible,
                                                                                                            )
                                                                                                                .length ===
                                                                                                            1
                                                                                                        }
                                                                                                        label={
                                                                                                            column.Header
                                                                                                        }
                                                                                                        key={
                                                                                                            column.id
                                                                                                        }
                                                                                                        {...column.getToggleHiddenProps()}
                                                                                                        onChange={(
                                                                                                            e,
                                                                                                        ) => {
                                                                                                            column
                                                                                                                .getToggleHiddenProps()
                                                                                                                .onChange(
                                                                                                                    e,
                                                                                                                );
                                                                                                            setIsDragTouched(
                                                                                                                true,
                                                                                                            );
                                                                                                        }}
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
                                                                onChange={(
                                                                    e,
                                                                ) => {
                                                                    column
                                                                        .getToggleHiddenProps()
                                                                        .onChange(
                                                                            e,
                                                                        );
                                                                    setIsDragTouched(
                                                                        true,
                                                                    );
                                                                }}
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
                                {page.map((row) => {
                                    prepareRow(row);
                                    return (
                                        <Tr {...row.getRowProps()}>
                                            {row.cells.map((cell) => (
                                                <Td
                                                    title={renderTableCellValue(
                                                        cell.value,
                                                    )}
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
                    <EmptyPlaceholder
                        style={{
                            ...noDataStyle,
                        }}>
                        <Space direction="vertical">
                            <Icon
                                icon="inbox"
                                size="4x"
                                color={theme.fow.colors.text.disabled}
                            />
                            <Subtitle color="disabled">
                                {notFoundMessage ||
                                    localization[language].noData}
                            </Subtitle>
                        </Space>
                    </EmptyPlaceholder>
                )}
                {(showPagination || !manualPagination) && (
                    <PaginationWrapper>
                        <Pagination
                            defaultPageSize={
                                !manualPagination
                                    ? uncontrolledPageSize
                                    : controlledPageSize
                            }
                            pageSize={
                                !manualPagination
                                    ? uncontrolledPageSize
                                    : pageSize
                            }
                            current={
                                !manualPagination ? pageIndex + 1 : currentPage
                            }
                            defaultCurrent={!manualPagination ? 0 : 1}
                            onChange={handleChangePagination}
                            total={
                                !manualPagination ? data?.length : totalCount
                            }
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
                                            {!manualPagination
                                                ? uncontrolledPageSize
                                                : pageSize}{' '}
                                            / {localization[language].page}
                                        </span>
                                        <Icon icon="chevron-down" />
                                    </Space>
                                </Subtitle>
                            </SizePicker>
                        </Dropdown>
                        <Body level={2}>
                            {localization[language].results}:{' '}
                            {manualPagination ? (
                                <span>
                                    {(currentPage - 1) * pageSize} -
                                    {currentPage * pageSize > totalCount
                                        ? totalCount
                                        : currentPage * pageSize}{' '}
                                    / {totalCount}
                                </span>
                            ) : (
                                <span>
                                    {pageIndex * uncontrolledPageSize} -
                                    {(pageIndex + 1) * uncontrolledPageSize >
                                    data.length
                                        ? data.length
                                        : (pageIndex + 1) *
                                          uncontrolledPageSize}
                                    / {data.length}
                                </span>
                            )}
                        </Body>
                    </PaginationWrapper>
                )}
            </Container>
        </Loader>
    );
};

export default withTheme(Table);
