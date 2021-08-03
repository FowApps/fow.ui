import React from 'react';

export interface HeaderProps {
    text?: string;
}

const Header = ({ text }: HeaderProps): JSX.Element => <div>{text}</div>;
export default Header;
