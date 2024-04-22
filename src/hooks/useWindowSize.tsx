// Filename: useWindowSize.js
import {useState, useEffect} from 'react';

function useWindowSize() {
    const hasWindow = typeof window !== 'undefined';

    function getWindowSize() {
        const width = hasWindow ? window.innerWidth : null;
        return {width};
    }

    const [windowSize, setWindowSize] = useState(getWindowSize());

    function handleResize() {
        setWindowSize(getWindowSize());
    }

    useEffect(() => {
        if (hasWindow) {
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, [hasWindow]);

    return windowSize;
}

export default useWindowSize;
