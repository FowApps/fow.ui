import styled from 'styled-components';

type LabelProps = {
    hasValidationError?: boolean;
    required?: boolean;
};

export const Label = styled.label<LabelProps>`
    display: flex;
    margin-bottom: ${(props) => props.theme.fow.spacing.xxsmall};

    svg {
        color: ${(props) => props.theme.fow.colors.text.secondary};
    }
`;

export const Wrapper = styled.div`
    display: ${(props) => (props.hidden ? 'none' : 'block')};
    margin-bottom: ${(props) => props.theme.fow.spacing.small};
    width: 100%;
`;

export const Text = styled.label<LabelProps>`
    display: flex;
    color: ${(props) =>
        props.hasValidationError
            ? props.theme.fow.colors.error.main
            : props.theme.fow.colors.text.secondary};
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 1.8rem;

    :after {
        content: '*';
        display: ${(props) => (props.required ? 'block' : 'none')};
        margin-left: ${(props) => props.theme.fow.spacing.xxsmall};
        color: ${(props) => props.theme.fow.colors.error.main};
    }
`;
