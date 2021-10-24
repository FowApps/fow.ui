import styled from 'styled-components';
import setColor from './color';

type ProgressBarProps = {
    progress?: number | undefined;
    color?: string;
};

export const StyledProgressBar = styled.div<ProgressBarProps>`
    display: flex;
    width: 100%;
    height: 0.5rem;
    border-radius: 10rem;
    transition: background-color 200ms ease;
    background: ${(props) => props.theme.fow.colors.grey.lighter};
`;

export const StyledDiv = styled.div<ProgressBarProps>`
    width: ${(props) => props.progress}%;
    height: 100%;
    border-radius: 100px;
    ${(props) => setColor(props.progress)};
`;
