import { useEffect, useState } from "react";

export const useLocalStorage = (key, defaultValue) => {
    const storedValue = JSON.parse(localStorage.getItem(key));
    const [value, setValue] = useState(storedValue || defaultValue);

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
};