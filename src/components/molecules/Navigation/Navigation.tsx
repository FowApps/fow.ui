/* eslint-disable jsx-a11y/interactive-supports-focus */
import React, {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useRef,
} from 'react';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { AnimatePresence } from 'framer-motion';

import Icon from '../../atoms/Icon';
import Space from '../../atoms/Space';
// import Subtitle from '../../atoms/Typography/Subtitle';
import {
    MenuWrapper,
    MenuItem,
    Link,
    SubMenuWrapper,
    SubMenuItem,
} from './styles';
import { ConfigContext } from '../../../theme/FowThemeProvider';
import { useDisclosure } from '../../..';

export interface SubMenuProps {
    title: string;
    icon?: FontAwesomeIconProps['icon'];
    children: React.ReactNode;
}

export interface MenuItemProps {
    icon?: FontAwesomeIconProps['icon'];
    extra?: React.ReactNode;
    as?: any;
    active?: boolean;
    isSub?: boolean;
    activePathRegex?: string;
    children: React.ReactNode;
}

export interface MenuProps {
    bordered?: boolean;
    location?: string;
    mode?: 'vertical' | 'horizontal';
    children: React.ReactNode;
}
interface IMenuContext {
    mode?: 'vertical' | 'horizontal';
    location?: any;
}

const MenuContext = createContext<IMenuContext>({ mode: 'horizontal' });

const Menu = ({ mode, bordered = false, children, ...rest }: MenuProps) => {
    const { location } = useContext(ConfigContext);

    return (
        <MenuContext.Provider value={{ mode, location }}>
            <MenuWrapper mode={mode} bordered={bordered} {...rest}>
                <ul>{children}</ul>
            </MenuWrapper>
        </MenuContext.Provider>
    );
};

const SubMenu = ({ icon, title, children, ...rest }: SubMenuProps) => {
    const itemRef = useRef<HTMLDivElement>();
    const { location, mode } = useContext(MenuContext);
    const { isOpen, toggle, open } = useDisclosure(false);

    const isActivePath = useMemo(() => {
        if (location) {
            const activePathRegexes = React.Children.map(
                children,
                (child: React.ReactElement) => child.props.activePathRegex,
            );

            const isActive = activePathRegexes?.some(
                (regex) =>
                    location.pathname.match(regex) &&
                    location.pathname.match(regex)?.index === 0,
            );

            return isActive;
        }
        return false;
    }, [children, location]);

    useEffect(() => {
        if (isActivePath) {
            open();
        }
    }, [isActivePath, open]);

    return (
        <SubMenuItem
            mode={mode}
            ref={itemRef as any}
            active={isActivePath}
            {...rest}>
            <a
                className={isActivePath ? 'active' : ''}
                role="button"
                onClick={() => {
                    if (mode === 'vertical') toggle();
                }}>
                <Space size="small" inline={false} justify="space-between">
                    <Space size="small">
                        {icon && <Icon icon={icon} />}
                        <span>{title}</span>
                    </Space>
                    <Icon
                        style={{
                            transition: 'transform 0.3s ease',
                            transform: `rotate(${
                                isOpen && mode === 'vertical' ? 90 : 0
                            }deg)`,
                        }}
                        icon={
                            mode === 'horizontal'
                                ? 'chevron-down'
                                : 'chevron-right'
                        }
                        size={mode === 'horizontal' ? 'xs' : '1x'}
                    />
                </Space>
            </a>
            {mode === 'vertical' ? (
                <AnimatePresence>
                    {isOpen && (
                        <SubMenuWrapper
                            key={title}
                            initial="collapsed"
                            animate="open"
                            exit="collapsed"
                            variants={{
                                open: { opacity: 1, height: 'auto' },
                                collapsed: { opacity: 0, height: 0 },
                            }}>
                            {React.Children.map(children, (child) =>
                                React.cloneElement(child as any, {
                                    isSub: true,
                                }),
                            )}
                        </SubMenuWrapper>
                    )}
                </AnimatePresence>
            ) : (
                <SubMenuWrapper>
                    {React.Children.map(children, (child) =>
                        React.cloneElement(child as any, {
                            isSub: true,
                        }),
                    )}
                </SubMenuWrapper>
            )}
        </SubMenuItem>
    );
};

const Item = ({
    extra,
    icon,
    children,
    as = 'a',
    active,
    isSub,
    activePathRegex,
    ...rest
}: MenuItemProps) => {
    const { location, mode } = useContext(MenuContext);
    const isActive = useMemo(() => {
        if (location) {
            const isActivePath =
                location.pathname.match(activePathRegex) &&
                location.pathname.match(activePathRegex)?.index === 0;
            return isActivePath;
        }
        return false;
    }, [activePathRegex, location]);
    return (
        <MenuItem active={active || isActive} isSub={isSub} mode={mode}>
            <Link as={as} {...rest}>
                <Space
                    size="small"
                    inline={false}
                    align="center"
                    justify="space-between">
                    <Space size="small">
                        {icon && <Icon icon={icon} />}
                        <span>{children}</span>
                    </Space>
                    {extra && <div>{extra}</div>}
                </Space>
            </Link>
        </MenuItem>
    );
};

Menu.displayName = 'Menu';
SubMenu.displayName = 'SubMenu';
Item.displayName = 'Item';

const Navigation = {
    Menu,
    SubMenu,
    Item,
    // Divider,
};

export default Navigation;
