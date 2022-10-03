import React from 'react';
import Space from '../../atoms/Space';
import Heading from '../../atoms/Typography/Heading';
import {
    BodyWrapper,
    HeaderWrapper,
    PageWrapper,
    SidebarWrapper,
} from './styles';

export interface PageProps {
    title?: string;
    headerStyles?: React.CSSProperties;
    bodyStyles?: React.CSSProperties;
    sidebarStyles?: React.CSSProperties;
    icon?: React.ReactNode;
    quickActions?: React.ReactNode;
    sidebar?: React.ReactNode;
    children?: React.ReactNode;
}

const Page = ({
    title,
    icon,
    quickActions,
    sidebar,
    headerStyles,
    bodyStyles,
    sidebarStyles,
    children,
}: PageProps): JSX.Element => (
    <PageWrapper inline={false} align="start" size="none">
        {sidebar && (
            <SidebarWrapper align="start" style={{ ...sidebarStyles }}>
                {sidebar}
            </SidebarWrapper>
        )}
        <BodyWrapper
            inline={false}
            direction="vertical"
            justify="flex-start"
            align="start"
            style={{ ...bodyStyles }}>
            <HeaderWrapper
                inline={false}
                justify="space-between"
                align="center"
                style={{ ...headerStyles }}>
                {(title || icon) && (
                    <Space>
                        {icon && <Space>{icon}</Space>}
                        {title && <Heading as="h6">{title}</Heading>}
                    </Space>
                )}
                {quickActions && <Space>{quickActions}</Space>}
            </HeaderWrapper>
            {children}
        </BodyWrapper>
    </PageWrapper>
);

export default Page;
