import styled, { css } from 'styled-components';

type LabelTextProps = {
    disabled?: boolean;
};

export const StyledLabel = styled.label`
    position: relative;
    display: inline-flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: flex-end;
    cursor: pointer;
    user-select: none;
`;

export const LabelText = styled.span<LabelTextProps>`
    margin-left: ${(props) => props.theme.fow.spacing.xsmall};
    color: ${(props) => props.theme.fow.colors.text.primary};
    font-weight: normal;
    font-size: 1.2rem;
    line-height: 2.2rem;
    letter-spacing: 0.1px;

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
    width: 1.6rem;
    height: 1.6rem;
    border: 2px solid ${(props) => props.theme.fow.colors.text.secondary};
    border-radius: 50%;
    background: transparent;
    box-sizing: border-box;
    transition: border 0.4s ease;
`;

export const Mark = styled.span`
    position: relative;
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;
    background-color: ${(props) => props.theme.fow.colors.primary.main};
    opacity: 0;
    transition: opacity 0.4s ease;
`;

export const HoverCircle = styled.span`
    position: absolute;
    top: -1rem;
    left: -1rem;
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 50%;
    transition: all 0.3s ease;
`;

export const StyledInput = styled.input`
    position: absolute;
    width: 0;
    height: 0;
    cursor: pointer;
    opacity: 0;

    &:checked ~ ${MarkBox} {
        border: 2px solid ${(props) => props.theme.fow.colors.primary.main};

        ${Mark} {
            opacity: 1;
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
                border: 2px solid ${props.theme.fow.colors.text.disabled};
                cursor: not-allowed;

                ${Mark} {
                    display: block;
                    background-color: ${props.theme.fow.colors.text.disabled};
                }
            `}
    }

    &:not(:checked) ~ ${MarkBox} {
        ${(props) =>
            props.disabled &&
            css`
                border: 2px solid ${props.theme.fow.colors.text.disabled};
                cursor: not-allowed;
            `}

        &:hover ${HoverCircle} {
            background-color: ${(props) =>
                props.theme.fow.colors.grey.transparent8};
        }
    }
`;
