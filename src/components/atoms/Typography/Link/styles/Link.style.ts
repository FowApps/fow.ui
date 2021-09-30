import styled from 'styled-components';
import { setLevel } from './level';

type LinkProps = {
    level: 1 | 2 | 3;
};

export const StyledLink = styled.a<LinkProps>`
    display: inline-block;

    ${(props) => setLevel(props.level)}

    span {
        transition: color 0.3s ease;
    }

    &:hover span {
        color: ${(props) => props.theme.fow.colors.primary.main};
    }
`;
