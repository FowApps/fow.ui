import { useState, useCallback } from 'react';

export interface UseDrawerConfig {
    defaultOpen: boolean;
}

const useDrawer = (config: UseDrawerConfig) => {
    const drawerConfig = config || ({} as UseDrawerConfig);

    const { defaultOpen = false } = drawerConfig;
    const [isOpen, setIsOpen] = useState(defaultOpen);
    const open = useCallback(() => setIsOpen(true), []);
    const close = useCallback(() => setIsOpen(false), []);

    const drawerProps = {
        isOpen,
        onClose: close,
    };

    return {
        isOpen,
        open,
        close,
        drawerProps,
    };
};

export default useDrawer;
