import { useState, createContext, useEffect } from 'react';

export const WineContext = createContext();

export const WineProvider = ({ children }) => {
    const [wines, setWines] = useState(() => {
        const localWines = localStorage.getItem('wines');
        return localWines ? JSON.parse(localWines) : []
    });

    useEffect(() => {
        localStorage.setItem('wines', JSON.stringify(wines))}, [wines]);

    const value = { wines, setWines }

    return <WineContext.Provider value={ value }>{ children }</WineContext.Provider>
};