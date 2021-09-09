import styled from 'styled-components';

export const BoardColumnWrapper = styled.div`
    flex: 1;

    & + & {
        margin-left: ${(props) => props.theme.fow.spacing.small};
    }
`;

export const BoardColumnTitle = styled.h2`
    margin-bottom: ${(props) => props.theme.fow.spacing.small};
`;

export const BoardColumnContent = styled.div`
    min-height: ${(props) => props.theme.fow.spacing.large};
`;

export const BoardEl = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`;
