import React, { createContext, useContext } from 'react';
import {
    Divider,
    MenuProps as RcMenuProps,
    SubMenuProps as RcSubMenuProps,
    MenuItemProps as RcMenuItemProps,
} from 'rc-menu';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

import {
    DropdownStyles,
    StyledMenu,
    StyledSubMenu,
    StyledItem,
    IconWrapper,
    ItemWrapper,
} from './styles';
import Icon from '../../atoms/Icon';
import Space from '../../atoms/Space';
import Subtitle from '../../atoms/Typography/Subtitle';

export interface SubMenuProps extends RcSubMenuProps {
    icon?: FontAwesomeIconProps['icon'];
}

export interface MenuItemProps extends RcMenuItemProps {
    icon?: FontAwesomeIconProps['icon'];
    extra?: React.ReactNode;
    children: React.ReactElement<
        any,
        string | React.JSXElementConstructor<any> | string
    >;
}
interface IMenuContext {
    mode?: RcMenuProps['mode'];
}

const MenuContext = createContext<IMenuContext>({ mode: 'inline' });

const getCollapsedHeight = () => ({
    height: 0,
    opacity: 0,
});

const getRealHeight = (node) => {
    const { scrollHeight } = node;
    return { height: scrollHeight, opacity: 1 };
};

const getCurrentHeight = (node) => ({
    height: node ? node.offsetHeight : 0,
});

const skipOpacityTransition = (_, event) =>
    event?.deadline === true ||
    (event as TransitionEvent).propertyName === 'height';

const collapseMotion = {
    motionName: 'motion-collapse',
    onAppearStart: getCollapsedHeight,
    onEnterStart: getCollapsedHeight,
    onAppearActive: getRealHeight,
    onEnterActive: getRealHeight,
    onLeaveStart: getCurrentHeight,
    onLeaveActive: getCollapsedHeight,
    onAppearEnd: skipOpacityTransition,
    onEnterEnd: skipOpacityTransition,
    onLeaveEnd: skipOpacityTransition,
    motionDeadline: 500,
};

const renderGhostChildren = (children) => {
    if (typeof children === 'string') return null;
    if (children?.type?.displayName === 'Item') return null;

    if (Array.isArray(children))
        return children.map((child) => {
            if (typeof child === 'string') return null;
            if (child?.type?.displayName === 'Item') return null;

            return React.cloneElement(child, {
                style: {
                    position: 'absolute',
                    inset: 0,
                    opacity: 0,
                },
            });
        });

    return React.cloneElement(children, {
        style: {
            position: 'absolute',
            inset: 0,
            opacity: 0,
        },
    });
};

const Menu = ({ mode, children, ...rest }: RcMenuProps) => (
    <MenuContext.Provider value={{ mode }}>
        <DropdownStyles />
        <StyledMenu
            overflowedIndicator={<Icon icon="ellipsis-v" />}
            mode={mode}
            motion={
                mode === 'inline'
                    ? collapseMotion
                    : { motionName: 'rc-menu-open-slide-up' }
            }
            expandIcon={(props) => (
                <Icon
                    style={{ transition: 'all 0.3s ease' }}
                    size="1x"
                    rotation={props.isOpen ? 90 : undefined}
                    icon="chevron-right"
                />
            )}
            {...rest}>
            {children}
        </StyledMenu>
    </MenuContext.Provider>
);

const SubMenu = ({ icon, title, children, ...rest }: SubMenuProps) => {
    const { mode } = useContext(MenuContext);
    let titleNode: React.ReactNode;
    if (icon) {
        titleNode = (
            <Space>
                <IconWrapper style={{ width: 14, height: 14 }}>
                    <Icon icon={icon} />
                </IconWrapper>
                <Subtitle color="black">
                    <Space size="xsmall">
                        <span>{title}</span>
                        {mode === 'horizontal' && (
                            <Icon size="xs" icon="chevron-down" />
                        )}
                    </Space>
                </Subtitle>
            </Space>
        );
    } else {
        titleNode = (
            <Subtitle color="black">
                <Space size="xsmall">
                    <span>{title}</span>
                    {mode === 'horizontal' && (
                        <Icon size="xs" icon="chevron-down" />
                    )}
                </Space>
            </Subtitle>
        );
    }
    return (
        <StyledSubMenu title={titleNode} {...rest}>
            {children}
            {renderGhostChildren(children)}
        </StyledSubMenu>
    );
};

const Item = ({ extra, icon, children, ...rest }: MenuItemProps) => (
    <StyledItem {...rest}>
        <Space inline={false} align="center" justify="space-between">
            <ItemWrapper>
                {icon && (
                    <IconWrapper>
                        <Icon icon={icon} />
                    </IconWrapper>
                )}
                <Subtitle color="black">
                    {children}
                    {renderGhostChildren(children)}
                </Subtitle>
            </ItemWrapper>
            {extra && <div>{extra}</div>}
        </Space>
    </StyledItem>
);

Menu.displayName = 'Menu';
SubMenu.displayName = 'SubMenu';
Item.displayName = 'Item';

const Navigation = {
    Menu,
    SubMenu,
    Item,
    Divider,
};

export default Navigation;
