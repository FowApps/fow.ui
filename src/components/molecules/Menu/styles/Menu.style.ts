import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledNavLink = styled.a`
    color: red;
    text-decoration: none;
`;

export const StyledIconWrapper = styled.div`
    padding: 0 10px;
`;

export const StyledNavItem = styled.div`
    &.selected > ${StyledNavLink} {
        background: #1b2642;
    }
    &:not(.selected):hover:not(.category) {
        background: #1b2642;
    }

    &.category {
        margin-bottom: 10px;
        color: red;
    }
`;

export const StyledLinkItem = styled.li`
    width: 100%;
    padding: 16px 24px;
    list-style: none;
    border-bottom: 1px solid #e3e3e3;
    cursor: pointer;
`;

export const StyledItemGroup = styled.li`
    width: 100%;
    padding: 16px 24px;
    list-style: none;
    border-bottom: 1px solid #e3e3e3;
    cursor: pointer;
    transition: color 0.4s ease;
`;

export const Content = styled(motion.ul)`
    overflow: hidden;
    border-bottom: 1px solid
        ${(props) => props.theme.fow.colors.grey.transparent32};

    &:last-of-type {
        border-bottom: none;
    }
`;
