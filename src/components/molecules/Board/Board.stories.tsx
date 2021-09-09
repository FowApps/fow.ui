import React from 'react';
import { Story, Meta } from '@storybook/react';
import Board from './Board';
// @ts-ignore
import { mockBoard } from './mock/board';

export default {
    title: 'Molecules/Board',
    component: Board,
} as Meta;

const Template: Story = (args) => (
    <div>
        <Board columns={mockBoard} itemsKey="items" {...args}>
            {(columns) =>
                columns.map((item) => (
                    <Board.Column droppableId={item.id} key={item.id}>
                        <div>{item.title}</div>
                        {item.items.map((subitem, index) => (
                            <Board.Item draggableId={subitem.id} index={index}>
                                {subitem.content}
                            </Board.Item>
                        ))}
                    </Board.Column>
                ))
            }
        </Board>
    </div>
);

export const Default = Template.bind({});
Default.args = {};
