import styled, { css } from 'styled-components';

type InputProps = {
    hasValidationError: boolean;
    disabled?: boolean;
};

export const Wrapper = styled.div<InputProps>`
    input::placeholder {
        color: ${(props) => props.theme.fow.colors.text.disabled};
    }

    .rc-input-number {
        width: 100%;
        border-radius: 4px;
        height: 32px;

        border-color: ${(props) =>
            props.hasValidationError
                ? props.theme.fow.colors.error.main
                : props.theme.fow.colors.grey.transparent32};

        &:hover {
            ${(props) =>
                !props.disabled &&
                css`
                    border-color: ${props.hasValidationError
                        ? props.theme.fow.colors.error.main
                        : props.theme.fow.colors.error.transparent48};
                    .rc-input-number-handler-up,
                    .rc-input-number-handler-wrap {
                        border-color: ${props.hasValidationError
                            ? props.theme.fow.colors.error.main
                            : props.theme.fow.colors.error.transparent48};
                    }

                    .rc-input-number-handler-wrap {
                        opacity: 1;
                    }
                `}
        }

        &.rc-input-number-focused {
            border-color: ${(props) =>
                props.hasValidationError
                    ? props.theme.fow.colors.error.main
                    : props.theme.fow.colors.primary.transparent48};
            box-shadow: 0px 0px 0px 4px
                ${(props) => props.theme.fow.colors.primary.transparent12};

            .rc-input-number-handler-up,
            .rc-input-number-handler-wrap {
                border-color: ${(props) =>
                    props.hasValidationError
                        ? props.theme.fow.colors.error.main
                        : props.theme.fow.colors.primary.transparent48};
            }
        }

        .rc-input-number-input {
            text-align: left;
            padding-top: ${(props) => props.theme.fow.spacing.xxsmall};
            padding-right: ${(props) => props.theme.fow.spacing.xsmall};
            padding-bottom: ${(props) => props.theme.fow.spacing.xxsmall};
            padding-left: ${(props) => props.theme.fow.spacing.xsmall};
            border-radius: 4px;
            font-size: 1.4rem;
            line-height: 2.4rem;
        }

        .rc-input-number-handler {
            cursor: pointer;
            height: 15px;
        }

        ${(props) =>
            props.disabled &&
            css`
                .rc-input-number-handler {
                    cursor: not-allowed;
                }
            `}
    }
`;
