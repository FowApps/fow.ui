import styled, { css } from 'styled-components';
import Body, { BodyProps } from '../../Typography/Body';
import Icon from '../../Icon';

interface LabelTextProps extends BodyProps {
    disabled?: boolean;
}

interface InputProps {
    color: 'primary' | 'grey';
}

export const StyledLabel = styled.label`
    position: relative;
    display: inline-flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: flex-end;
    cursor: pointer;
    user-select: none;
`;

export const LabelText = styled(Body)<LabelTextProps>`
    margin-left: ${(props) => props.theme.fow.spacing.small};

    ${(props) =>
        props.disabled &&
        css`
            color: ${props.theme.fow.colors.text.disabled};
            cursor: not-allowed;
        `};
`;

export const MarkBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border: 2px solid ${(props) => props.theme.fow.colors.text.secondary};
    border-radius: 4px;
    box-sizing: border-box;
    transition: background-color 0.4s ease;
`;

export const Mark = styled(Icon)`
    display: none;
`;

export const StyledInput = styled.input<InputProps>`
    position: absolute;
    width: 0;
    height: 0;
    cursor: pointer;
    opacity: 0;

    &:checked ~ ${MarkBox} {
        border: 2px solid
            ${(props) =>
                props.color === 'primary'
                    ? props.theme.fow.colors.primary.main
                    : props.theme.fow.colors.grey.main};
        background-color: ${(props) =>
            props.color === 'primary'
                ? props.theme.fow.colors.primary.main
                : props.theme.fow.colors.grey.main};
        ${Mark} {
            display: block;
        }
    }

    &:checked ~ ${MarkBox} {
        ${(props) =>
            props.disabled &&
            css`
                border: none;
                background-color: ${props.theme.fow.colors.grey.light};
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
                background-color: ${props.theme.fow.colors.common.white};
                border-color: ${props.theme.fow.colors.text.disabled};
                cursor: not-allowed;
            `}
    }
`;
