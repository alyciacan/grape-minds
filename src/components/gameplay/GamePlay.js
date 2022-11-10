import './GamePlay.css';
import { getQuestions } from '../../apiCalls';
import { ScoreContext } from '../../contexts/ScoreContext';
import { useEffect, useState, useContext } from 'react';
import Question from '../question/Question';

const GamePlay = () => {
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);
    const {scores, setScores} = useContext(ScoreContext)

    useEffect(() => {
        getQuestions(scores.lastTopic)
            .then(resp => setQuestions(resp))
            .then(() => setLoading(false))
            .then(() => resetScores());
    }, []);

    const resetScores = () => {
        let copy = scores.lastScore;
        copy = 0;
        setScores({ lastScore: copy })
    };

    if(loading) {
        return <p>loading...</p>
    } else {
        return (
            <section className="gameplay">
                < Question questions={ questions } />
            </section>
        )
    };
};

export default GamePlay;