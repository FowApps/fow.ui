import styled from 'styled-components';

type InputProps = {
    hasValidationError: boolean;
};

export const Wrapper = styled.div<InputProps>`
    .rc-input-number {
        width: 100%;
        border-radius: 8px;
        height: 32px;

        border-color: ${(props) =>
            props.hasValidationError
                ? props.theme.fow.colors.error.main
                : props.theme.fow.colors.grey.transparent32};

        &:hover {
            border-color: ${(props) =>
                props.hasValidationError
                    ? props.theme.fow.colors.error.main
                    : props.theme.fow.colors.grey.main};

            .rc-input-number-handler-up,
            .rc-input-number-handler-wrap {
                border-color: ${(props) =>
                    props.hasValidationError
                        ? props.theme.fow.colors.error.main
                        : props.theme.fow.colors.grey.main};
            }

            .rc-input-number-handler-wrap {
                opacity: 1;
            }
        }

        &.rc-input-number-focused {
            border-color: ${(props) =>
                props.hasValidationError
                    ? props.theme.fow.colors.error.main
                    : props.theme.fow.colors.primary.transparent48};
            box-shadow: 0px 0px 0px 4px rgba(253, 114, 95, 0.12);

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
            border-radius: 8px;
        }

        .rc-input-number-handler-wrap {
            opacity: 0;
        }

        .rc-input-number-handler {
            cursor: pointer;
            height: 15px;
        }
    }
`;
