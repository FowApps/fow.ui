/* stylelint-disable */
import styled from 'styled-components';

type BoardItemStylesProps = {
    isDragging: boolean;
};

type BoardColumnContentStylesProps = {
    isDraggingOver: boolean;
};

export const BoardItemEl = styled.div<BoardItemStylesProps>`
    padding: 8px;
    background-color: ${(props) => (props.isDragging ? '#d3e4ee' : '#fff')};
    border-radius: 4px;
    transition: background-color 0.25s ease-out;

    &:hover {
        background-color: #f7fafc;
    }

    & + & {
        margin-top: 4px;
    }
`;

// Create styles for BoardColumnWrapper element
export const BoardColumnWrapper = styled.div`
    flex: 1;
    padding: 8px;
    background-color: #e5eff5;
    border-radius: 4px;

    & + & {
        margin-left: 12px;
    }
`;

// Create styles for BoardColumnTitle element
export const BoardColumnTitle = styled.h2`
    font: 14px sans-serif;
    margin-bottom: 12px;
`;

// Create styles for BoardColumnContent element
export const BoardColumnContent = styled.div<BoardColumnContentStylesProps>`
    min-height: 20px;
    background-color: ${(props) => (props.isDraggingOver ? '#aecde0' : null)};
    border-radius: 4px;
`;

export const BoardEl = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`;
