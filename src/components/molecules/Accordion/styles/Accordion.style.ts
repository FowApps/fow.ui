import styled from 'styled-components';
import { motion } from 'framer-motion';

type TriggerProps = {
    isCollapsed?: boolean;
    bordered?: boolean;
};

type WrapperProps = {
    bordered: boolean;
};

export const Content = styled(motion.div)`
    overflow: hidden;
    border-bottom: 1px solid
        ${(props) => props.theme.fow.colors.grey.transparent32};

    &:last-of-type {
        border-bottom: none;
    }
`;

export const Trigger = styled.div<TriggerProps>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid
        ${(props) => props.theme.fow.colors.grey.transparent32};
    background-color: ${(props) => props.theme.fow.colors.common.white};
    cursor: pointer;
    padding-inline: ${(props) => props.theme.fow.spacing.small};
    padding-block: ${(props) => props.theme.fow.spacing.small};
    transition: color 0.4s ease;

    &:last-of-type {
        border-bottom: ${(props) =>
            props.bordered
                ? props.theme.fow.colors.grey.transparent32
                : 'none'};
    }
`;

export const Wrapper = styled.div<WrapperProps>`
    border: ${(props) => (props.bordered ? '1px' : '0')} solid
        ${(props) => props.theme.fow.colors.grey.transparent32};
    border-radius: 8px;
    background-color: transparent;
`;
