import React from 'react';
import { Story, Meta } from '@storybook/react';
import Calendar, { CalendarProps } from './Calendar';

export default {
    title: 'Molecules/Calendar',
    component: Calendar,
} as Meta;

const Template: Story<CalendarProps> = (args) => {
    return (
        <div>
            <Calendar {...args} />
        </div>
    );
};

export const Default = Template.bind({});
Default.args = {
    buttonText: {
        day: 'Gün',
        month: 'Ay',
        week: 'Hafta',
        today: 'Bugün',
        allDay: 'Tüm Gün',
    },
    allDayText: 'Tüm Gün',
    events: [
        {
            title: 'Event 1',
            start: '2021-08-07T15:30:00.000Z',
            iconName: 'phone',
            end: '2021-08-07T21:30:00.000Z',
            activity: {
                id: 1,
            },
        },
        {
            title: 'Event 2',
            start: '2021-08-03T15:30:00.000Z',
            iconName: 'phone',
            activity: {
                id: 1,
            },
        },
        {
            title: 'Event 3',
            start: '2021-08-05T17:30:00.000Z',
            iconName: 'phone',
            end: '2021-08-05T21:30:00.000Z',
            activity: {
                id: 2,
            },
        },
        {
            title: 'Event 4',
            start: '2021-08-10T17:30:00.000Z',
            iconName: 'phone',
            end: undefined,
            activity: {
                id: 2,
            },
        },
        {
            title: 'Event 5',
            start: '2021-08-10T06:30:00.000Z',
            iconName: 'phone',
            end: '2021-08-10T09:30:00.000Z',
            activity: {
                id: 2,
            },
        },
    ],
};
