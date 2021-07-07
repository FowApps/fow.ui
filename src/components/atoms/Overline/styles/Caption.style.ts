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
    font-style: normal;
    margin: 0;
    font-size: 1.2rem;
    line-height: 1.8rem;
    font-weight: 700;
    letter-spacing: 1.2;

    ${(props) => color[props.color]}
`;
