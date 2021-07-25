import React from 'react';

type OptionsType = {
    appearance?: 'default' | 'success' | 'info' | 'warning' | 'error';
    duration?: number;
    closable?: boolean;
};

type ToastContextType = {
    add: (content: string | React.ReactElement, options?: OptionsType) => void;
    remove: (id: string) => void;
};

const ToastContext = React.createContext<ToastContextType>({
    add: () => ({}),
    remove: () => ({}),
});

export default ToastContext;
