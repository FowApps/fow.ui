import styled from 'styled-components';

type BoardColumnContentStylesProps = {
    isDraggingOver: boolean;
};

export const BoardColumnWrapper = styled.div`
    flex: 1;
    padding: ${(props) => props.theme.fow.spacing.xsmall};
    border-radius: ${(props) => props.theme.fow.spacing.xxsmall};
    background-color: ${(props) => props.theme.fow.colors.grey.main};

    & + & {
        margin-left: ${(props) => props.theme.fow.spacing.small};
    }
`;

export const BoardColumnTitle = styled.h2`
    margin-bottom: ${(props) => props.theme.fow.spacing.small};
    font: 1.4rem sans-serif;
`;

export const BoardColumnContent = styled.div<BoardColumnContentStylesProps>`
    min-height: ${(props) => props.theme.fow.spacing.large};
    border-radius: ${(props) => props.theme.fow.spacing.xxsmall};
    background-color: ${(props) => (props.isDraggingOver ? '#aecde0' : null)};
`;

export const BoardEl = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`;
