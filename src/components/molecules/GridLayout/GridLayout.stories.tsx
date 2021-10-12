import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import GridLayout from './GridLayout';

import Card from '../../atoms/Card';

const { Grid, DraggableGridItem } = GridLayout;

export default {
    title: 'Extras/GridLayout',
} as Meta;

const initialItems = [
    {
        id: 1,
        index: 1,
        content: "Tommy used to work on the docks, union's been on strike",
    },
    {
        id: 2,
        index: 2,
        content: "He's down on his luck, it's tough, so tough            ",
    },
    {
        id: 3,
        index: 3,
        content:
            "Gina works the diner all day working for her man She brings home her pay, for love, for love She says, we've got to hold on to what we've got It doesn't make a difference if we make it or not We've got each other and that's a lot for love We'll give it a shot Woah, we're half way there Woah, livin' on a prayer Take my hand, we'll make it I swear Woah, livin' on a prayer",
    },
    {
        id: 4,
        index: 4,
        content: 'She brings home her pay, for love, for love            ',
    },
    {
        id: 5,
        index: 5,
        content: "She says, we've got to hold on to what we've got       ",
    },
    {
        id: 6,
        index: 6,
        content: "It doesn't make a difference if we make it or not      ",
    },
    {
        id: 7,
        index: 7,
        content: "We've got each other and that's a lot for love         ",
    },
    {
        id: 8,
        index: 8,
        content: "We'll give it a shot                                   ",
    },
    {
        id: 9,
        index: 9,
        content: "Woah, we're half way there                             ",
    },
    {
        id: 10,
        index: 10,
        content:
            "Woah, we're half way there Woah, livin' on a prayer Take my hand, we'll make it I swear Woah, livin' on a prayer Livin' on a prayer Oh, we've got to hold on, ready or not You live for the fight when it's all that you've got Woah, we're half way there Woah, livin' on a prayer Take my hand, we'll make it I swear Woah, livin' on a prayer Woah, we're half way there Woah, livin' on a prayer Take my hand, we'll make it I swear Woah, livin' on a prayer",
    },
    {
        id: 11,
        index: 11,
        content: "Take my hand, we'll make it I swear                    ",
    },
    {
        id: 12,
        index: 12,
        content:
            "Once upon a time not so long ago Tommy used to work on the docks, union's been on strike He's down on his luck, it's tough, so tough Gina works the diner all day working for her man She brings home her pay, for love, for love She says, we've got to hold on to what we've got It doesn't make a difference if we make it or not We've got each other and that's a lot for love We'll give it a shot Woah, we're half way there Woah, livin' on a prayer Take my hand, we'll make it I swear Woah, livin' on a prayer Tommy's got his six-string in hock Now he's holding in what he used to make it talk So tough, it's tough Gina dreams of running away When she cries in the night, Tommy whispers Baby, it's okay, someday We've got to hold on to what we've got It doesn't make a difference if we make it or not We've got each other and that's a lot for love We'll give it a shot",
    },
    {
        id: 13,
        index: 13,
        content: "Tommy's got his six-string in hock                     ",
    },
    {
        id: 14,
        index: 14,
        content: "Now he's holding in what he used to make it talk       ",
    },
    {
        id: 15,
        index: 15,
        content: "So tough, it's tough                                   ",
    },
    {
        id: 16,
        index: 16,
        content: 'Gina dreams of running away                            ',
    },
    {
        id: 17,
        index: 17,
        content: 'When she cries in the night, Tommy whispers            ',
    },
    {
        id: 18,
        index: 18,
        content: "Baby, it's okay, someday                               ",
    },
    {
        id: 19,
        index: 19,
        content: "We've got to hold on to what we've got                 ",
    },
    {
        id: 20,
        index: 20,
        content: "It doesn't make a difference if we make it or not      ",
    },
    {
        id: 21,
        index: 21,
        content: "We've got each other and that's a lot for love         ",
    },
    {
        id: 22,
        index: 22,
        content: "We'll give it a shot                                   ",
    },
    {
        id: 23,
        index: 23,
        content: "Woah, we're half way there                             ",
    },
    {
        id: 24,
        index: 24,
        content: "Woah, livin' on a prayer                               ",
    },
    {
        id: 25,
        index: 25,
        content: "Take my hand, we'll make it I swear                    ",
    },
    {
        id: 26,
        index: 26,
        content: "Woah, livin' on a prayer                               ",
    },
    {
        id: 27,
        index: 27,
        content: "Livin' on a prayer                                     ",
    },
    {
        id: 28,
        index: 28,
        content: "Oh, we've got to hold on, ready or not                 ",
    },
    {
        id: 29,
        index: 29,
        content: "You live for the fight when it's all that you've got   ",
    },
    {
        id: 30,
        index: 30,
        content: "Woah, we're half way there                             ",
    },
    {
        id: 31,
        index: 31,
        content: "Woah, livin' on a prayer                               ",
    },
    {
        id: 32,
        index: 32,
        content: "Take my hand, we'll make it I swear                    ",
    },
    {
        id: 33,
        index: 33,
        content: "Woah, livin' on a prayer                               ",
    },
    {
        id: 34,
        index: 34,
        content: "Woah, we're half way there                             ",
    },
    {
        id: 35,
        index: 35,
        content: "Woah, livin' on a prayer                               ",
    },
    {
        id: 36,
        index: 36,
        content: "Take my hand, we'll make it I swear                    ",
    },
    {
        id: 37,
        index: 37,
        content: "Woah, livin' on a prayer                               ",
    },
    {
        id: 38,
        index: 38,
        content: "Woah, we're half way there                             ",
    },
    {
        id: 39,
        index: 39,
        content: "Woah, livin' on a prayer                               ",
    },
    {
        id: 40,
        index: 40,
        content: "Take my hand, we'll make it I swear                    ",
    },
    {
        id: 41,
        index: 41,
        content: "Woah, livin' on a prayer                               ",
    },
];

const sortItems = (a, b) => a.index - b.index;

const Template: Story = (args) => {
    const [list, setList] = useState(initialItems);

    const onDrop = (firstItemId, secondItemId) => {
        let newList = [...list];
        let firstItem = newList.find((i) => i.id === firstItemId);
        let secondItem = newList.find((i) => i.id === secondItemId);
        const firstIndex = firstItem.index;
        firstItem.index = secondItem.index;
        secondItem.index = firstIndex;
        setList(newList);
    };

    return (
        <Grid>
            {list.sort(sortItems).map((item) => (
                <DraggableGridItem key={item.id} item={item} onDrop={onDrop}>
                    <Card>{item.content}</Card>
                </DraggableGridItem>
            ))}
        </Grid>
    );
};

export const Default = Template.bind({});
Default.args = {};
