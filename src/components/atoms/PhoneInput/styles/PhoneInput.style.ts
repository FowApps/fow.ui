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
    border: none;

    ${(props) =>
        props.isFocused &&
        css`
            box-shadow: 0px 0px 0px 4px
                ${props.theme.fow.colors.primary.transparent12}};
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
`;
