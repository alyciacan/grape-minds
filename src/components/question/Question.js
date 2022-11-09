import './Question.css';
import { useState, useRef } from 'react';


const Question = ({questions, updateScore, runningScore }) => {
    let [currentQIndex, setCurrentQIndex] = useState(0)
    let userResponse = useRef("");

    const handleClick = (e) => {
        userResponse.current = e.target.id
    };

    const handleSubmit = (e) => {
        checkAnswer()
        let indexCopy = currentQIndex
        indexCopy++ 
        e.preventDefault();
        setCurrentQIndex(indexCopy)
    };

    const checkAnswer = () => {
        if(userResponse.current === questions[currentQIndex].correct) {
            updateScore(1)
        } else {
            updateScore(-1)
        }
        console.log(runningScore.current)
    };

    return (
        <section className="question-card">
            <h2>{questions[currentQIndex].question}</h2>
            { questions[currentQIndex].possAnswers.map((choice) => {
                return <button type="button" className="choice" key={ choice } id={ choice } onClick={(e) => { handleClick(e)} }>{ choice }</button> }
            )}
            <button type="button" className="submit-answer" onClick={(e) => { handleSubmit(e) } }>Submit</button>
        </section>
    )
}

export default Question;