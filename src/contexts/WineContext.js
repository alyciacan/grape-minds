import { useState, createContext } from 'react';

export const WineContext = createContext([]);

export const WineProvider = ({ children }) => {
    const [wines, setWines] = useState([]);

    const value = { wines, setWines }

    return <WineContext.Provider value={ value }>{ children }</WineContext.Provider>
}