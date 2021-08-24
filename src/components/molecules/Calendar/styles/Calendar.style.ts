import styled from 'styled-components';

type EventWrapperProps = {
    isDay?: boolean;
    isTime?: boolean;
    isLoading?: boolean;
};

export const Wrapper = styled.div`
    --fc-button-text-color: ${(props) => props.theme.fow.colors.text.primary};
    --fc-button-bg-color: ${(props) => props.theme.fow.colors.primary.main};
    --fc-button-active-bg-color: ${(props) =>
        props.theme.fow.colors.primary.dark};
    --fc-button-hover-bg-color: ${(props) =>
        props.theme.fow.colors.primary.dark};
    --fc-button-active-border-color: transparent;
    --fc-button-border-color: transparent;
    --fc-button-hover-border-color: transparent;
    --fc-today-bg-color: ${(props) =>
        props.theme.fow.colors.primary.transparent8};
    --fc-highlight-color: ${(props) =>
        props.theme.fow.colors.primary.transparent12};

    .fc-button {
        color: ${(props) => props.theme.fow.colors.common.white} !important;
        box-shadow: none !important;
        font-weight: 700;
        font-style: normal;
        font-size: 1.2rem;
        line-height: 1.8rem;
        transition: all 0.3s ease;
    }

    .fc-prev-button,
    .fc-next-button {
        background-color: transparent !important;
        color: ${(props) => props.theme.fow.colors.text.primary} !important;
    }

    .fc-today-button:disabled {
        cursor: not-allowed;
    }

    .fc-toolbar-chunk {
        display: flex;
        align-items: center;
    }

    .fc-header-toolbar {
        margin-bottom: 1rem !important;
    }

    .fc-toolbar-title {
        margin: 0;
        color: ${(props) => props.theme.fow.colors.text.primary} !important;
        font-weight: 600;
        font-style: normal;
        font-size: 2.4rem;
        line-height: 3.6rem;
    }

    .fc-timegrid-axis-cushion,
    .fc-timegrid-slot-label-frame {
        font-size: 1.2rem;
        text-align: center;
    }

    .fc-view-harness {
        background-color: ${(props) =>
            props.theme.fow.colors.common.white} !important;
    }

    .fc-col-header-cell-cushion {
        font-size: 1.4rem;
    }

    .fc-daygrid-event {
        transition: background 0.3s ease;
    }

    .fc-daygrid-event:hover {
        background: ${(props) => props.theme.fow.colors.primary.transparent16};
    }

    .fc-popover-title {
        font-weight: 500;
        font-size: 1.4rem;
    }

    .fc-daygrid-day-bottom:not(:empty) {
        position: relative;
        top: 1.6rem;
        left: 1.6rem;
        width: 14rem;
        margin-bottom: 1.6rem;
        border-radius: 6px;
        font-weight: 500;
        font-size: 1.2rem;
        padding-block: ${(props) => props.theme.fow.spacing.xxsmall};
        padding-inline: ${(props) => props.theme.fow.spacing.medium};
        background: #e1e1e1;
    }

    .fc-event-main {
        cursor: pointer;
        h3,
        svg {
            color: ${(props) => props.theme.fow.colors.common.white} !important;
        }
    }

    .fc-timegrid-event .fc-event-title {
        color: ${(props) => props.theme.fow.colors.common.white} !important;
        font-weight: 500;
    }

    .fc-event-past {
        opacity: 0.7;
    }

    .fc-timegrid-event-short .fc-event-dates {
        display: none;
    }
`;

export const EventWrapper = styled.div<EventWrapperProps>`
    width: 100%;
    cursor: pointer;
    padding-block: ${(props) => props.theme.fow.spacing.xxsmall};
    padding-inline: ${(props) => props.theme.fow.spacing.medium};

    h3 {
        display: inline-block;
        overflow: hidden !important;
        width: 100%;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
`;
