import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { BoardEl } from './styles';
import BoardColumn from './BoardColumn';
import BoardItem from './BoardItem';

export interface BoardProps {
    children: any;
    columns: any;
    itemsKey?: any;
    onDragEnd?: (result: any, data: unknown) => void;
}

const Board = ({
    columns,
    children,
    itemsKey,
    onDragEnd,
    ...rest
}: BoardProps): JSX.Element => {
    const [data, setData] = useState(columns);

    // Handle drag & drop
    const onDragEndBoard = (result: any) => {
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
            if (onDragEnd) {
                onDragEnd(result, data);
            }
        }
    };

    return (
        <BoardEl>
            <DragDropContext onDragEnd={onDragEndBoard} {...rest}>
                {children(data)}
            </DragDropContext>
        </BoardEl>
    );
};

Board.Item = BoardItem;
Board.Column = BoardColumn;

export default Board;
