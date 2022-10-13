import React from 'react';
import Space from '../../atoms/Space';
import Heading from '../../atoms/Typography/Heading';
import {
    BodyWrapper,
    ContentWrapper,
    FooterWrapper,
    HeaderWrapper,
    PageWrapper,
    SidebarWrapper,
} from './styles';

export interface PageProps {
    title?: string;
    headerStyles?: React.CSSProperties;
    footerStyles?: React.CSSProperties;
    bodyStyles?: React.CSSProperties;
    contentStyles?: React.CSSProperties;
    sidebarStyles?: React.CSSProperties;
    icon?: React.ReactNode;
    customHeader?: React.ReactNode;
    customFooter?: React.ReactNode;
    quickActions?: React.ReactNode;
    sidebar?: React.ReactNode;
    children?: React.ReactNode;
}

const Page = ({
    title,
    icon,
    customHeader,
    customFooter,
    quickActions,
    sidebar,
    headerStyles,
    contentStyles,
    footerStyles,
    bodyStyles,
    sidebarStyles,
    children,
}: PageProps): JSX.Element => (
    <PageWrapper inline={false} align="start" size="none" direction="vertical">
        <HeaderWrapper
            inline={false}
            justify="space-between"
            align="center"
            className="page-header"
            style={{ ...headerStyles }}>
            {customHeader ? (
                <>
                    <Space inline={false} className="custom-header">
                        {customHeader}
                    </Space>
                </>
            ) : (
                <>
                    {(title || icon) && (
                        <Space inline={false}>
                            {icon && <Space>{icon}</Space>}
                            {title && <Heading as="h6">{title}</Heading>}
                        </Space>
                    )}
                    {quickActions && <Space>{quickActions}</Space>}
                </>
            )}
        </HeaderWrapper>
        {(sidebar || children) && (
            <>
                <ContentWrapper
                    inline={false}
                    align="start"
                    style={{ ...contentStyles }}
                    className="page-content">
                    {sidebar && (
                        <SidebarWrapper
                            align="start"
                            className="page-sidebar"
                            style={{ ...sidebarStyles }}>
                            {sidebar}
                        </SidebarWrapper>
                    )}
                    <BodyWrapper
                        inline={false}
                        direction="vertical"
                        justify="flex-start"
                        align="start"
                        className="page-body"
                        style={{ ...bodyStyles }}>
                        {children}
                    </BodyWrapper>
                </ContentWrapper>
            </>
        )}
        {customFooter && (
            <FooterWrapper
                inline={false}
                className="page-footer"
                style={{ ...footerStyles }}>
                <Space inline={false} className="custom-footer">
                    {customFooter}
                </Space>
            </FooterWrapper>
        )}
    </PageWrapper>
);

export default Page;
