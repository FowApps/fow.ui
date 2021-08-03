import React from 'react';
import Body from '../../atoms/Typography/Body';

export interface FooterProps {
    children?: React.ReactNode;
}

const Footer = ({ children }: FooterProps): JSX.Element => (
    <div>
        <Body level={2}>{children}</Body>
    </div>
);

export default Footer;
