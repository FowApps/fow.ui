import styled from 'styled-components';
import color from './color';

type ColoredIconProps = {
    color: 'primary' | 'info' | 'success' | 'warning' | 'error';
};

export const Wrapper = styled.span<ColoredIconProps>`
    width: 4.8rem;
    height: 4.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;

    ${(props) => color[props.color]}

    > span {
        width: 2.8rem;
        height: 2.8rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
    }
`;
