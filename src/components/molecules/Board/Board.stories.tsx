import React from 'react';
import { Story, Meta } from '@storybook/react';
import Board from './Board';
import { initialBoardData } from './mock/data';
// import mocks from './mock/board.json';

// console.log('mocks => ', mocks);
console.log('initialBoardData => ', initialBoardData);

export default {
    title: 'Molecules/Board',
    component: Board,
} as Meta;

const Template: Story = (args) => (
    <div>
        <Board columns={initialBoardData} {...args} />
    </div>
);

export const Default = Template.bind({});
Default.args = {};
