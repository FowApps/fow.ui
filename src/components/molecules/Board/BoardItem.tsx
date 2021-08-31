import * as React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { BoardItemEl } from './styles';

type BoardItemProps = {
    index: number;
    item: any;
};

const BoardItem = (props: BoardItemProps) => {
    console.log('props => ', props);
    return (
        <Draggable draggableId={props.item.id} index={props.index}>
            {(provided, snapshot) => (
                <BoardItemEl
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    isDragging={snapshot.isDragging}>
                    {props.item.content}
                </BoardItemEl>
            )}
        </Draggable>
    );
};

export default BoardItem;
