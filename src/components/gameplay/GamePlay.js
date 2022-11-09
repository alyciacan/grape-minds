import './GamePlay.css';
import { getQuestions } from '../../apiCalls';
import { useEffect, useRef, useState } from 'react';

const GamePlay = () => {
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);
    const currentQuestion = useRef(0);
    const userResponse = useRef("");
    const runningScore = useRef(0);
    //how to get component to render the next question when I don't want anything else to re-render?
    useEffect(() => {
        getQuestions()
            .then(resp => setQuestions(resp))
            .then(() => setLoading(false))
    }, []);

    const handleClick = (e) => {
        userResponse.current = e.target.id
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        currentQuestion.current = currentQuestion.current + 1
        console.log(userResponse.current)
    };

    const renderQuestion = (index) => {
        if(loading) {
            return <p>loading...</p>
        } else {
            return (
                <section className="question-card">
                    <h2>{questions[index].question}</h2>
                    { questions[index].possAnswers.map((choice) => {
                        return <button type="button" className="choice" key={ choice } id={ choice } onClick={(e) => { handleClick(e)} }>{ choice }</button> }
                    )}
                    <button type="button" className="submit-answer" onClick={(e) => { handleSubmit(e) } }>Submit</button>
                </section>
            )
        }
    }
    
    return (
        <section className="gameplay">
            { renderQuestion(currentQuestion.current) }
            <p>{ userResponse.current }</p>
        </section>
    )
}

export default GamePlay;