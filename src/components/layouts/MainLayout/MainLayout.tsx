import React from 'react';

export interface MainLayoutProps {
    text?: string;
}

const MainLayout = ({ text }: MainLayoutProps): JSX.Element => (
    <div>{text}</div>
);
export default MainLayout;
