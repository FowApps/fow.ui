import { useRef, useEffect } from 'react';

const useIsMountFirstTime = () => {
    const isMountFirstTimeRef = useRef(true);
    useEffect(() => {
        isMountFirstTimeRef.current = false;
    }, []);
    return isMountFirstTimeRef.current;
};

export default useIsMountFirstTime;
