import styled from 'styled-components';

type BoardColumnContentStylesProps = {
    isDraggingOver: boolean;
};

export const BoardColumnWrapper = styled.div`
    flex: 1;
    padding: ${(props) => props.theme.fow.spacing.xsmall};

    & + & {
        margin-left: ${(props) => props.theme.fow.spacing.small};
    }
`;

export const BoardColumnTitle = styled.h2`
    margin-bottom: ${(props) => props.theme.fow.spacing.small};
`;

export const BoardColumnContent = styled.div<BoardColumnContentStylesProps>`
    min-height: ${(props) => props.theme.fow.spacing.large};
`;

export const BoardEl = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`;
