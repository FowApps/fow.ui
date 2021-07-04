import styled, { css } from 'styled-components';
import Body, { BodyProps } from '../../Body';
import Icon from '../../Icon';

interface LabelTextProps extends BodyProps {
    disabled?: boolean;
}

interface InputProps {
    color: 'primary' | 'grey';
}

export const StyledLabel = styled.label`
    display: inline-flex;
    align-items: center;
    flex-direction: row-reverse;
    justify-content: flex-end;
    position: relative;
    cursor: pointer;
    user-select: none;
`;

export const LabelText = styled(Body)<LabelTextProps>`
    margin-left: ${(props) => props.theme.spacing.small};

    ${(props) =>
        props.disabled &&
        css`
            color: ${props.theme.colors.text.disabled};
            cursor: not-allowed;
        `};
`;

export const MarkBox = styled.div`
    border: 2px solid ${(props) => props.theme.colors.text.secondary};
    box-sizing: border-box;
    border-radius: 4px;
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.4s ease;
`;

export const Mark = styled(Icon)`
    display: none;
`;

export const StyledInput = styled.input<InputProps>`
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;

    &:checked ~ ${MarkBox} {
        border: 2px solid
            ${(props) =>
                props.color === 'primary'
                    ? props.theme.colors.primary.main
                    : props.theme.colors.grey.main};
        background-color: ${(props) =>
            props.color === 'primary'
                ? props.theme.colors.primary.main
                : props.theme.colors.grey.main};
        ${Mark} {
            display: block;
        }
    }

    &:checked ~ ${MarkBox} {
        ${(props) =>
            props.disabled &&
            css`
                border: none;
                background-color: ${props.theme.colors.grey.light};
                cursor: not-allowed;

                ${Mark} {
                    display: block;
                }
            `}
    }

    &:not(:checked) ~ ${MarkBox} {
        ${(props) =>
            props.disabled &&
            css`
                background-color: ${props.theme.colors.common.white};
                border-color: ${props.theme.colors.text.disabled};
                cursor: not-allowed;
            `}
    }
`;
