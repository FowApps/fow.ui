import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from './theme';
import GlobalStyle from './global-style';
import ToastContextProvider from '../components/molecules/Toast/ToastProvider';
import { ConfirmProvider } from '../components/molecules/Confirm/ConfirmContext';
import { ModalContextProvider } from '../hooks/useModal/useModal';

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
    location?: any;
};
export interface FowThemeProps {
    appPrimaryColors?: PrimaryColorTypes;
    oldUITheme?: any;
    children: React.ReactNode;
    config: IConfig;
}

export const ConfigContext = React.createContext<IConfig>({
    language: 'en',
    timezone: '+03:00',
});
export const ConfigContextProvider = ConfigContext.Provider;

const FowTheme = ({
    appPrimaryColors,
    oldUITheme, // temporary old ui theme variables
    children,
    config = { language: 'tr', timezone: '+03:00' },
}: FowThemeProps): JSX.Element => {
    useEffect(() => {
        localStorage.setItem('language', config.language);
    }, [config.language]);

    return (
        <ConfigContextProvider
            value={{
                language: config.language,
                timezone: config.timezone,
                location: config.location,
            }}>
            <ThemeProvider
                theme={{
                    ...theme,
                    ...oldUITheme,
                    fow: {
                        ...theme.fow,
                        colors: {
                            ...theme.fow.colors,
                            primary: {
                                ...(appPrimaryColors ||
                                    theme.fow.colors.primary),
                            },
                        },
                    },
                }}>
                <GlobalStyle />
                <ModalContextProvider>
                    <ToastContextProvider>
                        <ConfirmProvider>{children}</ConfirmProvider>
                    </ToastContextProvider>
                </ModalContextProvider>
            </ThemeProvider>
        </ConfigContextProvider>
    );
};

export default FowTheme;
