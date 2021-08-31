import styled from 'styled-components';

type LabelProps = {
    disabled: boolean;
    hasError: boolean;
    required: boolean;
};

export const FileUploadContainer = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: ${(props) => props.theme.fow.spacing.medium};
    padding: ${(props) => props.theme.fow.spacing.xxxlarge};
    border: 1px dashed ${(props) => props.theme.fow.colors.grey.transparent32};
    border-radius: 8px;
    background-color: ${(props) => props.theme.fow.colors.background.neutral};
`;

export const FormField = styled.input`
    position: absolute;
    display: block;
    width: 100%;
    border: none;
    text-transform: none;
    inset: 0;
    opacity: 0;
    &:focus {
        outline: none;
    }
`;

export const Label = styled.label<LabelProps>`
    display: flex;
    margin-bottom: ${(props) => props.theme.fow.spacing.xxsmall};
    color: ${(props) =>
        props.hasError
            ? props.theme.fow.colors.error.main
            : props.theme.fow.colors.text.secondary};
    font-size: 1.2rem;
    line-height: 1.8rem;

    :after {
        content: '*';
        display: ${(props) => (props.required ? 'block' : 'none')};
        margin-left: ${(props) => props.theme.fow.spacing.xxsmall};
        color: ${(props) => props.theme.fow.colors.error.main};
    }
`;
