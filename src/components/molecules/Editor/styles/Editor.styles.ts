import styled, { css } from 'styled-components';

type WrapperProps = {
    hasValidationError?: boolean;
    isFocused?: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
    transition: all 0.3s ease;
    border-radius: 4px;
    ${(props) =>
        props.isFocused &&
        css`
            box-shadow: 0px 0px 0px 4px
                ${props.theme.fow.colors.primary.transparent12};
        `}

    .ql-toolbar.ql-snow {
        border-radius: 4px 4px 0 0;

        ${(props) =>
            props.isFocused &&
            css`
                border: 1px solid
                    ${props.hasValidationError
                        ? props.theme.fow.colors.error.main
                        : props.theme.fow.colors.primary.transparent48};
            `}

        .ql-picker.ql-expanded {
            .ql-picker-label {
                border-radius: 4px;
                border-color: transparent;
            }
            .ql-picker-options {
                border-radius: 4px;
                border-color: ${(props) =>
                    props.theme.fow.colors.grey.transparent32};
                box-shadow: ${(props) => props.theme.fow.shadows.z12};
            }
        }

        .ql-picker-label,
        .ql-picker-item {
            transition: all 0.3s ease;
            &:hover,
            &.ql-active,
            &.ql-selected {
                color: ${(props) => props.theme.fow.colors.primary.main};

                .ql-stroke,
                .ql-fill {
                    stroke: ${(props) => props.theme.fow.colors.primary.main};
                }
            }
        }

        .ql-formats {
            background: ${(props) => props.theme.fow.colors.grey.transparent16};
            border-radius: 4px;
            margin-right: 2px;
            padding: 2px 8px;
        }

        button {
            transition: all 0.3s ease;

            .ql-stroke,
            .ql-fill {
                transition: all 0.3s ease;
            }

            &.ql-active {
                color: ${(props) => props.theme.fow.colors.primary.main};

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
    }

    .ql-container.ql-snow {
        border-radius: 0 0 4px 4px;
        min-height: 250px;
        border-top: 0;
    }

    .ql-toolbar.ql-snow,
    .ql-container.ql-snow {
        transition: all 0.3s ease;
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
            border-top: 0;
        }
    }
`;
