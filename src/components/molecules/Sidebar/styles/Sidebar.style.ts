import styled from 'styled-components';
import { motion } from 'framer-motion';

export const COLLAPSED_WIDTH = '12px';
export const EXPANDED_WIDTH = '200px';

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
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    min-width: 0;
    padding: ${(props) => (props.noGutter ? 0 : props.theme.fow.spacing.small)};
    background-color: ${(props) => props.theme.fow.colors.common.white};
    box-shadow: inset -1px 0px 0px rgba(145, 158, 171, 0.24);

    &:hover button {
        opacity: 1;
    }
`;
export const Trigger = styled.button`
    position: absolute;
    top: 12px;
    right: -12px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    border: 1px solid rgba(145, 158, 171, 0.24);
    border-radius: 50%;
    background-color: ${(props) => props.theme.fow.colors.common.white};
    color: ${(props) => props.theme.fow.colors.text.secondary};
    outline: none;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.3s ease;
`;

export const Content = styled(motion.div)`
    width: 100%;
    height: 100%;
`;
