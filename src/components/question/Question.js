import './Question.css';
import { useState, useRef, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { ScoreContext } from '../../contexts/ScoreContext';


const Question = ({ questions }) => {
    let [currentQIndex, setCurrentQIndex] = useState(0)
    const {scores, setScores} = useContext(ScoreContext)
    let userResponse = useRef("");
    const history = useHistory();

    const handleClick = (e) => {
        userResponse.current = e.target.id
    };

    const updateScore = (scoreChange) => {
        let scoreCopy = scores.lastScore;
        scoreCopy += scoreChange;
        setScores({ lastScore: scoreCopy })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        checkAnswer();
        if(currentQIndex === (questions.length - 8)) {
            navToGameOver();
        } else {
            let indexCopy = currentQIndex;
            indexCopy++ 
            setCurrentQIndex(indexCopy)
        }
    };

    const checkAnswer = () => {
        if(userResponse.current === questions[currentQIndex].correct) {
            updateScore(1)
        } else {
            updateScore(-1)
        }
    };

    const navToGameOver = () => {
        history.push('/gameover');
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