import styled from 'styled-components';
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
    flex-direction: ${(props) =>
        props.direction === 'vertical' ? 'row' : 'column'};
`;

export const Surface = styled.ul<ContainerProps>`
    position: relative;
    display: flex;
    flex-direction: ${(props) =>
        props.direction === 'vertical' ? 'column' : 'row'};
    align-items: ${(props) =>
        props.direction === 'vertical' ? 'flex-end' : 'center'};
    justify-content: flex-start;
    width: ${(props) => (props.direction === 'vertical' ? '20rem' : '100%')};
    min-width: ${(props) =>
        props.direction === 'vertical' ? '20rem' : '100%'};
    max-width: ${(props) =>
        props.direction === 'vertical' ? '20rem' : '100%'};
    margin: 0;
    padding: 0;
    border-right: ${(props) =>
        props.direction === 'vertical'
            ? `1px solid ${props.theme.fow.colors.divider}`
            : 'center'};
    list-style: none;
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

export const TabContent = styled(motion.div)<ItemProps>`
    width: ${(props) =>
        props.direction === 'vertical' ? 'calc(100% - 20rem)' : '100%'};
    min-width: ${(props) =>
        props.direction === 'vertical' ? 'calc(100% - 20rem)' : '100%'};
    max-width: ${(props) =>
        props.direction === 'vertical' ? 'calc(100% - 20rem)' : '100%'};
    padding-top: ${(props) =>
        props.direction === 'vertical' ? '0' : props.theme.fow.spacing.medium};
    padding-left: ${(props) =>
        props.direction === 'vertical' ? props.theme.fow.spacing.medium : '0'};
`;

export const IconWrapper = styled.div<IconProps>`
    color: ${(props) =>
        props.isActive
            ? props.theme.fow.colors.primary.main
            : props.theme.fow.colors.grey.main};
`;

export const Wrapper = styled.div<TabItemProps>``;
