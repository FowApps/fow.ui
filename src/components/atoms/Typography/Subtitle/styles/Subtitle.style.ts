import styled from 'styled-components';
import { setLevel } from './level';

type SubtitleProps = {
    level: 1 | 2;
};

export const StyledSubtitle = styled.h3<SubtitleProps>`
    margin: 0;
    font-style: normal;

    ${(props) => setLevel(props.level)}
`;
