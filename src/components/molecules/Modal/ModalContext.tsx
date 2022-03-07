import React, { useState, createContext, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence } from 'framer-motion';

import Modal, { ModalProps } from './Modal';

export const ModalContext = createContext({
    modal: (_options?: ModalProps): void => {
        throw new Error('To open a modal, wrap the app in a ModalProvider');
    },
});

const defaultOptions: ModalProps = {
    cancelable: false,
    title: 'Headline',
    okButtonProps: {
        color: 'primary',
        children: 'Ok',
    },
};

export const ModalProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [options, setOptions] = useState(defaultOptions);

    const modal = (_options: ModalProps) => {
        setIsOpen(true);
        setOptions(_options);
    };

    const close = () => {
        setIsOpen(false);
    };

    const contextValue = useMemo(
        () => ({
            modal: (_options: ModalProps) => modal(_options),
        }),
        [],
    );

    return (
        <ModalContext.Provider value={contextValue}>
            {children}
            {createPortal(
                <AnimatePresence>
                    {isOpen && (
                        <Modal
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
        </ModalContext.Provider>
    );
};
