import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledNavLink = styled.a`
    color: ${(props) => props.theme.fow.colors.grey.dark};
    font-weight: 500;
    text-decoration: none;

    &:hover {
        color: ${(props) => props.theme.fow.colors.primary.main};
    }
`;

export const StyledIconWrapper = styled.div`
    margin-right: 24px;
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
    cursor: pointer;
    transition: all 0.4s ease;

    &:hover {
        background-color: ${(props) =>
            props.theme.fow.colors.primary.transparent8};
        transition: background-color 0.4s ease;
    }
`;

export const StyledItemGroup = styled.li`
    width: 100%;
    padding: 16px 24px;
    color: ${(props) => props.theme.fow.colors.grey.dark};
    font-weight: 500;
    list-style: none;
    cursor: pointer;
    transition: all 0.4s ease;

    &:hover {
        color: ${(props) => props.theme.fow.colors.primary.main};
        background-color: ${(props) =>
            props.theme.fow.colors.primary.transparent8};
        transition: background-color 0.4s ease;
    }
`;

export const StyledItem = styled.div`
    display: flex;
`;

export const StyledName = styled.div`
    flex: 1;
`;

export const StyledItemIconWrapper = styled.span`
    margin-right: 24px;
`;

export const StyledLinkItemNameWrapper = styled.div`
    display: flex;
`;

export const Content = styled(motion.div)`
    overflow: hidden;

    &:last-of-type {
        li {
            list-style: circle;
            &:first-child {
                margin-top: 10px;
            }

            a {
                display: inline-flex;
            }
        }
    }
`;
