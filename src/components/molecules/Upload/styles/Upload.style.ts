import styled from 'styled-components';

type FileUploadContainerProps = {
    disabled: boolean;
};

type LabelProps = {
    hasError: boolean;
    required: boolean;
};

export const Wrapper = styled.div`
    width: 100%;
`;

export const FileUploadContainer = styled.section<FileUploadContainerProps>`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${(props) => props.theme.fow.spacing.xxxlarge};
    border: 1px dashed ${(props) => props.theme.fow.colors.grey.transparent32};
    border-radius: 8px;
    background-color: ${(props) => props.theme.fow.colors.background.neutral};
    opacity: ${(props) => (props.disabled ? 0.5 : 1)};
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
    &:disabled {
        cursor: not-allowed;
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

export const FileListContainer = styled.div`
    width: 100%;
    margin-top: ${(props) => props.theme.fow.spacing.medium};
`;
