import React from 'react';
import { ThemeProvider } from 'styled-components';
import { DndProvider } from 'react-dnd';
import MultiBackend from 'react-dnd-multi-backend';

import HTML5toTouch from '../config/dndConfig';
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
export interface FowThemeProps {
    appPrimaryColors?: PrimaryColorTypes;
    oldUITheme?: any;
    children: React.ReactNode;
}

const FowTheme = ({
    appPrimaryColors,
    oldUITheme, // temporary old ui theme variables
    children,
}: FowThemeProps): JSX.Element => (
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
            <DndProvider backend={MultiBackend} options={HTML5toTouch}>
                <ConfirmProvider>{children}</ConfirmProvider>
            </DndProvider>
        </ToastContextProvider>
    </ThemeProvider>
);

export default FowTheme;
