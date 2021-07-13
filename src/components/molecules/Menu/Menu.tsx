/* eslint-disable jsx-a11y/interactive-supports-focus */
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
    onClick?: () => void;
    index: number;
}

export interface SubItemProps {
    icon?: React.ReactNode;
    text: string;
    onClick: () => void;
}

const Item = ({
    icon,
    collapsable,
    isCollapsed,
    children,
    label,
    onClick,
}: ItemProps) => (
    <>
        {collapsable ? (
            <>
                <ItemWrapper
                    isCollapsed={isCollapsed}
                    collapsable={collapsable}
                    role="button"
                    onClick={onClick}>
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
            <ItemWrapper
                role="button"
                isCollapsed={isCollapsed}
                onClick={onClick}>
                <Space>
                    {icon}
                    <span>{label}</span>
                </Space>
                {children && <Content>{children}</Content>}
            </ItemWrapper>
        )}
    </>
);

const SubItem = ({ text, icon, onClick }: SubItemProps) => (
    <div role="button" onClick={onClick}>
        <Space>{icon}</Space>
        <span>{text}</span>
    </div>
);

const Menu = ({ defaultIndex, children }: MenuProps): JSX.Element => {
    const [menuItemIndex, setMenuItemIndex] = useState(defaultIndex);
    const [isActive, setIsActive] = useState(false);

    const changeItem = (itemIndex: number) => {
        setIsActive(!isActive);
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
                    onClick={() => {
                        changeItem(props.index);
                        props.onClick();
                    }}
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
