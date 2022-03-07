import { useState, useCallback } from 'react';

export interface UseModalConfig {
    defaultOpen: boolean;
}

const useModal = (config: UseModalConfig) => {
    const ModalConfig = config || ({} as UseModalConfig);

    const { defaultOpen = false } = ModalConfig;
    const [isOpen, setIsOpen] = useState(defaultOpen);
    const [mousePosition, setMousePosition] = useState({ x: null, y: null });
    const open = useCallback((e) => {
        setIsOpen(true);
        setMousePosition({
            x: e.pageX,
            y: e.pageY,
        });
    }, []);
    const close = useCallback(() => setIsOpen(false), []);

    const modalProps = {
        isOpen,
        onClose: close,
    };

    return {
        isOpen,
        open,
        close,
        mousePosition,
        modalProps,
    };
};

export default useModal;
