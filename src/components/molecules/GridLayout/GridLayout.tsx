import React, { useRef, useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import MultiBackend from 'react-dnd-multi-backend';

import HTML5toTouch from '../../../config/dndConfig';
import { useDragAndDrop } from '../../../hooks/useDragAndDrop/useDragAndDrop';
import { GridItemWrapper, GridWrapper } from './styles';

const adjustGridItemsHeight = (grid) => {
    const items = grid.children;

    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const rowHeight = parseInt(
            window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'),
            10,
        );
        const rowGap = parseInt(
            window.getComputedStyle(grid).getPropertyValue('grid-row-gap'),
            10,
        );
        const rowSpan = Math.ceil(
            (item.firstChild.getBoundingClientRect().height + rowGap) /
                (rowHeight + rowGap),
        );
        item.style.gridRowEnd = `span ${rowSpan}`;
    }
};

const createDragHoverCallback =
    (ref, currentItem, onDrop) => (otherItem, monitor) => {
        const dragIndex = otherItem.index;
        const hoverIndex = currentItem.index;

        if (dragIndex === hoverIndex) {
            return;
        }

        const hoverBoundingRect = ref.current.getBoundingClientRect();
        const hoverMiddleY =
            (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
        const hoverMiddleX =
            (hoverBoundingRect.right - hoverBoundingRect.left) / 2;
        const clientOffset = monitor.getClientOffset();
        const hoverClientY = clientOffset.y - hoverBoundingRect.top;
        const hoverClientX = clientOffset.x - hoverBoundingRect.right;

        if (
            dragIndex < hoverIndex &&
            hoverClientY < hoverMiddleY &&
            hoverClientX < hoverMiddleX
        ) {
            return;
        }

        if (
            dragIndex > hoverIndex &&
            hoverClientY > hoverMiddleY &&
            hoverClientX > hoverMiddleX
        ) {
            return;
        }

        onDrop(otherItem.id, currentItem.id);

        otherItem.index = currentItem.index;
    };

const Grid = ({ children }) => {
    const gridRef = useRef(null);

    useEffect(() => {
        const grid = gridRef.current;
        adjustGridItemsHeight(grid);
    });

    return (
        <DndProvider backend={MultiBackend} options={HTML5toTouch}>
            <GridWrapper ref={gridRef}>{children}</GridWrapper>
        </DndProvider>
    );
};

const GridItem = ({ children }) => (
    <GridItemWrapper>
        <div>{children}</div>
    </GridItemWrapper>
);

const DraggableGridItem = ({ item, onDrop, children, ...rest }) => {
    const ref = useRef(null);

    const { isDragging } = useDragAndDrop(ref, {
        ...item,
        hover: createDragHoverCallback(ref, item, onDrop),
    });

    const opacity = isDragging ? 0 : 1;
    return (
        <GridItemWrapper {...rest} ref={ref} style={{ opacity }}>
            {children}
        </GridItemWrapper>
    );
};

Grid.displayName = 'Grid';
GridItem.displayName = 'GridItem';
DraggableGridItem.displayName = 'DraggableGridItem';

const GridLayout = {
    Grid,
    GridItem,
    DraggableGridItem,
};

export default GridLayout;
