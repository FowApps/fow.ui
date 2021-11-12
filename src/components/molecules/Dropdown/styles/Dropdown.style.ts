import styled from 'styled-components';

interface ContentProps {
    state: any;
}

export const Content = styled.div<ContentProps>`
    width: 100%;
    min-width: fit-content;
    margin: 12px 0;
    opacity: 1;
    transition: opacity 0.2s linear;
    ${(props) =>
        props.state === 'exiting' || props.state === 'exited'
            ? 'opacity: 0;'
            : ''}
`;
