import styled, { css } from 'styled-components';

type WrapperProps = {
    hasValidationError?: boolean;
    isFocused?: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
    border-radius: 4px;
    transition: box-shadow 0.3s ease;

    .public-DraftStyleDefault-block {
        min-height: 300px;
    }

    ${(props) =>
        props.isFocused &&
        css`
            box-shadow: 0px 0px 0px 4px
                ${props.theme.fow.colors.primary.transparent12};
        `}

    .fow-editor-toolbar {
        margin-bottom: 0;
        border-radius: 4px 4px 0 0;
        border: 1px solid
            ${(props) =>
                props.hasValidationError
                    ? props.theme.fow.colors.error.main
                    : props.theme.fow.colors.grey.transparent32};
        color: ${(props) => props.theme.fow.colors.text.primary};

        ${(props) =>
            props.isFocused &&
            css`
                border: 1px solid
                    ${props.hasValidationError
                        ? props.theme.fow.colors.error.main
                        : props.theme.fow.colors.primary.transparent48};
            `}
    }

    .fow-editor {
        border: 1px solid #ccc;
        border-top: none;
        border-radius: 0 0 4px 4px;
        padding: 0 12px;
        border: 1px solid
            ${(props) =>
                props.hasValidationError
                    ? props.theme.fow.colors.error.main
                    : props.theme.fow.colors.grey.transparent32};
        color: ${(props) => props.theme.fow.colors.text.primary};
        border-top: none;

        ${(props) =>
            props.isFocused &&
            css`
                border: 1px solid
                    ${props.hasValidationError
                        ? props.theme.fow.colors.error.main
                        : props.theme.fow.colors.primary.transparent48};
                border-top: none;
            `}
    }

    .rc-select-selector {
        height: 30px !important;
    }

    .rdw-image-alignment-options-popup {
        background-color: ${(props) =>
            props.theme.fow.colors.grey.transparent16};
        border-radius: 4px;

        .rdw-option-wrapper {
            transition: background-color 0.3s ease;
            background-color: transparent;
            box-shadow: none;

            &:hover {
                background-color: ${(props) =>
                    props.theme.fow.colors.grey.transparent48};
            }

            &.rdw-option-disabled {
                cursor: not-allowed;
            }

            &:active {
                background-color: ${(props) =>
                    props.theme.fow.colors.grey.transparent48};
            }
        }
    }

    .rdw-colorpicker-modal-style-label,
    .rdw-embedded-modal-header-option,
    .rdw-image-modal-header-option {
        font-size: 12px;
    }

    .rdw-colorpicker-modal-style-label-active,
    .rdw-embedded-modal-header-label,
    .rdw-image-modal-header-label-highlighted {
        border-bottom: 2px solid
            ${(props) => props.theme.fow.colors.primary.main};
    }

    .rdw-link-modal-btn,
    .rdw-embedded-modal-btn,
    .rdw-image-modal-btn {
        position: relative;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        border-radius: 4px;
        outline: none;
        white-space: nowrap;
        user-select: none;
        transition: all 0.3s ease;
        appearance: none;
        margin-left: 0;
        border: none;
        box-shadow: none !important;

        &:first-child:not(:disabled) {
            background-color: ${(props) => props.theme.fow.colors.primary.main};
            color: #fff;
        }

        &:disabled {
            cursor: not-allowed;
        }
    }

    .rdw-link-modal-input,
    .rdw-embedded-modal-link-input,
    .rdw-embedded-modal-size-input,
    .rdw-image-modal-url-input,
    .rdw-image-modal-size-input {
        width: 100%;
        padding-top: ${(props) => props.theme.fow.spacing.xxsmall};
        padding-right: ${(props) => props.theme.fow.spacing.xsmall};
        padding-bottom: ${(props) => props.theme.fow.spacing.xxsmall};
        padding-left: ${(props) => props.theme.fow.spacing.xsmall};
        border: 1px solid
            ${(props) =>
                props.hasValidationError
                    ? props.theme.fow.colors.error.main
                    : props.theme.fow.colors.grey.transparent32};
        border-radius: 4px;
        color: ${(props) => props.theme.fow.colors.text.primary};
        outline: none;
        font-size: 1.4rem;
        line-height: 2.4rem;
        transition: all 0.3s ease;
        height: 32px;
    }

    .rdw-embedded-modal-size-input {
        width: 80%;
    }

    .rdw-inline-wrapper,
    .rdw-list-wrapper,
    .rdw-text-align-wrapper,
    .rdw-colorpicker-wrapper,
    .rdw-link-wrapper,
    .rdw-embedded-wrapper,
    .rdw-emoji-wrapper,
    .rdw-image-wrapper,
    .rdw-remove-wrapper,
    .rdw-history-wrapper,
    .rdw-block-wrapper {
        background-color: ${(props) =>
            props.theme.fow.colors.grey.transparent16};
        border-radius: 4px;
        height: 30px;
        margin-right: 4px;

        .rdw-option-wrapper {
            transition: background-color 0.3s ease;
            height: 24px;
            background-color: transparent;
            box-shadow: none;

            &:hover {
                background-color: ${(props) =>
                    props.theme.fow.colors.grey.transparent48};
            }

            &.rdw-option-disabled {
                cursor: not-allowed;
            }

            &.rdw-option-active {
                background-color: ${(props) =>
                    props.theme.fow.colors.grey.transparent48};
            }
        }

        .rdw-dropdown-wrapper {
            background: transparent;

            &:hover {
                box-shadow: none;
            }

            .rdw-dropdown-optionwrapper {
                border-radius: 4px;
                border-color: ${(props) =>
                    props.theme.fow.colors.grey.transparent32};
                box-shadow: ${(props) => props.theme.fow.shadows.z12};
                overflow-y: auto;
                top: 6px;
                margin: 0;
                padding: 0;

                .rdw-dropdownoption-default {
                    transition: all 0.3s ease;
                }
            }
        }
    }

    .rdw-fontsize-wrapper,
    .rdw-fontfamily-wrapper {
        display: none;
    }

    .rdw-colorpicker-wrapper {
        .rdw-colorpicker-modal {
            border-radius: 4px;
            border-color: ${(props) =>
                props.theme.fow.colors.grey.transparent32};
            box-shadow: ${(props) => props.theme.fow.shadows.z12};
            border: none;
        }
    }

    .rdw-link-wrapper {
        .rdw-link-modal {
            border-radius: 4px;
            border-color: ${(props) =>
                props.theme.fow.colors.grey.transparent32};
            box-shadow: ${(props) => props.theme.fow.shadows.z12};
            height: 232px;
            border: none;

            .rdw-link-modal-label {
                font-size: 12px;
            }

            .rdw-link-modal-target-option {
                display: flex;
                align-items: center;

                span {
                    font-size: 12px;
                }

                input {
                    accent-color: ${(props) =>
                        props.theme.fow.colors.primary.main};
                }
            }
        }
    }

    .rdw-embedded-wrapper {
        .rdw-embedded-modal {
            border-radius: 4px;
            border-color: ${(props) =>
                props.theme.fow.colors.grey.transparent32};
            box-shadow: ${(props) => props.theme.fow.shadows.z12};
            border: none;
        }
    }

    .rdw-image-wrapper {
        .rdw-image-modal {
            border-radius: 4px;
            border-color: ${(props) =>
                props.theme.fow.colors.grey.transparent32};
            box-shadow: ${(props) => props.theme.fow.shadows.z12};
            border: none;

            .rdw-image-modal-header {
                margin: 0;

                .rdw-image-modal-header-option {
                    font-size: 12px;
                }
            }
        }
    }

    :not(:root):fullscreen::backdrop {
        background: white;
    }
`;
