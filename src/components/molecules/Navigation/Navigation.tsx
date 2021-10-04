import React from 'react';
import {
    Divider,
    MenuProps as RcMenuProps,
    SubMenuProps as RcSubMenuProps,
    MenuItemProps as RcMenuItemProps,
} from 'rc-menu';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

import { StyledMenu, StyledSubMenu, StyledItem, IconWrapper } from './styles';
import Icon from '../../atoms/Icon';
import Space from '../../atoms/Space';
import Subtitle from '../../atoms/Typography/Subtitle';

export interface SubMenuProps extends RcSubMenuProps {
    icon?: FontAwesomeIconProps['icon'];
}

export interface MenuItemProps extends RcMenuItemProps {
    icon?: FontAwesomeIconProps['icon'];
    extra?: React.ReactNode;
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

const Menu = ({ children, ...rest }: RcMenuProps) => (
    <StyledMenu
        mode="inline"
        motion={collapseMotion}
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
);
const SubMenu = ({ icon, title, children, ...rest }: SubMenuProps) => {
    let titleNode: React.ReactNode;
    if (icon) {
        titleNode = (
            <Space>
                <IconWrapper style={{ width: 14, height: 14 }}>
                    <Icon icon={icon} />
                </IconWrapper>
                <Subtitle>{title}</Subtitle>
            </Space>
        );
    } else {
        titleNode = <Subtitle>{title}</Subtitle>;
    }
    return (
        <StyledSubMenu title={titleNode} {...rest}>
            {children}
        </StyledSubMenu>
    );
};
const Item = ({ extra, icon, children, ...rest }: MenuItemProps) => (
    <StyledItem {...rest}>
        <Space inline={false} align="center" justify="space-between">
            <Space>
                <IconWrapper>
                    {icon ? <Icon icon={icon} /> : <Icon icon="circle" />}
                </IconWrapper>
                <Subtitle>{children}</Subtitle>
            </Space>
            <div>{extra}</div>
        </Space>
    </StyledItem>
);

const Navigation = {
    Menu,
    SubMenu,
    Item,
    Divider,
};

export default Navigation;
