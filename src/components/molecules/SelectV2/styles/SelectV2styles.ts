import styled, { css } from 'styled-components';
import Button from '../../../atoms/Button';
import Space from '../../../atoms/Space';
import Dropdown from '../../Dropdown';

type ButtonProps = {
    isOpen: boolean;
    buttonType: string;
    hasValidationError?: boolean;
};

export const DropdownWrapper = styled(Dropdown)`
    min-width: auto;
`;

export const OptionsWrapper = styled.div`
    padding-right: 10px;
    max-height: 300px;
    overflow-y: auto;
`;

export const DropdownButtonWrapper = styled(Button)<ButtonProps>`
    padding: ${(props) => props.theme.fow.spacing.xxsmall}
        ${(props) => props.theme.fow.spacing.xsmall};
    width: 100% !important;
    border-radius: 4px;
    border: 1px solid
        ${(props) =>
            !props.isOpen
                ? props.theme.fow.colors.greyDark.transparent32
                : props.theme.fow.colors.primary.transparent48} !important;
    background: ${(props) =>
        props.buttonType === 'white'
            ? props.theme.fow.colors.common.white
            : props.theme.fow.colors.greyLight.light};

    ::placeholder {
        color: ${(props) => props.theme.fow.colors.text.disabled};
    }

    :hover:not(:disabled) {
        border: 1px solid
            ${(props) =>
                props.hasValidationError
                    ? props.theme.fow.colors.error.main
                    : props.theme.fow.colors.grey.transparent32};
    }

    :focus:not(:disabled) {
        border: 1px solid
            ${(props) =>
                props.hasValidationError
                    ? props.theme.fow.colors.error.main
                    : props.theme.fow.colors.grey.transparent32};
        box-shadow: 0px 0px 0px 4px
            ${(props) => props.theme.fow.colors.primary.transparent12};
    }

    :disabled {
        border: 1px solid
            ${(props) => props.theme.fow.colors.grey.transparent24} !important;
        color: ${(props) => props.theme.fow.colors.text.disabled};
        background: rgba(239, 239, 239, 0.3);
        cursor: not-allowed;
        button {
            cursor: not-allowed;
        }
    }

    ${(props) =>
        props.hasValidationError &&
        css`
            border: 1px solid ${props.theme.fow.colors.error.main} !important;
        `};

    > span {
        width: 100%;
        > div {
            > span {
                width: 100%;
            }
        }
    }
`;

export const DropdownButtonContent = styled(Space)`
    width: 100%;
    > span {
        width: 100%;
    }
`;

export const DropdownContentWrapper = styled.div`
    box-shadow: 0px 0px 2px
            ${(props) => props.theme.fow.colors.grey.transparent24},
        0px 16px 32px -4px ${(props) => props.theme.fow.colors.grey.transparent24};
    border-radius: 8px;
    border: 1px solid ${(props) => props.theme.fow.colors.grey.transparent32};
    background: ${(props) => props.theme.fow.colors.common.white};
    width: 100%;
    padding: ${(props) => props.theme.fow.spacing.medium};
    position: relative;
    margin-top: ${(props) => props.theme.fow.spacing.xsmall};
`;

export const ClearButtonWrapper = styled(Button)`
    width: 16px !important;
    height: 16px;
    background: ${(props) => props.theme.fow.colors.error.transparent16};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: ${(props) => props.theme.fow.colors.error.dark};
    &:hover {
        color: ${(props) => props.theme.fow.colors.error.dark};
        background: ${(props) => props.theme.fow.colors.error.transparent32};
    }
`;

export const Placeholder = styled.span`
    color: ${(props) => props.theme.fow.colors.text.disabled};
`;
