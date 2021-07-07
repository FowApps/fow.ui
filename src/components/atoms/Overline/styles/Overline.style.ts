import styled from 'styled-components';
import color from './color';

type OverlineProps = {
    color:
        | 'primary'
        | 'secondary'
        | 'disabled'
        | 'white'
        | 'black'
        | 'success'
        | 'warning'
        | 'error';
};

export const StyledOverline = styled.p<OverlineProps>`
    margin: 0;
    font-weight: 700;
    font-size: 1.2rem;
    font-style: normal;
    line-height: 1.8rem;
    letter-spacing: 1.2;

    ${(props) => color[props.color]}
`;
