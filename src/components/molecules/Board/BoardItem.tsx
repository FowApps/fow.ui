import * as React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { BoardItemEl } from './styles';

type BoardItemProps = {
    index: number;
    draggableId: any;
    children: React.ReactNode;
};

const BoardItem = (props: BoardItemProps) => {
    return (
        <Draggable draggableId={props.draggableId} index={props.index}>
            {(provided) => (
                <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    style={{
                        userSelect: 'none',
                        ...provided.draggableProps.style,
                    }}>
                    {props.children}
                </div>
            )}
        </Draggable>
    );
};

export default BoardItem;
