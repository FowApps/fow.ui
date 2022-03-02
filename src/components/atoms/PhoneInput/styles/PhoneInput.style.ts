import styled from 'styled-components';

type PhoneInputProps = {
    hasValidationError: boolean;
};

export const Wrapper = styled.div<PhoneInputProps>`
    .react-tel-input:hover .form-control {
        border-color: ${(props) =>
            props.theme.fow.colors.primary.transparent48};
    }
`;
