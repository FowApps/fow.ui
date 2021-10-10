import React, { useState, createContext, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence } from 'framer-motion';

import Confirm, { ConfirmProps } from './Confirm';

export const ConfirmContext = createContext({
    confirm: (_options?: ConfirmProps): void => {
        throw new Error('To open a confirm, wrap the app in a ConfirmProvider');
    },
});

const defaultOptions: ConfirmProps = {
    cancelable: false,
    title: 'Headline',
    okButtonProps: {
        color: 'primary',
        children: 'Ok',
    },
};

export const ConfirmProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [options, setOptions] = useState(defaultOptions);

    const confirm = (_options: ConfirmProps) => {
        setIsOpen(true);
        setOptions(_options);
    };

    const close = () => {
        setIsOpen(false);
    };

    const contextValue = useMemo(
        () => ({
            confirm: (_options: ConfirmProps) => confirm(_options),
        }),
        [],
    );

    return (
        <ConfirmContext.Provider value={contextValue}>
            {children}
            {createPortal(
                <AnimatePresence>
                    {isOpen && (
                        <Confirm
                            onOk={options.onOk}
                            onCancel={options.onCancel}
                            title={options.title}
                            type={options.type}
                            description={options.description}
                            scrimMode={options.scrimMode}
                            okButtonProps={options.okButtonProps}
                            cancelable={options.cancelable}
                            close={close}
                            okText={options.okText}
                            cancelText={options.cancelText}
                        />
                    )}
                </AnimatePresence>,
                document.body,
            )}
        </ConfirmContext.Provider>
    );
};
