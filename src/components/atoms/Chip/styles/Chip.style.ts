import styled from 'styled-components';
import { setSize } from './size';
import { setType } from './type';

type ChipProps = {
    size: 'small' | 'medium';
    type: 'filled' | 'outlined';
    color: 'grey' | 'primary' | 'info' | 'success' | 'warning' | 'error';
};

export const StyledChip = styled.span<ChipProps>`
    display: inline-flex;
    align-items: center;
    margin: 0;
    border-radius: 5rem;
    font-weight: 400;
    font-style: normal;
    font-size: 1.4rem;
    line-height: 2.2rem;

    ${(props) => setType(props.color, props.type)}
    ${(props) => setSize(props.size)}
`;
