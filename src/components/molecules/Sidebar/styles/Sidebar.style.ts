import styled from 'styled-components';
import { motion } from 'framer-motion';

export const COLLAPSED_WIDTH = '24px';
export const EXPANDED_WIDTH = '240px';

type SiderProps = {
    noGutter: boolean;
};

export const SidebarVariants = {
    expanded: () => ({
        width: EXPANDED_WIDTH,
        transition: {
            duration: 0.2,
            when: 'beforeChildren',
        },
    }),
    collapsed: () => ({
        width: COLLAPSED_WIDTH,
        transition: {
            duration: 0.2,
            when: 'afterChildren',
        },
    }),
};

export const ContentVariants = {
    expanded: {
        opacity: 1,
        display: 'flex',
        transition: {
            duration: 0.1,
        },
    },
    collapsed: {
        opacity: 0,
        transition: {
            duration: 0.1,
        },
        transitionEnd: {
            display: 'none',
        },
    },
};

export const Sider = styled(motion.div)<SiderProps>`
    position: relative;
    z-index: 99;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    min-width: 0;
    height: 100%;
    padding: ${(props) => (props.noGutter ? 0 : props.theme.fow.spacing.small)};
    background-color: ${(props) => props.theme.fow.colors.common.white};
    box-shadow: inset -1px 0px 0px rgba(145, 158, 171, 0.24);
`;
export const Trigger = styled.button`
    position: absolute;
    top: 16px;
    right: -16px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border: 1px solid rgba(145, 158, 171, 0.24);
    border-radius: 50%;
    background-color: ${(props) => props.theme.fow.colors.common.white};
    color: ${(props) => props.theme.fow.colors.text.secondary};
    outline: none;
    cursor: pointer;
    transition: opacity 0.3s ease;
`;

export const Content = styled(motion.div)`
    flex-direction: column;
    overflow-x: hidden;
    overflow-y: auto;
    width: 100%;
    height: 100%;
`;
