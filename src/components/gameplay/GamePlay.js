import './GamePlay.css';
import { getQuestions } from '../../apiCalls';
import { useEffect, useState } from 'react';
import Question from '../question/Question';

const GamePlay = () => {
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getQuestions()
            .then(resp => setQuestions(resp))
            .then(() => setLoading(false))
    }, []);

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