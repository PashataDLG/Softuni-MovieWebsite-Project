import { useState } from "react";

export const useLocalStorage = (key, defaultValue) => {
    const [state, setState] = useState(() => {
        const storageData = localStorage.getItem(key);

        return storageData ? JSON.parse(storageData) : defaultValue;
    });

    const setLocalStorageState = (newValue) => {
        console.log(newValue);
        localStorage.setItem(key, JSON.stringify(newValue));

        setState(newValue);
    };

    return [
        state,
        setLocalStorageState,
    ];
};