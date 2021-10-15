import styled from 'styled-components';

type GridProps = {
    width?: number;
    height?: number;
};

export const GridWrapper = styled.div<GridProps>`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    grid-auto-rows: 300px;
    grid-gap: 8px;
`;

export const GridItemWrapper = styled.div`
    width: auto;
    min-width: 400px;
    user-select: none;
`;

export const DraggableGridItemWrapper = styled.div`
    width: auto;
    min-width: 400px;
    user-select: none;
    box-sizing: border-box;
`;
