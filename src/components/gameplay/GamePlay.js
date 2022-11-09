import './GamePlay.css';
import { getQuestions } from '../../apiCalls';
import { useEffect, useState } from 'react';

const GamePlay = () => {
    const [questions, setQuestions] = useState([]);
    const [gameStats, setGameStats] = useState({
        currentQuestion: 0,
        score: 0,
    })
    useEffect(() => {
        const loadQuestions = () => {
            getQuestions()
                .then(resp => setQuestions(resp))
        };
        loadQuestions();
    }, [])

console.log(questions[0].question)
    // const renderQuestion = (index) => {
    //     return (
    //         // <section className="question-card">
    //         //     <h2>{questions[index].question}</h2>
    //         //     { questions[index].possAnswers.map((choice) => {
    //         //         return <button type="button" className="choice" key={ choice }>{ choice }</button> }
    //         //     )}
    //         //     <button type="button" className="submit-answer">Submit</button>
    //         // </section>
    //     // )
    // }

    
    return (
        <section className="gameplay">
            {/* { renderQuestion(gameStats.currentQuestion) } */}
        </section>
    )
}

export default GamePlay;