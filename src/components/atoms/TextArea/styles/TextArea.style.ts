import styled from 'styled-components';
import TextareaAutosize, {
    TextareaAutosizeProps,
} from 'react-textarea-autosize';
import Caption from '../../Typography/Caption';

interface TextProps extends TextareaAutosizeProps {
    hasValidationError: boolean;
    autosize: boolean;
    disabled: boolean;
}

type LabelProps = {
    disabled: boolean;
    hasError: boolean;
    required: boolean;
};

export const StyledTextArea = styled(TextareaAutosize)<TextProps>`
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
    height: 32px !important;
    resize: ${(props) => (props.autosize ? 'auto' : 'none')} !important;
    disabled: ${(props) => (props.disabled ? 'true' : 'false')};

    ::placeholder {
        color: ${(props) => props.theme.fow.colors.text.disabled};
    }

    :hover:not(:disabled) {
        border: 1px solid
            ${(props) =>
                props.hasValidationError
                    ? props.theme.fow.colors.error.main
                    : props.theme.fow.colors.error.transparent48};
    }

    :focus-visible:not(:disabled) {
        border: 1px solid
            ${(props) =>
                props.hasValidationError
                    ? props.theme.fow.colors.error.main
                    : props.theme.fow.colors.primary.transparent48};
        box-shadow: 0px 0px 0px 4px
            ${(props) => props.theme.fow.colors.primary.transparent12};
    }

    :disabled {
        border: 1px solid
            ${(props) => props.theme.fow.colors.grey.transparent24};
        color: ${(props) => props.theme.fow.colors.text.disabled};
        cursor: not-allowed;
    }
`;

export const Wrapper = styled.div`
    position: relative;
    width: 100%;
`;

export const TextareaWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const Message = styled(Caption)`
    position: relative;
    color: ${(props) => props.theme.fow.colors.error.main};
    text-align: end;
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
