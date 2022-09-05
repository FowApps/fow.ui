/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { uuidv4 } from '../../../utils/uuid';
import ToastContext from './context';
import Toast from './Toast';

import { ToastContainer } from './styles';
import Space from '../../atoms/Space';

type OptionsType = {
    /**
     * toast type
     */
    appearance?: 'default' | 'success' | 'info' | 'warning' | 'error';
    /**
     * time of toast
     */
    duration?: number;
    /**
     * closable
     */
    closable?: boolean;
};

type ToastProps = {
    /**
     * id of toast
     */
    id: string;
    /**
     * toast type
     */
    options: OptionsType;
    content: string | React.ReactElement;
};

const defaultOptions: OptionsType = {
    appearance: 'default',
    duration: 2000,
    closable: true,
};

const itemVariants = {
    initial: {
        opacity: 0,
        x: 5,
    },
    enter: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.3,
        },
    },
    exit: {
        opacity: 0,
        x: 5,
        transition: { duration: 0.3, delay: 0.3 },
    },
};

const ToastContextProvider = ({ children, toastTop = 0 }: any) => {
    const [toasts, setToasts] = useState<ToastProps[]>([]);

    const add = useCallback(
        (
            content: string | React.ReactElement,
            options: OptionsType = defaultOptions,
        ) => {
            const id = uuidv4();
            setToasts((currToasts) => [
                ...currToasts,
                { id, content, options },
            ]);
        },
        [setToasts],
    );

    const remove = (id: string) => {
        setToasts((currToasts) => {
            const restToasts = currToasts.filter((toast) => toast.id !== id);
            return [...restToasts];
        });
    };

    const providerValue = useMemo(() => ({ add, remove }), [toasts]);

    return (
        <ToastContext.Provider value={providerValue}>
            {children}
            <ToastContainer toastTop={toastTop}>
                <Space direction="vertical">
                    <AnimatePresence>
                        {toasts.map((toast) => (
                            <motion.div
                                variants={itemVariants}
                                initial="initial"
                                animate="enter"
                                exit="exit"
                                key={toast.id}>
                                <Toast
                                    appearance={toast.options.appearance}
                                    duration={toast.options.duration}
                                    closable={toast.options.closable}
                                    content={toast.content}
                                    remove={() => remove(toast.id)}
                                />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </Space>
            </ToastContainer>
        </ToastContext.Provider>
    );
};

export default ToastContextProvider;
