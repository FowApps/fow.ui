import styled from 'styled-components';
import { setLevel } from './level';
import color from './color';

type SubTitleProps = {
    level: 1 | 2;
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

export const StyledSubTitle = styled.h3<SubTitleProps>`
    font-style: normal;
    margin: 0;

    ${(props) => color[props.color]}
    ${(props) => setLevel(props.level)}
`;
