import styled from 'styled-components';
import { TransitionStatus } from 'react-transition-group';

interface ContentProps {
    state: TransitionStatus;
    transitionDuration: number;
}

export const Content = styled.div<ContentProps>`
    width: 100%;
    min-width: fit-content;
    margin: ${(props) => props.theme.fow.spacing.small} 0;
    opacity: 1;
    transition: opacity ${(props) => props.transitionDuration}ms linear;
    ${(props) =>
        props.state === 'exiting' || props.state === 'exited'
            ? 'opacity: 0;'
            : ''}
`;
