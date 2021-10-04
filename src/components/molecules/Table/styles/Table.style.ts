import styled, { css } from 'styled-components';

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
`;

export const Tr = styled.tr`
    :last-child {
        td {
            border-bottom: 0;
        }
    }
`;

export const Th = styled.th`
    position: relative;
    width: 1%;
    margin: 0;
    padding: ${(props) => props.theme.fow.spacing.xsmall};
    border-right: 1px solid ${(props) => props.theme.fow.colors.divider};
    border-bottom: 1px solid ${(props) => props.theme.fow.colors.divider};
    background-color: ${(props) => props.theme.fow.colors.grey.lightest};
    text-align: left;
    user-select: none;

    ${(props) =>
        props.canSort &&
        css`
            padding-right: 3rem;
        `}

    :last-child {
        border-right: 0;
    }
`;

export const Td = styled.td`
    width: 1%;
    margin: 0;
    padding: 0.8rem;
    border-right: 1px solid ${(props) => props.theme.fow.colors.divider};
    border-bottom: 1px solid ${(props) => props.theme.fow.colors.divider};
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
