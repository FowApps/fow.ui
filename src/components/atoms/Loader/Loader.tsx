import React from 'react';

import Overline from '../Typography/Overline';

import { StyledLoader, StaticPlaceholder } from './styles/Loader.style';

export interface LoaderProps {
    /**
     * Indicator text
     */
    text?: string;
    /**
     * visibility flag
     */
    isLoading: boolean;
    /**
     * fixed full page flag
     */
    fullPage?: boolean;
    /**
     * static loader placeholder height(not work if children valid)
     */
    height?: number;
    /**
     * size of spinner
     */
    size?: 'small' | 'medium';
    children?: React.ReactNode;
}

const renderText = (text: string | React.ReactNode): React.ReactNode =>
    text ? <Overline color="primary">{text}</Overline> : '';

const renderChildren = (
    children: React.ReactNode,
    height?: number,
): React.ReactNode => {
    if (children) return children;
    if (!height) return null;
    return <StaticPlaceholder height={height} />;
};

const Loader = ({
    height,
    text,
    isLoading = false,
    fullPage = false,
    size = 'medium',
    children,
}: LoaderProps): JSX.Element => (
    <StyledLoader
        hasChildren={!!children}
        classNamePrefix="fow-loader-overlay_"
        fadeSpeed={200}
        active={isLoading}
        fullPage={fullPage}
        spinner
        text={renderText(text)}
        size={size}>
        {renderChildren(children, height)}
    </StyledLoader>
);

export default Loader;
