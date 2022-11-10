import { createContext, useState } from 'react';

export const ScoreContext = createContext();

export const ScoreProvider = ({ children }) => {
    const [lastScore, setLastScore] = useState(0);
    const [gamesPlayed, setGamesPlayed] = useState([]);
    const [topics, setTopics] = useState([]);

    const value = { lastScore, setLastScore, gamesPlayed, setGamesPlayed, topics, setTopics }

    return <ScoreContext.Provider value={ value }>{ children }</ScoreContext.Provider>
};