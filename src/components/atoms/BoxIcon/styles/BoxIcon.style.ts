import styled from 'styled-components';
import color from './color';

type BoxIconProps = {
    color: 'primary' | 'info' | 'success' | 'warning' | 'error';
};

export const Wrapper = styled.span<BoxIconProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4.2rem;
    min-width: 4.2rem;
    height: 4.2rem;
    min-height: 4.2rem;
    border-radius: 12px;

    ${(props) => color[props.color]}

    > span {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2.8rem;
        height: 2.8rem;
        border-radius: 50%;
    }
`;
