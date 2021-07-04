import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import GlobalStyle from './global-style';

export interface PrimaryColorTypes {
    darker: string;
    dark: string;
    main: string;
    light: string;
    lighter: string;
    transparent8: string;
    transparent12: string;
    transparent16: string;
    transparent24: string;
    transparent32: string;
    transparent48: string;
}
export interface FowThemeProps {
    appPrimaryColors?: PrimaryColorTypes;
    children: React.ReactNode;
}

const FowTheme = ({
    appPrimaryColors,
    children,
}: FowThemeProps): JSX.Element => (
    <ThemeProvider
        theme={{
            ...theme,
            colors: {
                ...theme.colors,
                primary: {
                    ...(appPrimaryColors || theme.colors.primary),
                },
            },
        }}>
        <GlobalStyle />
        {children}
    </ThemeProvider>
);

export default FowTheme;
