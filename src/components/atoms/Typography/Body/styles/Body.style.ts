import styled from 'styled-components';
import { setLevel } from './level';

type BodyProps = {
    level: 1 | 2 | 3;
};

export const StyledBody = styled.h3<BodyProps>`
    overflow: hidden;
    margin: 0;
    text-overflow: ellipsis;

    ${(props) => setLevel(props.level)}
`;
