import styled, { createGlobalStyle } from 'styled-components';

export const TimeRangePickerWrapper = styled.div`
    display: block;
    .rc-picker {
        border: 1px solid transparent;
        width: 100%;
        &.fow-range-picker {
            .rc-picker-input ~ .rc-picker-input {
                input {
                    padding-left: 0.8rem;
                }
            }
        }
        &-input {
            input {
                padding: ${(props) => props.theme.fow.spacing.xxsmall}
                    ${(props) => props.theme.fow.spacing.xsmall}
                    ${(props) => props.theme.fow.spacing.xxsmall}
                    ${(props) => props.theme.fow.spacing.xxlarge};
                width: 100%;
                border: 1px solid
                    ${(props) => props.theme.fow.colors.grey.transparent32};
                border-radius: 4px;
                color: ${(props) => props.theme.fow.colors.text.secondary};
                outline: none;
                font-size: 1.4rem;
                font-weight: 400;
                line-height: 2.4rem;
                transition: all 0.3s ease;
                height: 32px;
                ::placeholder {
                    color: ${(props) => props.theme.fow.colors.text.disabled};
                }
                :hover:not(:disabled) {
                    border: 1px solid
                        ${(props) =>
                            props.theme.fow.colors.primary.transparent48};
                }

                :focus-visible:not(:disabled) {
                    border: 1px solid
                        ${(props) =>
                            props.theme.fow.colors.primary.transparent48};
                    box-shadow: 0px 0px 0px 4px
                        ${(props) =>
                            props.theme.fow.colors.primary.transparent12};
                }

                :disabled {
                    border: 1px solid
                        ${(props) => props.theme.fow.colors.grey.transparent24};
                    color: ${(props) => props.theme.fow.colors.text.disabled};
                    cursor: not-allowed;
                }
            }
        }
        &-suffix {
            position: absolute;
            left: ${(props) => props.theme.fow.spacing.xsmall};
            top: ${(props) => props.theme.fow.spacing.xsmall};
            font-size: 12px;
        }
        &-range-separator {
            width: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        &-active-bar {
            display: none;
        }

        &-clear {
            width: 16px;
            height: 16px;
            background: ${(props) =>
                props.theme.fow.colors.error.transparent16};
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            color: ${(props) => props.theme.fow.colors.error.dark};
            font-size: 16px;
            right: ${(props) => props.theme.fow.spacing.xsmall};
            top: ${(props) => props.theme.fow.spacing.xsmall};
            &-btn {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 16px;
                height: 16px;
                &:after {
                    height: 16px;
                    line-height: 14px;
                }
            }
            svg {
                width: 6px;
            }
            > button {
                line-height: 16px;
                height: 16px;
            }
        }
    }
`;

