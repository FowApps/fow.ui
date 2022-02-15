import styled, { keyframes } from 'styled-components';

type PulseDotProps = {
    color: 'primary' | 'info' | 'warning' | 'success' | 'error' | 'grey';
};

const pulse = (primary) => keyframes`
    0% {
        box-shadow: 0 0 0 0 ${primary};
        transform: scale(0.95);
    }

    70% {
        box-shadow: 0 0 0 6px rgba(255, 121, 63, 0);
        transform: scale(1);
    }

    100% {
        box-shadow: 0 0 0 0 rgba(255, 121, 63, 0);
        transform: scale(0.95);
    }
`;

export const Dot = styled.div<PulseDotProps>`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    transform: scale(1);

    background-color: ${(props) => props.theme.fow.colors[props.color].main};
    animation: ${(props) => pulse(props.theme.fow.colors[props.color].main)} 2s
        infinite;
    box-shadow: 0 0 0 0 ${(props) => props.theme.fow.colors[props.color].main};
    background: ${(props) => props.theme.fow.colors[props.color].main};
`;
