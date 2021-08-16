import styled, { css } from 'styled-components';
import Caption from '../../Typography/Caption';

type InputProps = {
    hasPrefixIcon: boolean;
    hasSuffixIcon: boolean;
    hasError: boolean;
};

type LabelProps = {
    disabled: boolean;
    hasError: boolean;
    required: boolean;
};

const commonIconStyles = css`
    position: absolute;
    top: ${(props) => props.theme.fow.spacing.small};
    font-size: 1.4rem;
    transition: color 0.3s ease;
`;

export const PrefixIconWrapper = styled.div`
    ${commonIconStyles}
    left: ${(props) => props.theme.fow.spacing.small};
    margin-right: ${(props) => props.theme.fow.spacing.small};
`;

export const SuffixIconWrapper = styled.div`
    ${commonIconStyles}
    right: ${(props) => props.theme.fow.spacing.small};
    margin-left: ${(props) => props.theme.fow.spacing.small};
`;

export const StyledInput = styled.input<InputProps>`
    width: 100%;
    padding-top: ${(props) => props.theme.fow.spacing.xsmall};
    padding-right: ${(props) =>
        props.hasSuffixIcon
            ? props.theme.fow.spacing.xxxlarge
            : props.theme.fow.spacing.small};
    padding-bottom: ${(props) => props.theme.fow.spacing.xsmall};
    padding-left: ${(props) =>
        props.hasPrefixIcon
            ? props.theme.fow.spacing.xxxlarge
            : props.theme.fow.spacing.small};
    color: ${(props) => props.theme.fow.colors.text.primary};
    font-size: 1.4rem;
    line-height: 2.4rem;
    letter-spacing: 0.1px;
    border: 1px solid
        ${(props) =>
            props.hasError
                ? props.theme.fow.colors.error.main
                : props.theme.fow.colors.grey.transparent32};
    border-radius: 8px;
    outline: none;
    transition: all 0.3s ease;

    ~ ${PrefixIconWrapper}, ~ ${SuffixIconWrapper} {
        color: ${(props) => props.theme.fow.colors.text.disabled};
    }

    ::placeholder {
        color: ${(props) => props.theme.fow.colors.text.disabled};
    }

    :hover {
        border: 1px solid
            ${(props) =>
                props.hasError
                    ? props.theme.fow.colors.error.main
                    : props.theme.fow.colors.grey.darker};

        ~ ${PrefixIconWrapper}, ~ ${SuffixIconWrapper} {
            color: ${(props) => props.theme.fow.colors.text.primary};
        }
    }

    :focus-visible {
        border: 1px solid
            ${(props) =>
                props.hasError
                    ? props.theme.fow.colors.error.main
                    : props.theme.fow.colors.primary.main};

        ~ ${PrefixIconWrapper}, ~ ${SuffixIconWrapper} {
            color: ${(props) => props.theme.fow.colors.primary.main};
        }
    }
`;

export const Wrapper = styled.div`
    position: relative;
    width: 100%;
`;

export const InputWrapper = styled.div`
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
        display: ${(props) => (props.required ? 'block' : 'none')};
        margin-left: ${(props) => props.theme.fow.spacing.xxsmall};
        color: ${(props) => props.theme.fow.colors.error.main};
        content: '*';
    }
`;
