import { useEffect } from 'react';

/**
 * A custom hook that updates the document title
 * @param title - The title to set for the document
 * @param deps - Optional dependency array for the effect
 */
const useDocumentTitle = (title: string, deps: any[] = []) => {
    useEffect(() => {
        const previousTitle = document.title;
        document.title = title;

        // Cleanup function to restore the previous title when component unmounts
        return () => {
            document.title = previousTitle;
        };
    }, [title, ...deps]);
};

export default useDocumentTitle;