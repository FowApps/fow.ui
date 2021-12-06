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
    border-bottom: 1px solid
        ${(props) => props.theme.fow.colors.grey.transparent32};

    &:last-of-type {
        border-bottom: none;
    }
`;

export const Trigger = styled.div<TriggerProps>`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    border-bottom: 1px solid
        ${(props) => props.theme.fow.colors.grey.transparent32};
    background-color: ${(props) => props.theme.fow.colors.common.white};
    cursor: pointer;
    padding-inline: ${(props) => props.theme.fow.spacing.xlarge};
    padding-block: ${(props) => props.theme.fow.spacing.small};
    transition: color 0.4s ease;
    padding: 8px 16px;
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
    border-radius: 0;
    background-color: transparent;
`;

export const IconWrapper = styled.div`
    margin-right: ${(props) => props.theme.fow.spacing.small};
    svg {
        width: 12px !important;
    }
`;
export const HeaderWrapper = styled.div`
    margin-left: ${(props) => props.theme.fow.spacing.xlarge};
    ul,
    p {
        padding: 0;
        margin-top: ${(props) => props.theme.fow.spacing.xsmall};
        margin-bottom: 0;
    }
`;
