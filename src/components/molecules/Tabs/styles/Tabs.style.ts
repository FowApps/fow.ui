import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

type ContainerProps = {
    direction: 'vertical' | 'horizontal';
};

type ItemProps = {
    direction: 'vertical' | 'horizontal';
    fluid: boolean;
    isActive: boolean;
    disabled?: boolean;
};

type TabItemProps = {
    icon?: React.ReactNode;
    index: number;
    label?: string;
    disabled?: boolean;
};

type IconProps = {
    isActive: boolean;
};

export const Container = styled.div<ContainerProps>`
    display: flex;
    overflow: hidden;
    ${(props) =>
        props.direction === 'horizontal' &&
        css`
            flex-direction: column;
        `}
`;

export const Surface = styled.ul<ContainerProps>`
    position: relative;
    display: flex;
    flex: none;
    align-items: center;
    margin: 0;
    padding: 0;
    list-style: none;

    ${(props) =>
        props.direction === 'vertical' &&
        css`
            flex-direction: column;
            min-width: 50px;
            max-width: 200px;
        `}
`;

export const Item = styled.li<ItemProps>`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: ${(props) =>
        props.direction === 'vertical' ? 'flex-start' : 'center'};
    width: ${(props) =>
        props.direction === 'vertical' || props.fluid ? '100%' : 'auto'};
    height: ${(props) => (props.direction === 'vertical' ? 'auto' : '5.4rem')};
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    opacity: ${(props) => (props.disabled ? 0.5 : 1)};
    padding-inline: ${(props) => props.theme.fow.spacing.large};
    padding-block: ${(props) => props.theme.fow.spacing.medium};

    h3,
    div {
        transition: all 0.3s ease;
    }

    &:hover {
        h3,
        div {
            color: ${(props) => props.theme.fow.colors.primary.main};
        }
    }

    &:after {
        content: '';
        position: absolute;
        right: ${(props) =>
            props.direction === 'vertical' ? '-2px' : 'unset'};
        bottom: 0;
        left: ${(props) => (props.direction === 'vertical' ? 'unset' : '-2px')};
        width: ${(props) => (props.direction === 'vertical' ? '3px' : '100%')};
        height: ${(props) => (props.direction === 'vertical' ? '100%' : '3px')};
        background-color: ${(props) =>
            props.isActive && props.theme.fow.colors.primary.main};
        transition: all 0.3s ease;
    }
`;

export const TabContentHolder = styled.div<ContainerProps>`
    flex: auto;
    min-width: 0;
    min-height: 0;

    ${(props) =>
        props.direction === 'vertical' &&
        css`
            margin-left: -1px;
            border-left: 1px solid ${props.theme.fow.colors.divider};
        `}
`;

export const TabContent = styled(motion.div)<ContainerProps>`
    display: flex;
    width: 100%;
`;

export const IconWrapper = styled.div<IconProps>`
    color: ${(props) =>
        props.isActive
            ? props.theme.fow.colors.primary.main
            : props.theme.fow.colors.grey.main};
`;

export const TabPane = styled(motion.div)<ItemProps>`
    flex: none;
    width: 100%;
    outline: none;

    ${(props) =>
        props.direction === 'vertical'
            ? css`
                  padding-left: ${props.theme.fow.spacing.medium};
              `
            : css`
                  padding-top: ${props.theme.fow.spacing.medium};
              `}
`;

export const Wrapper = styled.div<TabItemProps>``;
