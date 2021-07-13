import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import Space from '../../atoms/Space';
import Icon from '../../atoms/Icon';

import { ItemWrapper, MenuWrapper, Content } from './styles';

export interface MenuProps {
    /**
     * initial open index
     */
    defaultIndex: number;
    /**
     * click event on trigger
     */
    onItemClick: (index: number) => void;
    children: React.ReactNode | React.ReactNode[];
}

export interface ItemProps {
    /**
     * label of trigger
     */
    label: string;
    icon?: React.ReactNode;
    collapsable?: boolean;
    isCollapsed?: boolean;
    children: React.ReactNode | React.ReactNode[];
    handleClick?: () => void;
    index: number;
}

export interface SubItemProps {
    icon?: React.ReactNode;
    text: string;
}

const Item = ({
    icon,
    collapsable,
    isCollapsed,
    children,
    label,
    handleClick,
}: ItemProps) => (
    <>
        {collapsable ? (
            <>
                <ItemWrapper
                    isCollapsed={isCollapsed}
                    collapsable={collapsable}
                    role="button"
                    onClick={handleClick}>
                    <Space>
                        {icon}
                        <span>{label}</span>
                    </Space>
                    {isCollapsed ? (
                        <Icon icon="chevron-down" />
                    ) : (
                        <Icon icon="chevron-up" />
                    )}
                </ItemWrapper>
                <AnimatePresence>
                    {!isCollapsed && (
                        <Content
                            key="content"
                            initial="collapsed"
                            animate="open"
                            exit="collapsed"
                            variants={{
                                open: { opacity: 1, height: 'auto' },
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
            </>
        ) : (
            <ItemWrapper role="button" isCollapsed={isCollapsed}>
                <Space>
                    {icon}
                    <span>{label}</span>
                </Space>
            </ItemWrapper>
        )}
    </>
);

const SubItem = ({ text, icon }: SubItemProps) => (
    <>
        <Space>{icon}</Space>
        <span>{text}</span>
    </>
);

const Menu = ({
    defaultIndex,
    onItemClick,
    children,
}: MenuProps): JSX.Element => {
    const [menuItemIndex, setMenuItemIndex] = useState(defaultIndex);
    const [isActive, setIsActive] = useState(false);

    const changeItem = (itemIndex: number) => {
        setIsActive(!isActive);
        if (typeof onItemClick === 'function') onItemClick(itemIndex);
        if (itemIndex !== menuItemIndex) {
            setMenuItemIndex(itemIndex);
        } else {
            setMenuItemIndex(-1);
        }
    };

    const items = React.Children.map(children, (child: any) =>
        child?.type?.name === 'Item' ? child : null,
    );

    return (
        <MenuWrapper>
            {items.map(({ props }) => (
                <Item
                    icon={props.icon}
                    key={`accordion-item-${props.index}`}
                    isCollapsed={menuItemIndex !== props.index}
                    collapsable={props.collapsable}
                    label={props.label}
                    handleClick={() => changeItem(props.index)}
                    index={props.index}>
                    {props.children}
                </Item>
            ))}
        </MenuWrapper>
    );
};

Menu.Item = Item;
Menu.SubItem = SubItem;

export default Menu;
