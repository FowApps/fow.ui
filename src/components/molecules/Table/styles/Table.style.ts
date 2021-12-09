// @ts-nocheck
import styled, { css } from 'styled-components';

type CellProps = {
    canSort: boolean;
    isActionCell: boolean;
};

export const Container = styled.div`
    display: block;
    max-width: 100%;
    width: 100%;
`;

export const Wrapper = styled.div`
    display: block;
    overflow-x: auto;
    overflow-y: hidden;
    max-width: 100%;
    height: ${(props) => props.isLoading && '460px'};
`;

export const StyledTable = styled.table`
    width: 100%;
    border: 1px solid ${(props) => props.theme.fow.colors.divider};
    border-spacing: 0;
    border-radius: 8px;
    background-color: ${(props) => props.theme.fow.colors.common.white}; ;
`;

export const Tr = styled.tr`
    :last-child {
        td {
            border-bottom: 0;
        }
    }

    .clickable {
        padding-right: 24px;
        cursor: pointer;
    }

    &:hover {
        .action {
            background-color: ${(props) =>
                props.theme.fow.colors.primary.main} !important;
            opacity: 1 !important;
        }

        .clickable {
            background-color: ${(props) =>
                props.theme.fow.colors.primary.transparent8};

            :after {
                content: '➜';
                position: absolute;
                right: 7px;
                top: 10px;
                color: ${(props) => props.theme.fow.colors.primary.main};
                font-size: 14px;
            }
        }
    }
`;

export const Th = styled.th<CellProps>`
    position: relative;
    width: 1%;
    margin: 0;
    border-right: 1px solid ${(props) => props.theme.fow.colors.divider};
    border-bottom: 1px solid ${(props) => props.theme.fow.colors.divider};
    background-color: ${(props) => props.theme.fow.colors.background.neutral};
    font-weight: 600;
    font-size: 12px;
    line-height: 20px;
    text-align: left;
    user-select: none;
    padding-inline: ${(props) => props.theme.fow.spacing.xsmall};
    padding-block: ${(props) => props.theme.fow.spacing.small};

    ${(props) =>
        props.canSort &&
        css`
            padding-right: 3rem;
        `}

    ${(props) =>
        props.isActionCell &&
        css`
            max-width: 32px;
        `}

    :last-child {
        border-right: 0;
    }
`;

export const Td = styled.td<CellProps>`
    position: relative;
    overflow: hidden;
    width: 1%;
    margin: 0;
    padding: 0.8rem;
    border-right: 1px solid ${(props) => props.theme.fow.colors.divider};
    border-bottom: 1px solid ${(props) => props.theme.fow.colors.divider};

    color: ${(props) => props.theme.fow.colors.text.secondary};
    font-weight: normal;
    font-size: 12px;
    line-height: 22px;
    text-overflow: ellipsis;
    white-space: nowrap;
    white-space: nowrap;
    transition: all 0.3s ease;

    ${(props) =>
        props.isActionCell &&
        css`
            max-width: 32px;
        `}

    :last-child {
        border-right: 0;
    }
`;

export const EmptyPlaceholder = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 390px;
    background-color: #fff;
    text-align: center;
`;

export const Sorters = styled.div`
    position: absolute;
    top: 0;
    right: 0.8rem;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > :first-child {
        position: relative;
        bottom: -4px;
    }

    > :last-child {
        position: relative;
        bottom: 4px;
    }
`;

export const ActionHeader = styled.div`
    text-align: center;
`;

export const ActionTrigger = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    text-align: center;
    cursor: pointer;
    opacity: 0;
    transition: all 0.3s ease;
    inset: 0px;
`;

export const PaginationWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: ${(props) => props.theme.fow.spacing.medium};
`;

export const SizePicker = styled.div`
    margin-right: ${(props) => props.theme.fow.spacing.medium};
    border: 1px solid
        ${(props) => props.theme.fow.colors.greyLight.transparent48};
    border-radius: 4px;
    background-color: ${(props) => props.theme.fow.colors.greyLight.main};
    color: ${(props) => props.theme.fow.colors.greyDark.light};
    cursor: pointer;
    transition: all 0.3s ease;
    padding-block: ${(props) => props.theme.fow.spacing.xxsmall};
    padding-inline: ${(props) => props.theme.fow.spacing.xsmall};

    &:hover {
        border: 1px solid
            ${(props) => props.theme.fow.colors.primary.transparent48};
    }
`;

export const ColumnList = styled.div`
    display: flex;
    flex-direction: row;
    overflow: auto;
    width: 450px;
    height: 400px;
    padding: ${(props) => props.theme.fow.spacing.medium};
    border-radius: 8px;
    background-color: ${(props) => props.theme.fow.colors.common.white};
    box-shadow: ${(props) => props.theme.fow.shadows.z12};

    > div {
        flex: 1;
    }
`;

export const OrderDots = styled.div`
    padding: 5px 7px;
    border-radius: 4px;
    color: ${(props) => props.theme.fow.colors.greyLight.darker};
    cursor: grab;
    transition: all 0.3s ease;

    &:hover {
        background-color: ${(props) =>
            props.theme.fow.colors.greyLight.transparent32};
        color: ${(props) => props.theme.fow.colors.greyDark.light};
    }
`;

export const LeftShadow = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    box-shadow: inset 10px 0 8px -8px #00000026;
    width: 20px;
    z-index: 99;
`;

export const RightShadow = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    box-shadow: inset -10px 0 8px -8px #00000026;
    width: 20px;
    z-index: 99;
`;
