import styled, { css } from 'styled-components';

type LabelTextProps = {
    disabled?: boolean;
    _size?: 'small' | 'medium';
};

type MarkProps = {
    _size?: 'small' | 'medium';
};

export const StyledLabel = styled.label`
    position: relative;
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    cursor: pointer;
    user-select: none;
`;

export const LabelText = styled.span<LabelTextProps>`
    font-weight: 500;
    font-size: ${(props) => (props._size === 'medium' ? '12px' : '10px')};
    line-height: 22px;

    ${(props) =>
        props.disabled &&
        css`
            cursor: not-allowed;
        `};
`;

export const MarkBox = styled.div<MarkProps>`
    display: flex;
    align-items: center;
    width: ${(props) => (props._size === 'medium' ? '2.8rem' : '2rem')};
    height: ${(props) => (props._size === 'medium' ? '1.4rem' : '1rem')};
    padding: 0.2rem;
    border-radius: 7px;
    background-color: ${(props) => props.theme.fow.colors.grey.main};
    box-sizing: border-box;
    transition: background-color 0.4s ease;
`;

export const Mark = styled.span<MarkProps>`
    position: relative;
    width: ${(props) => (props._size === 'medium' ? '1.2rem' : '0.8rem')};
    height: ${(props) => (props._size === 'medium' ? '1.2rem' : '0.8rem')};
    border-radius: 50%;
    background-color: #f9fafb;
    transition: transform 0.4s ease;
`;

export const HoverCircle = styled.span<MarkProps>`
    position: absolute;
    top: ${(props) => (props._size === 'medium' ? '-1rem' : '-0.5rem')};
    left: ${(props) => (props._size === 'medium' ? '-1rem' : '-0.5rem')};
    width: ${(props) => (props._size === 'medium' ? '3.2rem' : '1.8rem')};
    height: ${(props) => (props._size === 'medium' ? '3.2rem' : '1.8rem')};
    border-radius: 50%;
`;

export const StyledInput = styled.input<MarkProps>`
    position: absolute;
    width: 0;
    height: 0;
    cursor: pointer;
    opacity: 0;

    &:checked ~ ${MarkBox} {
        border: none;
        background-color: ${(props) => props.theme.fow.colors.primary.main};

        ${Mark} {
            transform: ${(props) =>
                props._size === 'medium'
                    ? 'translateX(1.2rem)'
                    : 'translateX(0.8rem)'};

            &:hover ${HoverCircle} {
                background-color: ${(props) =>
                    props.theme.fow.colors.primary.transparent8};
            }
        }
    }

    &:not(:checked) ~ ${MarkBox} {
        ${Mark} {
            &:hover ${HoverCircle} {
                background-color: ${(props) =>
                    props.theme.fow.colors.grey.transparent8};
            }
        }
    }

    &:checked ~ ${MarkBox}, &:not(:checked) ~ ${MarkBox} {
        ${(props) =>
            props.disabled &&
            css`
                border: none;
                background-color: ${props.theme.fow.colors.grey.transparent24};
                cursor: not-allowed;

                ${Mark} {
                    background-color: ${props.theme.fow.colors.grey.light};
                }
            `}
    }
`;
