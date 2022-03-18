import React, { useState, useCallback, createContext, useContext } from 'react';

type ContextTypes = {
    isOpen: boolean;
    open: (e: any) => void;
    close: () => void;
    mousePosition: {
        x: number;
        y: number;
    };
};

export const ModalContext = createContext<ContextTypes>({} as ContextTypes);

export const ModalContextProvider: React.FC = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const open = useCallback((e) => {
        setIsOpen(true);
        setMousePosition({
            x: e.pageX,
            y: e.pageY,
        });
    }, []);

    const close = useCallback(() => {
        setMousePosition({
            x: 0,
            y: 0,
        });
        setIsOpen(false);
    }, []);

    return (
        <ModalContext.Provider
            value={{
                isOpen,
                open,
                close,
                mousePosition,
            }}>
            {children}
        </ModalContext.Provider>
    );
};

const useModal = () => useContext(ModalContext);
export default useModal;
