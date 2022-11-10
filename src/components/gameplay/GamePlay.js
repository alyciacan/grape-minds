import './GamePlay.css';
import { getQuestions } from '../../apiCalls';
import { ScoreContext } from '../../contexts/ScoreContext';
import { useEffect, useState, useContext } from 'react';
import Question from '../question/Question';

const GamePlay = () => {
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);
    const {topics} = useContext(ScoreContext);
    const {lastScore, setLastScore} = useContext(ScoreContext);

    useEffect(() => {
        console.log(topics[0])
        getQuestions(topics[0])
            .then(resp => setQuestions(resp))
            .then(() => setLoading(false))
            .then(() => resetScores());
    }, []);

    const resetScores = () => {
        let copy = lastScore;
        copy = 0;
        setLastScore(copy)
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