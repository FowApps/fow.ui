import styled from 'styled-components';
import { motion } from 'framer-motion';

type ItemWrapperProps = {
    collapsable?: boolean;
    isCollapsed?: boolean;
};

export const ItemWrapper = styled.div<ItemWrapperProps>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-inline: ${(props) => props.theme.fow.spacing.xxlarge};
    padding-block: ${(props) => props.theme.fow.spacing.medium};
    background-color: ${(props) =>
        props.isCollapsed ? 'none' : 'rgba(253, 114, 95, 0.08)'};
    cursor: pointer;
    transition: color 0.4s ease;
`;

export const Content = styled(motion.div)`
    overflow: hidden;
    border-bottom: 1px solid
        ${(props) => props.theme.fow.colors.grey.transparent32};

    &:last-of-type {
        border-bottom: none;
    }
`;

export const MenuWrapper = styled.div`
    background-color: transparent;
    border-radius: 8px;
`;
