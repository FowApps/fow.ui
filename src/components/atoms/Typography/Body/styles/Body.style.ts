import styled from 'styled-components';
import { setLevel } from './level';

type BodyProps = {
    level: 1 | 2;
};

export const StyledSubtitle = styled.h3<BodyProps>`
    margin: 0;

    ${(props) => setLevel(props.level)}
`;
