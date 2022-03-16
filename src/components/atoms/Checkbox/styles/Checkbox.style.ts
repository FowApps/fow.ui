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
    margin-left: ${(props) => props.theme.fow.spacing.xsmall};
    font-weight: normal;
    font-size: 12px;
    line-height: 22px;

    ${(props) =>
        props.disabled &&
        css`
            color: ${props.theme.fow.colors.text.disabled};
            cursor: not-allowed;
        `};
`;

export const MarkBox = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.4rem;
    min-width: 1.4rem;
    height: 1.4rem;
    min-height: 1.4rem;
    border: 2px solid ${(props) => props.theme.fow.colors.text.secondary};
    border-radius: 4px;
    box-sizing: border-box;
    transition: background-color 0.4s ease;
`;

export const HoverCircle = styled.span`
    position: absolute;
    top: -1.1rem;
    left: -1.1rem;
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 50%;
    transition: all 0.3s ease;
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

        &:hover ${HoverCircle} {
            background-color: ${(props) =>
                props.theme.fow.colors.primary.transparent8};
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

        &:hover ${HoverCircle} {
            background-color: ${(props) =>
                props.theme.fow.colors.grey.transparent8};
        }
    }
`;
