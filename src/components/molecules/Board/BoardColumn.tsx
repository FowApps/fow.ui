import * as React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { BoardColumnWrapper, BoardColumnContent } from './styles';

type BoardColumnProps = {
    key: string;
    droppableId?: any;
    children: React.ReactNode;
};

const BoardColumn = (props: BoardColumnProps): JSX.Element => (
    <BoardColumnWrapper>
        <Droppable droppableId={props.droppableId} key={props.droppableId}>
            {(provided) => (
                <BoardColumnContent
                    {...provided.droppableProps}
                    ref={provided.innerRef}>
                    {props.children}
                    {provided.placeholder}
                </BoardColumnContent>
            )}
        </Droppable>
    </BoardColumnWrapper>
);

export default BoardColumn;
