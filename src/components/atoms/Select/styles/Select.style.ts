import styled, { css } from 'styled-components';

type WrapperProps = {
    size: 'medium' | 'large';
    hasValidationError?: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
    .rc-select {
        display: inline-block;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 24px;
        width: 100%;
        position: relative;
        color: ${(props) => props.theme.fow.colors.greyDark.light};
        background: #fff;

        &:not(.rc-select-disabled):hover {
            .rc-select-arrow {
                color: ${(props) =>
                    props.theme.fow.colors.greyDark.light} !important;
            }
        }
    }
    .rc-select-disabled,
    .rc-select-disabled input {
        cursor: not-allowed;
    }
    .rc-select-disabled .rc-select-selector {
        opacity: 0.3;
    }
    .rc-select-disabled .rc-select-arrow {
        color: ${(props) => props.theme.fow.colors.greyLight.main} !important;
    }
    .rc-select-selection-item {
        transition: all 0.3s ease;
    }
    .rc-select-loading .rc-select-selection-item {
        opacity: 0;
    }
    .rc-select-show-arrow.rc-select-loading .rc-select-arrow-icon::after {
        box-sizing: border-box;
        width: 12px;
        height: 12px;
        border-radius: 100%;
        border: 2px solid #999;
        border-top-color: transparent;
        border-bottom-color: transparent;
        transform: none;
        margin-top: 4px;
        animation: rcSelectLoadingIcon 0.5s infinite;
    }
    .rc-select .rc-select-selection-placeholder {
        pointer-events: none;
        color: ${(props) => props.theme.fow.colors.text.disabled};
    }
    .rc-select .rc-select-selection-search-input {
        appearance: none;
    }
    .rc-select .rc-select-selection-search-input::-webkit-search-cancel-button {
        display: none;
        appearance: none;
    }
    .rc-select-single .rc-select-selector {
        display: flex;
        position: relative;
        border: 1px solid
            ${(props) => props.theme.fow.colors.greyDark.transparent32} !important;
        border-radius: 4px;
        height: ${(props) => (props.size === 'large' ? '42px' : '32px')};
        transition: all 0.3s ease;

        &:hover {
            border: 1px solid
                ${(props) => props.theme.fow.colors.error.transparent48} !important;
        }

        ${(props) =>
            props.hasValidationError &&
            css`
                border: 1px solid ${props.theme.fow.colors.error.main} !important;

                &:hover {
                    border: 1px solid ${props.theme.fow.colors.error.main} !important;
                }
            `};
    }
    .rc-select-single .rc-select-selector .rc-select-selection-search {
        width: 100%;
    }
    .rc-select-single .rc-select-selector .rc-select-selection-search-input {
        width: 100%;
    }
    .rc-select-single .rc-select-selector .rc-select-selection-item,
    .rc-select-single .rc-select-selector .rc-select-selection-placeholder {
        position: absolute;
        top: ${(props) => (props.size === 'large' ? '8px' : '3px')};
        left: 8px;
        pointer-events: none;
        transition: all 0.3s ease;
        padding-right: 38px;
        white-space: nowrap;
        text-overflow: ellipsis;
        max-width: 100%;
        overflow: hidden;
    }
    .rc-select-single:not(.rc-select-customize-input) .rc-select-selector {
        padding: 1px;
        border: 1px solid #000;
    }
    .rc-select-single:not(.rc-select-customize-input)
        .rc-select-selector
        .rc-select-selection-search-input {
        height: 100%;
        padding-left: 8px;
        padding-right: 24px;
        border: none;
        outline: none;
        background: transparent;
        width: 100%;
    }

    .rc-select-single:not(.rc-select-customize-input).rc-select-allow-clear
        .rc-select-selector
        .rc-select-selection-search-input {
        padding-right: 48px;
    }

    .rc-select-multiple .rc-select-selector {
        display: flex;
        flex-wrap: wrap;
        padding: 1px;
        border: 1px solid
            ${(props) => props.theme.fow.colors.greyDark.transparent32} !important;
        border-radius: 4px;
        height: ${(props) => (props.size === 'large' ? '42px' : '32px')};
        align-items: center;
        transition: all 0.3s ease;

        .rc-select-selection-placeholder {
            position: absolute;
            left: 8px;
            top: ${(props) => (props.size === 'large' ? '9px' : '4px')};
        }
    }
    .rc-select-multiple .rc-select-selector .rc-select-selection-item {
        flex: none;
        background: ${(props) => props.theme.fow.colors.greyDark.transparent16};
        border-radius: 4px;
        margin-right: 2px;
        padding: ${(props) => (props.size === 'large' ? '8px' : '2px 8px')};

        .rc-select-selection-item-content {
            margin-right: 8px;
        }
    }
    .rc-select-multiple .rc-select-selector .rc-select-selection-item-disabled {
        cursor: not-allowed;
        opacity: 0.5;
    }
    .rc-select-multiple .rc-select-selector .rc-select-selection-overflow {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        padding: 0 8px;
    }
    .rc-select-multiple .rc-select-selector .rc-select-selection-overflow-item {
        flex: none;
        max-width: 100%;
    }
    .rc-select-multiple .rc-select-selector .rc-select-selection-search {
        position: relative;
        max-width: 100%;
    }
    .rc-select-multiple .rc-select-selector .rc-select-selection-search-input,
    .rc-select-multiple .rc-select-selector .rc-select-selection-search-mirror {
        padding: 1px;
        font-family: system-ui;
    }
    .rc-select-multiple .rc-select-selector .rc-select-selection-search-mirror {
        position: absolute;
        z-index: 999;
        white-space: nowrap;
        position: none;
        left: 0;
        top: 0;
        visibility: hidden;
    }
    .rc-select-multiple .rc-select-selector .rc-select-selection-search-input {
        border: none;
        outline: none;
        background: transparent;
        width: 100%;
    }
    .rc-select-allow-clear.rc-select-multiple .rc-select-selector {
        padding-right: 20px;
    }
    .rc-select-allow-clear .rc-select-clear {
        position: absolute;
        right: 28px;
        top: ${(props) => (props.size === 'large' ? '9px' : '4px')};
        color: ${(props) => props.theme.fow.colors.greyDark.lighter} !important;
        cursor: pointer;
    }
    .rc-select-show-arrow.rc-select-multiple .rc-select-selector {
        padding-right: 20px;
    }
    .rc-select-show-arrow .rc-select-arrow {
        pointer-events: none;
        position: absolute;
        right: 8px;
        top: ${(props) => (props.size === 'large' ? '9px' : '4px')};
        color: ${(props) => props.theme.fow.colors.greyDark.lighter};
        transition: all 0.3s ease;
    }
    .rc-select-show-arrow .rc-select-arrow-icon::after {
        content: '';
        border: 5px solid transparent;
        width: 0;
        height: 0;
        display: inline-block;
        border-top-color: #999;
        transform: translateY(5px);
    }
    .rc-select-focused .rc-select-selector {
        border-color: ${(props) =>
            props.theme.fow.colors.error.transparent48} !important;
        box-shadow: 0px 0px 0px 4px
            ${(props) => props.theme.fow.colors.primary.transparent12};
    }

    .rc-select-focused .rc-select-arrow {
        color: ${(props) => props.theme.fow.colors.greyDark.light} !important;
    }

    &:hover {
        .rc-select-selector {
            border-color: ${(props) =>
                props.theme.fow.colors.error.transparent48} !important;
        }

        .rc-select-arrow {
            color: ${(props) =>
                props.theme.fow.colors.greyDark.light} !important;
        }
    }

    @keyframes rcSelectLoadingIcon {
        0% {
            transform: rotate(0);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;

export const LoaderWrapper = styled.div`
    width: 24px;
    height: 24px;
`;
