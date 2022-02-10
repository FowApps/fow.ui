import React from 'react';
import Icon from '../../atoms/Icon';
import useDisclosure from '../../../hooks/useDisclosure';
import { theme } from '../../../theme/theme';

import {
    Sider,
    Content,
    Trigger,
    SidebarVariants,
    ContentVariants,
} from './styles';

export interface SidebarProps {
    /**
     * display sidebar
     */
    noGutter?: boolean;
    children: React.ReactNode;
}

const Sidebar = ({
    noGutter = false,
    children,
    ...rest
}: SidebarProps): JSX.Element => {
    const { isOpen, toggle } = useDisclosure(true);

    return (
        <Sider
            noGutter={noGutter}
            initial={isOpen ? 'expanded' : 'collapsed'}
            animate={isOpen ? 'expanded' : 'collapsed'}
            variants={SidebarVariants}
            {...rest}>
            <Content variants={ContentVariants}>{children}</Content>
            <Trigger onClick={toggle}>
                {isOpen ? (
                    <Icon icon="angle-double-left" />
                ) : (
                    <Icon
                        icon="angle-double-right"
                        color={theme.fow.colors.primary.main}
                    />
                )}
            </Trigger>
        </Sider>
    );
};

export default Sidebar;
