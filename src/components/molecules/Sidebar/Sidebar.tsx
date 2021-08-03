import React from 'react';

export interface SidebarProps {
    text?: string;
}

const Sidebar = ({ text }: SidebarProps): JSX.Element => <div>{text}</div>;

export default Sidebar;
