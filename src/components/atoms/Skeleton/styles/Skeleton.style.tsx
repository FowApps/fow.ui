import styled, { keyframes } from 'styled-components';

import setVariant from './variant';

type LineProps = {
    width?: number;
    height: number;
    variant: 'flat' | 'pill' | 'circle';
};

const loading = keyframes`
    100% {
        transform: translateX(100%);
    }
`;

export const Line = styled.div<LineProps>`
    position: relative;
    overflow: hidden;
    width: ${(props) => (props.width ? `${props.width}px` : '100%')};
    height: ${(props) => props.height}px;
    background-color: ${(props) => props.theme.fow.colors.grey.transparent12};

    ${(props) => setVariant(props.variant)}

    &::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-image: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0,
            rgba(255, 255, 255, 0.2) 20%,
            rgba(255, 255, 255, 0.5) 60%,
            rgba(255, 255, 255, 0)
        );
        transform: translateX(-100%);
        animation: ${loading} 2s infinite;
    }
`;
