import styled, { css } from 'styled-components';

type WrapperProps = {
    hasValidationError?: boolean;
    isFocused?: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
    border-radius: 4px;
    transition: box-shadow 0.3s ease;
    overflow: hidden;

    * {
        transition: color 0.3s ease;
    }

    border: 1px solid
        ${(props) =>
            props.hasValidationError
                ? props.theme.fow.colors.error.main
                : props.theme.fow.colors.grey.transparent32};

    .bf-container .public-DraftEditorPlaceholder-root {
        font-size: 14px;
        color: ${(props) => props.theme.fow.colors.text.disabled};
    }

    .DraftEditor-editorContainer,
    .bf-container .public-DraftEditor-content {
        min-height: 300px;
    }

    ${(props) =>
        props.isFocused &&
        css`
            box-shadow: 0px 0px 0px 4px
                ${props.theme.fow.colors.primary.transparent12};
            border: 1px solid
                ${props.hasValidationError
                    ? props.theme.fow.colors.error.main
                    : props.theme.fow.colors.primary.transparent48};
        `}
    &:hover {
        border: 1px solid
            ${(props) =>
                props.hasValidationError
                    ? props.theme.fow.colors.error.main
                    : props.theme.fow.colors.primary.transparent48};
    }

    .bf-content {
        min-height: 300px;
        height: unset;
        font-size: 14px;
        color: ${(props) => props.theme.fow.colors.text.secondary};
    }

    .bf-image-link-editor input:hover,
    .bf-image-size-editor input:hover {
        box-shadow: inset 0 0 0 1px
            ${(props) => props.theme.fow.colors.primary.transparent48};
    }

    .bf-image-link-editor input:focus,
    .bf-image-size-editor input:focus {
        box-shadow: inset 0 0 0 1px
            ${(props) => props.theme.fow.colors.primary.main};
    }

    .bf-image-link-editor button:hover,
    .bf-image-size-editor button:hover {
        background-color: ${(props) => props.theme.fow.colors.primary.dark};
    }

    .bf-content .bf-image .bf-csize-icon {
        background-color: ${(props) =>
            props.theme.fow.colors.primary.transparent32};
    }

    .bf-content .bf-image .bf-pre-csize.rightbottom {
        border: 1px dashed ${(props) => props.theme.fow.colors.primary.main};
    }
    .bf-content .bf-image .bf-pre-csize.leftbottom {
        border: 1px dashed ${(props) => props.theme.fow.colors.primary.main};
    }

    .bf-content
        .bf-image
        .bf-media-toolbar[data-align='center']
        [data-align='center'],
    .bf-content
        .bf-image
        .bf-media-toolbar[data-align='left']
        [data-align='left'],
    .bf-content
        .bf-image
        .bf-media-toolbar[data-align='right']
        [data-align='right'],
    .bf-content
        .bf-image
        .bf-media-toolbar[data-float='left']
        [data-float='left'],
    .bf-content
        .bf-image
        .bf-media-toolbar[data-float='right']
        [data-float='right'] {
        color: ${(props) => props.theme.fow.colors.primary.main};
    }

    .bf-container button.primary {
        background-color: ${(props) => props.theme.fow.colors.primary.main};
    }

    .bf-container button.primary:hover {
        background-color: ${(props) => props.theme.fow.colors.primary.dark};
    }

    .bf-container .public-DraftEditor-content .braft-link {
        color: ${(props) => props.theme.fow.colors.primary.dark};
    }

    .bf-container .bf-image img:hover {
        outline: 1px solid ${(props) => props.theme.fow.colors.primary.main};
    }

    .bf-container .bf-media-toolbar a.active {
        color: ${(props) => props.theme.fow.colors.primary.main};
    }

    .bf-switch.active {
        background-color: ${(props) => props.theme.fow.colors.primary.main};
    }

    .bf-player-holder .button-play:hover {
        background-color: ${(props) => props.theme.fow.colors.primary.main};
    }

    .bf-link-editor .input-group input:hover {
        box-shadow: inset 0 0 0 1px
            ${(props) => props.theme.fow.colors.primary.transparent48};
    }

    .bf-link-editor .input-group input:focus {
        box-shadow: inset 0 0 0 1px
            ${(props) => props.theme.fow.colors.primary.main};
    }

    .bf-controlbar .control-item.button.active {
        color: ${(props) => props.theme.fow.colors.primary.main};
    }

    .bf-colors li.active {
        box-shadow: 0 0 0 2px ${(props) => props.theme.fow.colors.primary.main};
    }

    .text-color-dropdown.light-theme .bf-color-switch-buttons button.active {
        border-bottom-color: ${(props) => props.theme.fow.colors.primary.main};
        color: ${(props) => props.theme.fow.colors.primary.main};
    }

    .text-color-dropdown .bf-color-switch-buttons button.active {
        border-bottom-color: ${(props) => props.theme.fow.colors.primary.main};
        color: ${(props) => props.theme.fow.colors.primary.main};
    }

    .bf-dropdown .dropdown-content .dropdown-arrow.active {
        background-color: ${(props) => props.theme.fow.colors.primary.main};
    }

    .bf-dropdown .dropdown-content .menu-item.active {
        background-color: ${(props) => props.theme.fow.colors.primary.main};
    }

    .bf-font-sizes li.active {
        background-color: ${(props) => props.theme.fow.colors.primary.main};
    }

    .bf-line-heights li.active {
        background-color: ${(props) => props.theme.fow.colors.primary.main};
    }

    .bf-letter-spacings li.active {
        background-color: ${(props) => props.theme.fow.colors.primary.main};
    }
`;
