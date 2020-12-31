import {useEffect, useState} from 'react';

export default function useDebounce(term, delay) {
    const [debouncedTerm, setDebouncedTerm] = useState(term);

    useEffect(()=> {
        const id = setTimeout(() => {
            setDebouncedTerm(term);
        }, delay);
        return ( () => {
            clearTimeout(id);
        })
    }, [term, delay]);

    return debouncedTerm;
}
