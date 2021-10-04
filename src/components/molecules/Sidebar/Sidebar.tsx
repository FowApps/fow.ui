import React from 'react';
import Icon from '../../atoms/Icon';
import useDisclosure from '../../../hooks/useDisclosure';

import {
    Sider,
    Content,
    Trigger,
    SidebarVariants,
    ContentVariants,
} from './styles';

export interface SidebarProps {
    noGutter?: boolean;
    children: React.ReactNode;
}

const Sidebar = ({ noGutter = false, children }: SidebarProps): JSX.Element => {
    const { isOpen, toggle } = useDisclosure(true);

    return (
        <Sider
            noGutter={noGutter}
            initial={isOpen ? 'expanded' : 'collapsed'}
            animate={isOpen ? 'expanded' : 'collapsed'}
            variants={SidebarVariants}>
            <Content variants={ContentVariants}>{children}</Content>
            <Trigger onClick={toggle}>
                {isOpen ? (
                    <Icon icon="angle-left" />
                ) : (
                    <Icon icon="angle-right" />
                )}
            </Trigger>
        </Sider>
    );
};

export default Sidebar;
