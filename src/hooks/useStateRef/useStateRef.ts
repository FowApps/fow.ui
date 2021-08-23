import { useState, useCallback } from 'react';

const useStateRef = (processNode: any) => {
    const [node, setNode] = useState(null);
    const setRef = useCallback(
        (newNode) => {
            setNode(processNode(newNode));
        },
        [processNode],
    );
    return [node, setRef];
};

export default useStateRef;
