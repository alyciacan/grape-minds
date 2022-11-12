import './GamePlay.css';
import { getQuestions } from '../../apiCalls';
import { ScoreContext } from '../../contexts/ScoreContext';
import { useEffect, useState, useContext } from 'react';
import Question from '../question/Question';

const GamePlay = () => {
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);
    const {topics} = useContext(ScoreContext);
    const {lastScore, setLastScore, gamesPlayed, setGamesPlayed} = useContext(ScoreContext);

    useEffect(() => {
        getQuestions(topics[0])
            .then(resp => setQuestions(resp))
            .then(() => setLoading(false))
            .then(() => resetScores());
    }, []);

    const updateStats = () => {
        const game = {score: lastScore, topic: topics[0]};
        setGamesPlayed([game, ...gamesPlayed]);
    };

    const resetScores = () => {
        let copy = lastScore;
        copy = 0;
        setLastScore(copy)
    };
    console.log('lastscore', lastScore, 'gamesplayed:', gamesPlayed )

    if(loading) {
        return <p>loading...</p>
    } else {
        return (
            <section className="gameplay">
                < Question questions={ questions } updateStats={ updateStats } />
            </section>
        )
    };
};

export default GamePlay;