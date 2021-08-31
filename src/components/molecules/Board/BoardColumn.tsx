import * as React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { BoardColumnWrapper, BoardColumnContent } from './styles';

type BoardColumnProps = {
    key: string;
    column: any;
    items: any;
    droppableId: any;
    children: React.ReactNode;
};

const BoardColumn = (props: BoardColumnProps): JSX.Element => (
    <BoardColumnWrapper>
        <Droppable droppableId={props.droppableId} key={props.droppableId}>
            {(provided, snapshot) => (
                <BoardColumnContent
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    isDraggingOver={snapshot.isDraggingOver}>
                    {props.children}
                    {provided.placeholder}
                </BoardColumnContent>
            )}
        </Droppable>
    </BoardColumnWrapper>
);

export default BoardColumn;
