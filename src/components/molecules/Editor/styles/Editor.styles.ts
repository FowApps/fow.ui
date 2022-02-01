import styled, { css } from 'styled-components';

type WrapperProps = {
    hasValidationError?: boolean;
    isFocused?: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
    border-radius: 4px;
    transition: box-shadow 0.3s ease;

    ${(props) =>
        props.isFocused &&
        css`
            box-shadow: 0px 0px 0px 4px
                ${props.theme.fow.colors.primary.transparent12};
        `}

    :not(:root):fullscreen::backdrop {
        background: white;
    }

    .ql-toolbar.ql-snow {
        border-radius: 4px 4px 0 0;
        font-family: 'Inter';
        padding: 0 4px;

        ${(props) =>
            props.isFocused &&
            css`
                border: 1px solid
                    ${props.hasValidationError
                        ? props.theme.fow.colors.error.main
                        : props.theme.fow.colors.primary.transparent48};
            `}

        .ql-picker-options {
            border-radius: 4px;
            border-color: ${(props) =>
                props.theme.fow.colors.grey.transparent32};
            box-shadow: ${(props) => props.theme.fow.shadows.z12};
        }

        .ql-picker.ql-expanded:not(.ql-color, .ql-background, .ql-align, .ql-header, .ql-size, .ql-font) {
            .ql-picker-label {
                border-radius: 4px;
                border-color: transparent;
            }
            .ql-picker-options {
                border-radius: 4px;
                border-color: ${(props) =>
                    props.theme.fow.colors.grey.transparent32};
                box-shadow: ${(props) => props.theme.fow.shadows.z12};

                .ql-picker-item:before {
                    content: attr(data-label);
                }
            }
        }

        .ql-picker-label,
        .ql-picker-item {
            transition: color 0.3s ease;
            &:hover,
            &.ql-active,
            &.ql-selected {
                color: ${(props) => props.theme.fow.colors.primary.main};
                transition: color 0.3s ease;

                .ql-stroke,
                .ql-fill {
                    transition: stroke 0.3s ease;
                    stroke: ${(props) => props.theme.fow.colors.primary.main};
                }
            }
        }

        .ql-formats {
            background: ${(props) => props.theme.fow.colors.grey.transparent16};
            border-radius: 4px;
            margin-right: 2px;
            padding: 2px 4px;
            height: 31px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            margin: 8px 4px;
        }

        button {
            transition: color 0.3s ease;
            width: auto;

            .ql-stroke,
            .ql-fill {
                transition: color 0.3s ease;
            }

            &.ql-active {
                color: ${(props) => props.theme.fow.colors.primary.main};
                transition: color 0.3s ease;

                .ql-stroke {
                    stroke: currentColor;
                }

                .ql-fill {
                    fill: currentColor;
                }
            }
        }

        button:hover {
            color: ${(props) => props.theme.fow.colors.primary.main};

            .ql-stroke {
                stroke: currentColor;
            }

            .ql-fill {
                fill: currentColor;
            }
        }

        button:focus {
            color: ${(props) => props.theme.fow.colors.primary.main};

            .ql-stroke {
                stroke: currentColor;
            }

            .ql-fill {
                fill: currentColor;
            }
        }

        .custom-tool {
            display: flex;
            align-items: center;

            .ql-picker-label {
                position: absolute;
                right: -4px;
            }
        }

        .custom-tool:before {
            transition: color 0.3s ease;
            white-space: nowrap;
            margin-right: 24px;
            content: attr(placeholder);
        }

        .custom-tool:hover:before {
            color: ${(props) => props.theme.fow.colors.primary.main};
        }
    }

    .ql-container.ql-snow {
        border-radius: 0 0 4px 4px;
        min-height: 250px;
        border-top: 0 !important;
        font-family: 'Inter';
    }

    .ql-toolbar.ql-snow,
    .ql-container.ql-snow {
        border: 1px solid
            ${(props) =>
                props.hasValidationError
                    ? props.theme.fow.colors.error.main
                    : props.theme.fow.colors.grey.transparent32};

        ${(props) =>
            props.isFocused &&
            css`
                border: 1px solid
                    ${props.hasValidationError
                        ? props.theme.fow.colors.error.main
                        : props.theme.fow.colors.primary.transparent48};
            `}
    }

    &:hover {
        .ql-toolbar.ql-snow,
        .ql-container.ql-snow {
            border: 1px solid
                ${(props) =>
                    props.hasValidationError
                        ? props.theme.fow.colors.error.main
                        : props.theme.fow.colors.error.transparent48};
        }

        .ql-container.ql-snow {
            border-top: 0 !important;
        }
    }
`;
