import styled, { keyframes } from 'styled-components';

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

export const Dot = styled.div`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    box-shadow: 0 0 0 0 ${(props) => props.theme.fow.colors.primary.main};
    transform: scale(1);
    animation: ${(props) => pulse(props.theme.fow.colors.primary.main)} 2s
        infinite;
    background: ${(props) => props.theme.fow.colors.primary.main};
`;
