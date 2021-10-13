// @ts-nocheck
import styled, { css } from 'styled-components';

type CellProps = {
    canSort: boolean;
    isActionCell: boolean;
};

export const Container = styled.div`
    display: block;
    max-width: 100%;
`;

export const Wrapper = styled.div`
    display: block;
    overflow-x: auto;
    overflow-y: hidden;
    max-width: 100%;
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
                color: #fd725f;
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
    width: 1%;
    margin: 0;
    padding: 0.8rem;
    border-right: 1px solid ${(props) => props.theme.fow.colors.divider};
    border-bottom: 1px solid ${(props) => props.theme.fow.colors.divider};

    color: ${(props) => props.theme.fow.colors.text.secondary};
    font-weight: normal;
    font-size: 12px;
    line-height: 22px;
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

export const EmptyPlaceholder = styled.td`
    height: 400px;
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
