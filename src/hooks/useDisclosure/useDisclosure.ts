import { useCallback, useState } from 'react';

const useDisclosure = (initialState = false) => {
    const [isOpen, setIsOpen] = useState(initialState);
    const open = useCallback(() => setIsOpen(true), []);
    const close = useCallback(() => setIsOpen(false), []);
    const toggle = useCallback(() => setIsOpen((state) => !state), []);
    return { isOpen, open, close, toggle };
};

export default useDisclosure;
