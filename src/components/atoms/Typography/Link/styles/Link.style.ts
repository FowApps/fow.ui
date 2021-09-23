import styled from 'styled-components';
import { setLevel } from './level';

type LinkProps = {
    hoverColor:
        | 'primary'
        | 'secondary'
        | 'disabled'
        | 'white'
        | 'black'
        | 'success'
        | 'warning'
        | 'error';
    level: 1 | 2 | 3;
};

export const StyledLink = styled.a<LinkProps>`
    display: inline-flex;
    align-items: center;
    font-style: normal;
    ${(props) => setLevel(props.level)}
`;
