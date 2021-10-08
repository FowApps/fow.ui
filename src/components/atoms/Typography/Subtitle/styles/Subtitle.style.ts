import styled from 'styled-components';
import { setLevel } from './level';

type SubtitleProps = {
    level: 1 | 2 | 3;
};

export const StyledSubtitle = styled.h3<SubtitleProps>`
    margin: 0;
    ${(props) => setLevel(props.level)}
`;
