import React from 'react';
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
    <>
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
    </>
);

const SubMenu = ({ icon, title, children, ...rest }: SubMenuProps) => {
    let titleNode: React.ReactNode;
    if (icon) {
        titleNode = (
            <Space>
                <IconWrapper style={{ width: 14, height: 14 }}>
                    <Icon icon={icon} />
                </IconWrapper>
                <Subtitle color="secondary">{title}</Subtitle>
            </Space>
        );
    } else {
        titleNode = <Subtitle color="secondary">{title}</Subtitle>;
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
            <Space>
                {icon && (
                    <IconWrapper>
                        <Icon icon={icon} />
                    </IconWrapper>
                )}
                <Subtitle color="secondary">
                    {children}
                    {renderGhostChildren(children)}
                </Subtitle>
            </Space>
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
