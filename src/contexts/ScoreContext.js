import { createContext, useEffect, useState } from 'react';

export const ScoreContext = createContext();

export const ScoreProvider = ({ children }) => {
    const [lastScore, setLastScore] = useState(0);
    const [gamesPlayed, setGamesPlayed] = useState(() => {
        const localGames = localStorage.getItem('gamesPlayed');
        return localGames ? JSON.parse(localGames) : []
    });
    const [topics, setTopics] = useState([]);

    const value = { lastScore, setLastScore, gamesPlayed, setGamesPlayed, topics, setTopics }

    useEffect(() => {
        localStorage.setItem('gamesPlayed', JSON.stringify(gamesPlayed))}, [gamesPlayed]);
    
    return <ScoreContext.Provider value={ value }>{ children }</ScoreContext.Provider>
};