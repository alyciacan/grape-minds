import './GamePlay.css';
import { getQuestions } from '../../apiCalls';
import { useEffect, useRef, useState } from 'react';
import Question from '../question/Question';

const GamePlay = () => {
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);
    const runningScore = useRef(0);
    //how to get component to render the next question when I don't want anything else to re-render?
    useEffect(() => {
        getQuestions()
            .then(resp => setQuestions(resp))
            .then(() => setLoading(false))
    }, []);

    const updateScore = (scoreChange) => {
        runningScore.current = runningScore.current += scoreChange
    };

    if(loading) {
        return <p>loading...</p>
    } else {
        return (
            <section className="gameplay">
                < Question questions={ questions } updateScore = { updateScore } runningScore={ runningScore }/>
            </section>
        )
    };
};

export default GamePlay;