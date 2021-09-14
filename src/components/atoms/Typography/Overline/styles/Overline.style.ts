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
    font-weight: 600;
    font-style: normal;
    font-size: 1rem;
    line-height: 1.8rem;
    letter-spacing: 1.1;

    ${(props) => color[props.color]}
`;
