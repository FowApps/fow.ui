import styled from 'styled-components';
import { setSize } from './size';
import { setColor } from './color';

type ChipProps = {
    size: 'small' | 'medium';
    type: 'filled' | 'outlined';
    color: 'grey' | 'primary' | 'info' | 'success' | 'warning' | 'error';
};

export const StyledChip = styled.span<ChipProps>`
    font-style: normal;
    font-size: 1.4rem;
    line-height: 2.2rem;
    font-weight: 400;
    margin: 0;
    display: inline-flex;
    align-items: center;
    border-radius: 5rem;

    ${(props) => setColor(props.type, props.color)}
    ${(props) => setSize(props.size)}
`;
