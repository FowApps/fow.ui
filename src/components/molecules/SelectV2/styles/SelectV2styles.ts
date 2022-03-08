import styled from 'styled-components';
import { Button, Space } from '../../../..';
import Dropdown from '../../Dropdown';

type ButtonProps = {
    isOpen: boolean;
    styleType: string;
};

export const DropdownWrapper = styled(Dropdown)`
    min-width: auto;
`;

export const OptionsWrapper = styled.div`
    max-height: 220px;
    padding-right: 10px;
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
        props.styleType === 'light'
            ? props.theme.fow.colors.greyLight.lighter
            : props.theme.fow.colors.greyLight.light};
    &:focus {
        background: ${(props) => props.theme.fow.colors.greyLight.lighter};
        border: 1px solid
            ${(props) => props.theme.fow.colors.primary.transparent48};
        box-shadow: 0px 0px 0px 4px
            ${(props) => props.theme.fow.colors.primary.transparent12};
    }
    :disabled {
        border: 1px solid
            ${(props) => props.theme.fow.colors.grey.transparent24} !important;
        color: ${(props) => props.theme.fow.colors.text.disabled};
        cursor: not-allowed;
    }
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
