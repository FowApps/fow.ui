import React, { ComponentPropsWithoutRef } from 'react';
import Subtitle from '../../atoms/Typography/Subtitle';
import Divider from '../../atoms/Divider';

import { MenuWrapper, ItemWrapper, Title } from './styles';

export interface MenuProps {
    /**
     * click function of items
     */
    onClick?: (itemKey: any) => void;
    /**
     * title of menu
     */
    title?: React.ReactNode;
    children: React.ReactNode;
}

export interface MenuItemProps extends ComponentPropsWithoutRef<'div'> {
    /**
     * index of item
     */
    index: number;
    /**
     * handle click item
     */
    onClick?: () => void;
    /**
     * handle change function of items
     */
    handleChange?: (itemKey: any) => void;
    children: React.ReactNode;
}

const MenuDivider = () => <Divider />;

const MenuItem = ({
    index,
    onClick,
    handleChange,
    children,
    ...rest
}: MenuItemProps): JSX.Element => (
    <ItemWrapper
        {...rest}
        onClick={() => {
            if (typeof handleChange === 'function') handleChange(index);
            if (typeof onClick === 'function') onClick();
        }}>
        {typeof children === 'string' ? (
            <Subtitle level={2} color="secondary">
                {children}
            </Subtitle>
        ) : (
            children
        )}
    </ItemWrapper>
);

const Menu = ({
    onClick,
    children,
    title,
    ...rest
}: MenuProps): JSX.Element => {
    const handleChange = (itemIndex: string) => {
        if (typeof onClick === 'function') onClick(itemIndex);
    };

    const items = React.Children.map(children, (child: any) =>
        child?.type?.displayName === 'Divider' ||
        child?.type?.displayName === 'MenuItem'
            ? child
            : null,
    );

    return (
        <MenuWrapper {...rest}>
            {title && (
                <>
                    <Title>
                        {typeof title === 'string' ? (
                            <Subtitle level={2} color="secondary">
                                {title}
                            </Subtitle>
                        ) : (
                            title
                        )}
                    </Title>
                    <Divider size="xsmall" />
                </>
            )}
            {items.map(({ props, type }) => {
                switch (type.displayName) {
                    case 'MenuItem':
                        return (
                            <MenuItem
                                key={props.index}
                                index={props.index}
                                onClick={props.onClick}
                                handleChange={handleChange}>
                                {props.children}
                            </MenuItem>
                        );

                    case 'Divider':
                        return <Divider size="xsmall" />;

                    default:
                        return (
                            <MenuItem
                                index={props.index}
                                onClick={props.onClick}
                                handleChange={handleChange}>
                                {props.children}
                            </MenuItem>
                        );
                }
            })}
        </MenuWrapper>
    );
};

Menu.displayName = 'Menu';
MenuItem.displayName = 'MenuItem';
MenuDivider.displayName = 'Divider';

Menu.Item = MenuItem;
Menu.Divider = MenuDivider;

export default Menu;
