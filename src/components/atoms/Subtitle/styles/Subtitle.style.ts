import styled from 'styled-components';
import { setLevel } from './level';
import color from './color';

type SubtitleProps = {
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

export const StyledSubtitle = styled.h3<SubtitleProps>`
    margin: 0;
    font-style: normal;

    ${(props) => color[props.color]}
    ${(props) => setLevel(props.level)}
`;
