import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { BoardEl } from './styles';
import BoardColumn from './BoardColumn';
import BoardItem from './BoardItem';

export interface BoardProps {
    children: any;
    columns: any;
    itemsKey?: any;
}

const Board = ({
    columns,
    children,
    itemsKey,
    ...rest
}: BoardProps): JSX.Element => {
    const [data, setData] = useState(columns);

    // Handle drag & drop
    const onDragEnd = (result: any) => {
        const { source, destination } = result;

        const columnStart = data.find(
            (column) => column.id === source.droppableId,
        );
        const columnFinish = data.find(
            (column) => column.id === destination.droppableId,
        );

        if (columnStart !== columnFinish) {
            const sourceItems = [...columnStart[itemsKey]];
            const destItems = [...columnFinish[itemsKey]];
            const [removed] = sourceItems.splice(source.index, 1);
            destItems.splice(destination.index, 0, removed);
            columnStart[itemsKey] = sourceItems;
            columnFinish[itemsKey] = destItems;
            setData([...data]);
        }
    };

    return (
        <BoardEl>
            <DragDropContext onDragEnd={onDragEnd} {...rest}>
                {children(data)}
            </DragDropContext>
        </BoardEl>
    );
};

Board.BoardItem = BoardItem;
Board.BoardColumn = BoardColumn;

export default Board;
