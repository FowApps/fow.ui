import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { BoardEl } from './styles';
import BoardColumn from './BoardColumn';
import BoardItem from './BoardItem';

// export interface BoardProps {
//     // children: React.ReactNode | React.ReactNode[];
// }

// @ts-ignore
const Board = ({ columns, ...rest }): JSX.Element => {
    const [data, setData] = useState(columns);

    // Handle drag & drop
    const onDragEnd = (result: any) => {
        const { source, destination, draggableId } = result;

        if (!destination) {
            return;
        }

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }

        const columnStart = (data.columns as any)[source.droppableId];

        const columnFinish = (data.columns as any)[destination.droppableId];

        if (columnStart === columnFinish) {
            const newItemsIds = Array.from(columnStart.itemsIds);

            newItemsIds.splice(source.index, 1);

            newItemsIds.splice(destination.index, 0, draggableId);

            const newColumnStart = {
                ...columnStart,
                itemsIds: newItemsIds,
            };

            const newState = {
                ...data,
                columns: {
                    ...data.columns,
                    [newColumnStart.id]: newColumnStart,
                },
            };

            setData(newState);
        } else {
            const newStartItemsIds = Array.from(columnStart.itemsIds);

            newStartItemsIds.splice(source.index, 1);

            const newColumnStart = {
                ...columnStart,
                itemsIds: newStartItemsIds,
            };

            const newFinishItemsIds = Array.from(columnFinish.itemsIds);

            newFinishItemsIds.splice(destination.index, 0, draggableId);

            const newColumnFinish = {
                ...columnFinish,
                itemsIds: newFinishItemsIds,
            };

            const newState = {
                ...data,
                columns: {
                    ...data.columns,
                    [newColumnStart.id]: newColumnStart,
                    [newColumnFinish.id]: newColumnFinish,
                },
            };

            setData(newState);
        }
    };

    return (
        <BoardEl>
            <DragDropContext onDragEnd={onDragEnd} {...rest}>
                {data.columnsOrder.map((columnId) => {
                    // Get id of the current column
                    const column = (data.columns as any)[columnId];

                    // Get item belonging to the current column
                    const items = column.itemsIds.map(
                        (itemId: string) => (data.items as any)[itemId],
                    );

                    // Render the BoardColumn component
                    return (
                        <BoardColumn
                            key={column.id}
                            column={column}
                            items={items}
                        />
                    );
                })}
            </DragDropContext>
        </BoardEl>
    );
};

Board.BoardItem = BoardItem;
Board.BoardColumn = BoardColumn;

export default Board;
