import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

import Icon from '../../atoms/Icon';

import {
    StyledNavLink,
    StyledIconWrapper,
    StyledNavItem,
    StyledLinkItem,
    StyledItemGroup,
    StyledItem,
    StyledName,
    StyledItemIconWrapper,
    StyledLinkItemNameWrapper,
    Content,
} from './styles';

export interface MenuProps {
    children?: React.ReactNode;
    map(param: (child, i) => JSX.Element): JSX.Element;
}

export interface ItemProps {
    name: string;
    icon?: FontAwesomeIconProps['icon'] | undefined;
    children?: React.ReactNode;
    idx: number;
    onClick: (e: any) => void;
    isOpen: boolean;
}

const Item = ({
    name,
    icon,
    children,
    idx,
    onClick,
    isOpen,
}: ItemProps): JSX.Element => (
    <StyledItemGroup onClick={onClick} key={idx}>
        <StyledItem>
            <StyledName>
                {icon && (
                    <StyledItemIconWrapper>
                        <Icon icon={icon} />
                    </StyledItemIconWrapper>
                )}
                <span>{name}</span>
            </StyledName>
            {children && (
                <span>
                    <Icon icon="chevron-right" />
                </span>
            )}
        </StyledItem>
        <AnimatePresence>
            {isOpen && (
                <Content
                    key="content"
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                        open: {
                            opacity: 1,
                            height: 'auto',
                        },
                        collapsed: { opacity: 0, height: 0 },
                    }}
                    transition={{
                        duration: 0.4,
                        ease: [0.04, 0.62, 0.23, 0.98],
                    }}>
                    {children}
                </Content>
            )}
        </AnimatePresence>
    </StyledItemGroup>
);

const Menu = (children: MenuProps): JSX.Element => {
    const [itemState, setItemState] = useState({});

    const handleClick = (e: React.MouseEvent<HTMLElement>, item: string) => {
        e.stopPropagation();
        setItemState((currentItemState) => ({
            ...currentItemState,
            [item]: !currentItemState[item],
        }));
    };

    return children.map((child, i) => {
        const category = !child?.category ? null : (
            <StyledNavItem className="category">
                {child?.category}
            </StyledNavItem>
        );
        if (!child?.children) {
            return (
                <>
                    {category}
                    <StyledLinkItem
                        onClick={(e) => handleClick(e, child?.name)}
                        key={i}>
                        <StyledNavLink href={child?.url}>
                            <StyledLinkItemNameWrapper>
                                {child?.icon && (
                                    <StyledIconWrapper>
                                        <Icon icon={child?.icon} />
                                    </StyledIconWrapper>
                                )}
                                <span>{child?.name}</span>
                            </StyledLinkItemNameWrapper>
                        </StyledNavLink>
                    </StyledLinkItem>
                </>
            );
        }
        return (
            <>
                {category}
                <Item
                    name={child?.name}
                    icon={child?.icon}
                    idx={i}
                    onClick={(e) => handleClick(e, child?.name)}
                    isOpen={itemState[child?.name]}>
                    {Menu(child?.children)}
                </Item>
            </>
        );
    });
};

export default Menu;
