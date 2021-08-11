import React, { createRef } from 'react';
import FullCalendar, {
    ButtonTextCompoundInput,
    CustomButtonInput,
    EventSourceInput,
} from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

import Icon from '../../atoms/Icon';
import Loader from '../../atoms/Loader';
import Space from '../../atoms/Space';
import Body from '../../atoms/Typography/Body';

import { Wrapper, EventWrapper } from './styles';
import { theme } from '../../../theme/theme';

export interface CalendarProps {
    onDateChange?: (startDate?: Date, endDate?: Date) => void;
    onEventClick?: (event: any) => void;
    onEventChange?: (event: any) => Promise<void>;
    buttonText?: ButtonTextCompoundInput;
    allDayText?: string;
    isLoading?: boolean;
    loadingText?: string;
    moreLinkText?: string;
    locale?: string;
    events: EventSourceInput;
}

export interface CalendarState {
    viewType: string;
    eventIsLoading: boolean;
    changedEventId: string;
}

const CALENDAR_HEIGHT = {
    STATIC: 650,
    AUTO: 'auto',
};

const CALENDAR_VIEW_TYPES = {
    WEEK: 'timeGridWeek',
    MONTH: 'dayGridMonth',
};

class Calendar extends React.Component<CalendarProps, CalendarState> {
    calendarRef = createRef<FullCalendar>();

    customButtons: { [key: string]: CustomButtonInput } = {
        today: {
            text: 'Today',
            click: () => {
                if (!this.props.isLoading) {
                    this.handleToday();
                }
            },
        },
        prev: {
            // @ts-ignore
            text: <Icon icon="arrow-left" />,
            click: () => {
                if (!this.props.isLoading) {
                    this.handlePrev();
                }
            },
        },
        next: {
            // @ts-ignore
            text: <Icon icon="arrow-right" />,
            click: () => {
                if (!this.props.isLoading) {
                    this.handleNext();
                }
            },
        },
    };

    constructor(props: CalendarProps) {
        super(props);
        this.state = {
            viewType: CALENDAR_VIEW_TYPES.WEEK,
            eventIsLoading: false,
            changedEventId: '',
        };
    }

    handleNext = () => {
        const api = this.calendarRef.current?.getApi();
        api?.next();
        const startDate = api?.view.currentStart;
        const endDate = api?.view.currentEnd;
        this.props?.onDateChange?.(startDate, endDate);
    };

    handlePrev = () => {
        const api = this.calendarRef.current?.getApi();
        api?.prev();
        const startDate = api?.view.currentStart;
        const endDate = api?.view.currentEnd;
        this.props?.onDateChange?.(startDate, endDate);
    };

    handleToday = () => {
        const api = this.calendarRef.current?.getApi();
        api?.today();
        const startDate = api?.view.currentStart;
        const endDate = api?.view.currentEnd;
        this.props?.onDateChange?.(startDate, endDate);
    };

    handleEventClick = (event: any) => {
        this.props.onEventClick?.(event);
    };

    handleEventChange = async (event: any) => {
        try {
            this.setState({
                eventIsLoading: true,
                changedEventId: event.event.extendedProps.activity.id,
            });
            await this.props.onEventChange?.(event);
        } catch (error) {
            this.setState({ eventIsLoading: false, changedEventId: '' });
        } finally {
            this.setState({ eventIsLoading: false, changedEventId: '' });
        }
    };

    handleChangeView = ({ view }) => {
        this.props.onDateChange?.(view.currentStart, view.currentEnd);
        this.setState({ viewType: view.type });
    };

    renderEvent = ({ event }: any) =>
        this.state.viewType === CALENDAR_VIEW_TYPES.MONTH ? (
            <Loader
                isLoading={
                    this.state.eventIsLoading &&
                    event.extendedProps.activity.id ===
                        this.state.changedEventId
                }>
                <EventWrapper
                    isLoading={
                        this.state.eventIsLoading &&
                        event.extendedProps.activity.id ===
                            this.state.changedEventId
                    }
                    title={event.title}>
                    <Space inline={false}>
                        <Icon
                            icon="circle"
                            size="xs"
                            color={theme.fow.colors.primary.main}
                        />
                        <Body level={2}>{event.title}</Body>
                    </Space>
                </EventWrapper>
            </Loader>
        ) : (
            <div className="fc-event-main-frame" title={event.title}>
                <div className="fc-event-title-container">
                    <div className="fc-event-title fc-sticky">
                        <Space
                            direction="vertical"
                            align="start"
                            size="xxsmall">
                            <div className="fc-event-dates">
                                {new Date(event.start)
                                    .toLocaleTimeString()
                                    .slice(0, -3)}
                                {event.end &&
                                    ` - ${new Date(event.end)
                                        .toLocaleTimeString()
                                        .slice(0, -3)}`}
                            </div>
                            <div>{event.title}</div>
                        </Space>
                    </div>
                </div>
            </div>
        );

    render() {
        return (
            <Loader
                isLoading={!!this.props.isLoading}
                text={this.props.loadingText || ''}>
                <Wrapper>
                    <FullCalendar
                        ref={this.calendarRef}
                        plugins={[
                            dayGridPlugin,
                            timeGridPlugin,
                            interactionPlugin,
                        ]}
                        initialView={CALENDAR_VIEW_TYPES.WEEK}
                        buttonText={this.props.buttonText}
                        customButtons={this.customButtons}
                        allDayText={this.props.allDayText}
                        locale={this.props.locale || 'tr'}
                        events={this.props.events}
                        eventClick={this.handleEventClick}
                        eventChange={this.handleEventChange}
                        eventContent={this.renderEvent}
                        dayMaxEvents={3}
                        eventColor={theme.fow.colors.primary.main}
                        displayEventTime
                        viewDidMount={this.handleChangeView}
                        moreLinkText={this.props.moreLinkText}
                        eventTimeFormat={{
                            hour: 'numeric',
                            minute: '2-digit',
                            meridiem: false,
                        }}
                        slotLabelFormat={{
                            hour: '2-digit',
                            minute: '2-digit',
                            omitZeroMinute: false,
                            meridiem: 'short',
                        }}
                        firstDay={1}
                        headerToolbar={{
                            start: 'today',
                            center: 'prev title next',
                            end: 'timeGridWeek dayGridMonth',
                        }}
                        editable={!this.state.eventIsLoading}
                        height={
                            this.state.viewType === CALENDAR_VIEW_TYPES.MONTH
                                ? CALENDAR_HEIGHT.AUTO
                                : CALENDAR_HEIGHT.STATIC
                        }
                        scrollTime={{ hour: new Date().getHours() }}
                    />
                </Wrapper>
            </Loader>
        );
    }
}

export default Calendar;
