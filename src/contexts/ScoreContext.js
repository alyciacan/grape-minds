import { createContext, useState } from 'react';

export const ScoreContext = createContext();

export const ScoreProvider = ({ children }) => {
    const [scores, setScores] = useState({
        lastScore: 0,
        gamesPlayed: 0,
        avgScore: 0,
    });

    const value = { scores, setScores }

    return <ScoreProvider value={ value }>{ children }</ScoreProvider>
}