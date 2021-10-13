import styled, { css } from 'styled-components';
import Caption from '../../Typography/Caption';

type InputProps = {
    hasPrefixIcon: boolean;
    hasSuffixIcon: boolean;
    hasValidationError: boolean;
};

type LabelProps = {
    disabled: boolean;
    hasError: boolean;
    required: boolean;
};

type IconWrapperProps = {
    position: 'prefix' | 'suffix';
};

export const IconWrapper = styled.div<IconWrapperProps>`
    position: absolute;
    top: ${(props) => props.theme.fow.spacing.small};
    font-size: 1.4rem;
    transition: color 0.3s ease;

    ${(props) => {
        switch (props.position) {
            case 'prefix':
                return css`
                    left: ${props.theme.fow.spacing.small};
                    margin-right: ${props.theme.fow.spacing.small};
                `;
            case 'suffix':
                return css`
                    right: ${props.theme.fow.spacing.small};
                    margin-left: ${props.theme.fow.spacing.small};
                `;
            default:
                return '';
        }
    }}
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
    border: 1px solid
        ${(props) =>
            props.hasValidationError
                ? props.theme.fow.colors.error.main
                : props.theme.fow.colors.grey.transparent32};
    border-radius: 8px;
    color: ${(props) => props.theme.fow.colors.text.primary};
    outline: none;
    font-size: 1.4rem;
    line-height: 2.4rem;
    transition: all 0.3s ease;

    ~ ${IconWrapper} {
        color: ${(props) => props.theme.fow.colors.text.disabled};
    }

    ::placeholder {
        color: ${(props) => props.theme.fow.colors.text.disabled};
    }

    :hover:not(:disabled) {
        border: 1px solid
            ${(props) =>
                props.hasValidationError
                    ? props.theme.fow.colors.error.main
                    : props.theme.fow.colors.grey.main};

        ~ ${IconWrapper} {
            color: ${(props) => props.theme.fow.colors.text.primary};
        }
    }

    :focus-visible:not(:disabled) {
        border: 1px solid
            ${(props) =>
                props.hasValidationError
                    ? props.theme.fow.colors.error.main
                    : props.theme.fow.colors.primary.main};

        ~ ${IconWrapper} {
            color: ${(props) => props.theme.fow.colors.primary.main};
        }
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
        content: '*';
        display: ${(props) => (props.required ? 'block' : 'none')};
        margin-left: ${(props) => props.theme.fow.spacing.xxsmall};
        color: ${(props) => props.theme.fow.colors.error.main};
    }
`;
