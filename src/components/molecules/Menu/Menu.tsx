import React from 'react';
import Subtitle from '../../atoms/Typography/Subtitle';

import { MenuWrapper, ItemWrapper } from './styles';

export interface MenuProps {
    /**
     * click function of items
     */
    onClick?: (itemKey: any) => void;
    children: React.ReactNode;
}

export interface MenuItemProps {
    /**
     * index of item
     */
    index: number;
    handleClick?: (itemKey: any) => void;
    children: React.ReactNode;
}

const MenuItem = ({
    index,
    handleClick,
    children,
}: MenuItemProps): JSX.Element => (
    <ItemWrapper
        onClick={() => {
            if (typeof handleClick === 'function') handleClick(index);
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

const Menu = ({ onClick, children }: MenuProps): JSX.Element => {
    const handleClick = (itemIndex: string) => {
        if (typeof onClick === 'function') onClick(itemIndex);
    };

    const items = React.Children.map(children, (child: any) =>
        child?.type?.displayName === 'MenuItem' ? child : null,
    );

    return (
        <MenuWrapper>
            {items.map(({ props }) => (
                <MenuItem index={props.index} handleClick={handleClick}>
                    {props.children}
                </MenuItem>
            ))}
        </MenuWrapper>
    );
};

Menu.displayName = 'Menu';
MenuItem.displayName = 'MenuItem';

Menu.Item = MenuItem;
export default Menu;
