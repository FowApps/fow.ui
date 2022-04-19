import styled, { css } from 'styled-components';

type PhoneInputProps = {
    hasValidationError: boolean;
    isFocused: boolean;
    disabled: boolean;
};

export const Wrapper = styled.div<PhoneInputProps>`
    font-family: 'Inter';
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 100%;
    transition: all 0.3s ease;
    border: 1px solid
        ${(props) =>
            props.hasValidationError
                ? props.theme.fow.colors.error.main
                : props.theme.fow.colors.grey.transparent32};

    :hover {
        ${(props) =>
            !props.disabled &&
            css`
                border: 1px solid
                        props.hasValidationError
                            ? props.theme.fow.colors.error.main
                            : props.theme.fow.colors.error.transparent48};
            `}
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

    .react-tel-input {
        height: 30px;
        .form-control {
            border: none;
            width: 100%;
            height: 30px;

            &[disabled] {
                background-color: #fafafa;
            }
        }
    }

    .flag-dropdown {
        border: none;
        border-radius: 0;
        background-color: #f5f5f5;

        .selected-flag,
        .selected-flag.open,
        .selected-flag:hover {
            background-color: #f5f5f5 !important;
        }

        .country-list {
            box-shadow: ${(props) => props.theme.fow.shadows.z16};
            border-radius: 4px;

            .search {
                padding: 10px 10px 6px 10px;

                .search-emoji {
                    display: none;
                }

                .search-box {
                    width: 100%;
                    margin: 0;
                    padding: 4px 8px;
                }
            }
        }
    }
`;
