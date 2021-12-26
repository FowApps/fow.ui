import styled from 'styled-components';
import { TransitionStatus } from 'react-transition-group';

interface ContentProps {
    state: TransitionStatus;
}

export const Content = styled.div<ContentProps>`
    width: 100%;
    min-width: fit-content;
    margin: ${(props) => props.theme.fow.spacing.small} 0;
    opacity: 1;
    transition: opacity 0.3s linear;
    ${(props) =>
        props.state === 'exiting' || props.state === 'exited'
            ? 'opacity: 0;'
            : ''}
`;
