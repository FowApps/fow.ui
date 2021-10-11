import styled, { keyframes, css } from 'styled-components';
import { motion } from 'framer-motion';

import setVariant from './variant';
import setSize from './size';

type ButtonProps = {
    color: 'primary' | 'info' | 'warning' | 'success' | 'error' | 'grey';
    size: 'large' | 'medium' | 'small';
    variant: 'text' | 'outlined' | 'contained';
    fluid: boolean;
    fab: boolean;
    hasChildren: boolean;
    loading: number;
};

type LoaderProps = {
    color: 'primary' | 'info' | 'warning' | 'success' | 'error' | 'grey';
    variant: 'text' | 'outlined' | 'contained';
};

const rotate = keyframes`
    to { 
        transform: rotate(360deg); 
    }
`;

export const StyledButton = styled.button<ButtonProps>`
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    width: ${(props) => (props.fluid ? '100%' : 'auto')} !important;
    min-width: ${(props) =>
        props.fab || !props.hasChildren ? 'unset' : '80px'} !important;
    border-radius: ${(props) => (props.fab ? 50 : 8)}px;
    outline: none;
    white-space: nowrap;
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    pointer-events: ${(props) => (props.loading ? 'none' : 'all')};
    user-select: none;
    transition: all 0.3s ease;
    appearance: none;

    ${(props) => setVariant(props.color, props.variant)}
    ${(props) => setSize(props.size, props.fab, props.hasChildren)}

    > span {
        transition: opacity 0.3s ease;
        ${(props) =>
            props.loading &&
            css`
                opacity: 0;
            `};
    }
`;

export const StyledButtonLoader = styled(motion.div)<LoaderProps>`
    position: absolute;
    display: inline-block;
    width: 2rem;
    height: 2rem;
    border: 3px solid
        ${(props) =>
            props.variant === 'contained'
                ? props.theme.fow.colors.common.white48
                : props.theme.fow.colors[props.color].transparent48};
    border-top-color: ${(props) =>
        props.variant === 'contained'
            ? props.theme.fow.colors.common.white
            : props.theme.fow.colors[props.color].main};
    border-radius: 50%;
    animation: ${rotate} 1s ease-in-out infinite;
`;
