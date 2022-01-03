import React from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from './theme';
import GlobalStyle from './global-style';
import ToastContextProvider from '../components/molecules/Toast/ToastProvider';
import { ConfirmProvider } from '../components/molecules/Confirm/ConfirmContext';

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

export type IConfig = {
    language: 'tr' | 'en';
    timezone: string;
};
export interface FowThemeProps {
    appPrimaryColors?: PrimaryColorTypes;
    oldUITheme?: any;
    children: React.ReactNode;
    config: IConfig;
}

export const ConfigContext = React.createContext<IConfig>({
    language: 'en',
    timezone: '+02:00',
});
export const ConfigContextProvider = ConfigContext.Provider;

const FowTheme = ({
    appPrimaryColors,
    oldUITheme, // temporary old ui theme variables
    children,
    config = { language: 'tr', timezone: '+03:00' },
}: FowThemeProps): JSX.Element => (
    <ConfigContextProvider
        value={{ language: config.language, timezone: config.timezone }}>
        <ThemeProvider
            theme={{
                ...theme,
                ...oldUITheme,
                fow: {
                    ...theme.fow,
                    colors: {
                        ...theme.fow.colors,
                        primary: {
                            ...(appPrimaryColors || theme.fow.colors.primary),
                        },
                    },
                },
            }}>
            <GlobalStyle />
            <ToastContextProvider>
                <ConfirmProvider>{children}</ConfirmProvider>
            </ToastContextProvider>
        </ThemeProvider>
    </ConfigContextProvider>
);

export default FowTheme;
