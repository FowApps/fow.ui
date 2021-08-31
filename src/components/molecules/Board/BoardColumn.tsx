import * as React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import {
    BoardColumnWrapper,
    BoardColumnTitle,
    BoardColumnContent,
} from './styles';

import BoardItem from './BoardItem';

type BoardColumnProps = {
    key: string;
    column: any;
    items: any;
};

const BoardColumn = (props: BoardColumnProps): JSX.Element => {
    console.log(props);
    return (
        <BoardColumnWrapper>
            <BoardColumnTitle>{props.column.title}</BoardColumnTitle>

            <Droppable droppableId={props.column.id}>
                {(provided, snapshot) => (
                    <BoardColumnContent
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        isDraggingOver={snapshot.isDraggingOver}>
                        {props.items.map((item: any, index: number) => (
                            <BoardItem
                                key={item.id}
                                item={item}
                                index={index}
                            />
                        ))}
                        {provided.placeholder}
                    </BoardColumnContent>
                )}
            </Droppable>
        </BoardColumnWrapper>
    );
};

export default BoardColumn;