export const TimePickerStyles = createGlobalStyle`
    .rc-picker-dropdown {
        box-shadow: 0 0;
        z-index: 2222;
        .rc-picker-range-arrow {
            top:5px;
            &:before {
                border-color: ${(props) =>
                    props.theme.fow.colors.greyDark.transparent12} ${(props) =>
    props.theme.fow.colors.greyDark.transparent12} transparent transparent;
    background: white;
            }
            &:after {
                border-color: 
                ${(props) => props.theme.fow.colors.common.white} ${(props) =>
    props.theme.fow.colors.common.white} transparent transparent;
            }
        }
        .rc-picker-panel-container {
            overflow: hidden;
            vertical-align: top;
            background: ${(props) => props.theme.fow.colors.common.white};
            border-radius: 8px;
            box-shadow: ${(props) => props.theme.fow.shadows.z12};
            transition: margin .3s;
            .rc-picker-panel {
                vertical-align: top;
                background: 0 0;
                border:none;
                border-radius: 0;
                .rc-picker-date-panel,
                .rc-picker-week-panel,
                .rc-picker-month-panel,
                .rc-picker-quarter-panel,
                .rc-picker-decade-panel,
                .rc-picker-year-panel {
                    width: 280px;
                    .rc-picker-header {
                        display: flex;
                        padding: 0 ${(props) => props.theme.fow.spacing.xsmall};
                        border-bottom: 1px solid ${(props) =>
                            props.theme.fow.colors.divider};
                        >button {
                            min-width: 1.6em;
                            font-size: 24px;
                            padding: 0;
                            color: ${(props) =>
                                props.theme.fow.colors.greyDark.light};
                            line-height: 40px;
                            background: 0 0;
                            border: 0;
                            cursor: pointer;
                            transition: color .3s;
                            &:hover {
                                color: ${(props) =>
                                    props.theme.fow.colors.primary.dark};
                            }
                        }
                        &-view {
                            flex: auto;
                            font-weight: 500;
                            line-height: 40px;
                            button {
                                cursor: pointer;
                                background: transparent;
                                transition: 200ms;
                                font-weight: 500;
                                line-height: 22px;
                                font-size: 14px;
                                color: ${(props) =>
                                    props.theme.fow.colors.greyDark.dark};
                                &:hover {
                                    color: ${(props) =>
                                        props.theme.fow.colors.primary.dark};
                                }
                                &:last-child {
                                    margin-left: 12px;
                                }
                            }
                        }
                    }
                    .rc-picker-body {
                        padding: 8px 12px;
                        .rc-picker-content {
                            width: 100%;
                            text-align: center;
                            table-layout: fixed;
                            border-collapse: collapse;
                            .rc-picker-week-panel-row {
                                &:hover {
                                    .rc-picker-cell {
                                        color:${(props) =>
                                            props.theme.fow.colors.greyDark
                                                .dark};
                                        background: ${(props) =>
                                            props.theme.fow.colors.greyLight
                                                .light};
                                                &-inner {
                                                    color: ${(props) =>
                                                        props.theme.fow.colors
                                                            .greyDark.dark};
                                                }
                                    }
                                }
                                .rc-picker-cell {
                                    &:first-child {
                                        border-radius:4px 0 0 4px;
                                    }
                                    &:last-child {
                                        border-radius: 0 4px 4px 0;
                                    } 
                                    &.rc-picker-cell-week {
                                        color:${(props) =>
                                            props.theme.fow.colors.greyDark
                                                .lighter};
                                    }
                                }
                                &-selected {
                                .rc-picker-cell {
                                    background: ${(props) =>
                                        props.theme.fow.colors.primary
                                            .transparent12};
                                        color:${(props) =>
                                            props.theme.fow.colors.primary
                                                .main};
                                                transition: none !important;
                                                &-inner {
                                                    background:transparent;
                                                    color:${(props) =>
                                                        props.theme.fow.colors
                                                            .primary.main};
                                                }
                                    &:first-child {
                                        border-radius:4px 0 0 4px;
                                    }
                                    &:last-child {
                                        border-radius: 0 4px 4px 0;
                                    }
                                }
                                .rc-picker-cell-week {
                                    color:${(props) =>
                                        props.theme.fow.colors.primary
                                            .transparent48};
                                }
                            }
                            }
                            thead {
                                >tr {
                                    th {
                                        font-weight: 400;
                                        font-size: 14px;
                                        line-height:24px;
                                        color: ${(props) =>
                                            props.theme.fow.colors.greyDark
                                                .main};
                                                padding: 0 0 ${(props) =>
                                                    props.theme.fow.spacing
                                                        .medium};
                                    }
                                }
                            }
                            td {
                                position: relative;
                                min-width: 24px;
                                font-weight: 400;
                                &.rc-picker-cell {
                                    .rc-picker-cell-inner {
                                        color: ${(props) =>
                                            props.theme.fow.colors.greyDark
                                                .lighter};
                                    }
                                }
                                &.rc-picker-cell-in-view {
                                    .rc-picker-cell-inner {
                                        color:${(props) =>
                                            props.theme.fow.colors.greyDark
                                                .main};
                                    }
                                    &.rc-picker-cell-selected {
                                        .rc-picker-cell-inner {
                                            background: transparent !important;
                                        }
                                    }
                                    &.rc-picker-cell-range-end {
                                        .rc-picker-cell-inner {
                                            background: transparent !important;
                                        }
                                    }
                                }
                                &.rc-picker-cell-today {
                                    .rc-picker-cell-inner {
                                        border-color: ${(props) =>
                                            props.theme.fow.colors.primary
                                                .main};
                                                border:transparent !important;
                                    }
                                }
                                &.rc-picker-cell-selected {
                                    .rc-picker-cell-inner {
                                        color: ${(props) =>
                                            props.theme.fow.colors.common
                                                .white};
                                        background: ${(props) =>
                                            props.theme.fow.colors.primary
                                                .main};
                                    }
                                }
                                &:hover {
                                    .rc-picker-cell-inner {
                                        color:${(props) =>
                                            props.theme.fow.colors.greyDark
                                                .dark};
                                        background: ${(props) =>
                                            props.theme.fow.colors.greyLight
                                                .light} !important;
                                    }
                                }
                                .rc-picker-cell-inner {
                                    position: relative;
                                    z-index: 2;
                                    display: inline-block;
                                    min-width: 24px;
                                    height: 24px;
                                    width: 100%;
                                    line-height: 24px;
                                    border-radius: 4px;
                                    transition: background .3s,border .3s;
                                    &:after {
                                        border-color: ${(props) =>
                                            props.theme.fow.colors.primary
                                                .main};
                                    }
                                    &:hover {
                                        background: transparent;
                                    }
                                }
                                &.rc-picker-cell-range-hover,
                                &.rc-picker-cell-range-hover-end,
                                &.rc-picker-cell-range-hover-start {
                                    &:after {
                                        border-color: ${(props) =>
                                            props.theme.fow.colors.primary
                                                .main} !important;
                                                top:0;
                                    }
                                }
                                &.rc-picker-cell-range-hover-start {
                                    &:after {
                                        border-radius: 4px 0 0 4px;
                                    }
                                }
                                &.rc-picker-cell-range-hover-end {
                                    &:after {
                                        border-radius: 0 4px 4px 0;
                                    }
                                }
                                &.rc-picker-cell-in-range {
                                    > .rc-picker-cell-inner {
                                        background: transparent !important;
                                    }
                                    &-start,
                                    &-end {
                                        > .rc-picker-cell-inner {
                                        background:${(props) =>
                                            props.theme.fow.colors.primary
                                                .light};
                                        }
                                    }
                                }
                                &.rc-picker-cell-range-start, 
                                &.rc-picker-cell-range-end, 
                                &.rc-picker-cell-selected {
                                    > .rc-picker-cell-inner {
                                        color: ${(props) =>
                                            props.theme.fow.colors.primary
                                                .main};
                                    background: ${(props) =>
                                        props.theme.fow.colors.primary
                                            .transparent12};
                                            border:transparent;
                                            border-radius: 4px;
                                    }
                                }
                            }
                        }
                    }
                }
                .rc-picker-time-panel {
                    &:hover {
                        color: ${(props) =>
                            props.theme.fow.colors.primary.dark};
                    }
                    border-left: 1px solid ${(props) =>
                        props.theme.fow.colors.divider};
                    .rc-picker-header {
                        &-view {
                            min-width: 1.6em;
                            font-size: 18px;
                            padding: 0;
                            color: ${(props) =>
                                props.theme.fow.colors.greyDark.dark};
                            line-height: 40px;
                            background: 0 0;
                            border: 0;
                            cursor: pointer;
                            transition: color .3s;
                            border-bottom: 1px solid ${(props) =>
                                props.theme.fow.colors.divider};
                        }
                    }
                    .rc-picker-content {
                        padding: ${(props) =>
                            props.theme.fow.spacing.xsmall} ${(props) =>
    props.theme.fow.spacing.small};
                        .rc-picker-time-panel-column {
                            border: 2px solid white;
                        }
                    }
                }
            }
            .rc-picker-footer {
                    cursor: pointer;
                    width: min-content;
                    min-width: 100%;
                    line-height: 38px;
                    text-align: center;
                    border-top: 1px solid ${(props) =>
                        props.theme.fow.colors.divider};
                    background-color:transparent;
                    font-size: 12px;
                    font-weight: 500;
                    color: ${(props) => props.theme.fow.colors.info.dark};
                    .rc-picker-ok {
                        button {
                            height: 38px;
                            margin: 0;
                            border: none;
                            padding: 0 ${(props) =>
                                props.theme.fow.spacing.medium};
                            background: ${(props) =>
                                props.theme.fow.colors.success.dark};
                            color: ${(props) =>
                                props.theme.fow.colors.common.white};
                            font-weight: 500;
                            cursor: pointer;
                            transition: 200ms;
                            &:hover {
                                background: ${(props) =>
                                    props.theme.fow.colors.success.darker};
                            }
                        }
                    }
                }
        }
        .rc-picker-range {
            &-wrapper {
                table {   
                    border-collapse: separate !important; 
                    border-spacing: 0 2px !important;
                    .rc-picker-cell {
                        &.rc-picker-cell-range-start {
                            background-color: ${(props) =>
                                props.theme.fow.colors.primary.transparent12};
                            border-radius: 4px 0 0 4px;
                            .rc-picker-cell-inner {
                                background-color: transparent !important;
                                &:hover {
                                    background: transparent !important;
                                    transition: none;
                                }
                            }
                            
                        }
                        &.rc-picker-cell-range-end {
                            background-color: ${(props) =>
                                props.theme.fow.colors.primary.transparent12};
                            border-radius: 0 4px 4px 0;
                            .rc-picker-cell-inner {
                                background-color: transparent !important;
                                &:hover {
                                    background: transparent !important;
                                    transition: none;
                                }
                            }
                            
                        }
                        &.rc-picker-cell-in-range {
                            background: ${(props) =>
                                props.theme.fow.colors.primary
                                    .transparent12} !important;
                                &:hover {
                                    background: ${(props) =>
                                        props.theme.fow.colors.primary
                                            .transparent12} !important;
                                }
                            .rc-picker-cell-inner {
                                background-color: transparent !important;
                                color: ${(props) =>
                                    props.theme.fow.colors.primary
                                        .main} !important;
                                &:hover {
                                    background: transparent !important;
                                    transition: none;
                                }
                            }
                            
                        }
                        &.rc-picker-cell-range-start-single {
                            .rc-picker-cell-inner {
                                background: ${(props) =>
                                    props.theme.fow.colors.primary
                                        .transparent12} !important;
                            }
                        }
                    }
                }
            }
        }
        .rc-picker-time-panel-column {
            ::-webkit-scrollbar {
            width: 2px;
            }
            ::-webkit-scrollbar-track {
            background: white; 
            }
            ::-webkit-scrollbar-thumb {
            background: ${(props) => props.theme.fow.colors.greyLight.darker}; 
            }
            ::-webkit-scrollbar-thumb:hover {
            background: ${(props) => props.theme.fow.colors.greyLight.darker}; 
            }
            li {
                margin: ${(props) => props.theme.fow.spacing.xxsmall} 0;
                .rc-picker-time-panel-cell-inner {
                    color:${(props) => props.theme.fow.colors.greyDark.main};
                }
                &.rc-picker-time-panel-cell-selected {
                    background: ${(props) =>
                        props.theme.fow.colors.primary
                            .transparent12} !important;
                        border-radius: 4px;
                        .rc-picker-time-panel-cell-inner {
                            color:${(props) =>
                                props.theme.fow.colors.primary.main};
                    }
                }
            }
        }
    }
`;
