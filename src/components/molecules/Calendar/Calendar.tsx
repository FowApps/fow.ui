import React, { createRef } from 'react';
import { DefaultTheme, withTheme } from 'styled-components';
import FullCalendar, {
    ButtonTextCompoundInput,
    CalendarApi,
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

export interface CalendarProps {
    /**
     * invoke when calendar date change(prev, next, today, views)
     */
    onDateChange?: (startDate?: Date, endDate?: Date) => void;
    /**
     * handle click event item
     */
    onEventClick?: (event: any) => void;
    /**
     * handle change event item(drag, drop, resize event)
     */
    onEventChange?: (event: any) => Promise<void>;
    /**
     * ui button text
     */
    buttonText?: ButtonTextCompoundInput;
    /**
     * all day slot text
     */
    allDayText?: string;
    /**
     * global loading
     */
    isLoading?: boolean;
    /**
     * global loading text
     */
    loadingText?: string;
    /**
     * show more event button text
     */
    moreLinkText?: string;
    /**
     * locale
     */
    locale?: string;
    /**
     * calendar events
     */
    events: EventSourceInput;
    /**
     * extended prop key for event object, using for find loading event
     */
    extendedPropKey?: string;
    theme: DefaultTheme;
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
    static defaultProps = {
        extendedPropKey: 'event',
        locale: 'en',
        moreLinkText: 'More',
        loadingText: 'Loading',
        allDayText: 'All Day',
        buttonText: {
            day: 'Day',
            month: 'Month',
            week: 'Week',
            today: 'Today',
            allDay: 'All Day',
        },
    };

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
        this.handleDateChange(api);
    };

    handlePrev = () => {
        const api = this.calendarRef.current?.getApi();
        api?.prev();
        this.handleDateChange(api);
    };

    handleToday = () => {
        const api = this.calendarRef.current?.getApi();
        api?.today();
        this.handleDateChange(api);
    };

    handleDateChange = (api?: CalendarApi) => {
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
                changedEventId:
                    event.event.extendedProps?.[this.props.extendedPropKey!]
                        ?.id,
            });
            await this.props.onEventChange?.(event);
        } catch (error) {
            this.resetEventState();
        } finally {
            this.resetEventState();
        }
    };

    handleChangeView = ({ view }) => {
        this.props.onDateChange?.(view.currentStart, view.currentEnd);
        this.setState({ viewType: view.type });
    };

    isLoading = (event: any) =>
        this.state.eventIsLoading &&
        event.extendedProps?.[this.props.extendedPropKey!]?.id ===
            this.state.changedEventId;

    resetEventState = () => {
        this.setState({ eventIsLoading: false, changedEventId: '' });
    };

    renderEvent = ({ event }: any) =>
        this.state.viewType === CALENDAR_VIEW_TYPES.MONTH ? (
            <Loader isLoading={this.isLoading(event)}>
                <EventWrapper
                    isLoading={this.isLoading(event)}
                    title={event.title}>
                    <Space inline={false}>
                        <Icon
                            icon="circle"
                            size="xs"
                            color={this.props.theme.fow.colors.primary.main}
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
                        eventColor={this.props.theme.fow.colors.primary.main}
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

export default withTheme(Calendar);
