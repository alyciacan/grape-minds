import './Question.css';
import { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { ScoreContext } from '../../contexts/ScoreContext';


const Question = ({ questions, updateStats }) => {
    let [currentQIndex, setCurrentQIndex] = useState(0);
    let [userResponse, setUserResponse] = useState("");
    const { lastScore, setLastScore } = useContext(ScoreContext);
    const history = useHistory();

    const handleClick = (e) => {
        setUserResponse(e.target.id);
    };

    const updateScore = (scoreChange) => {
        let scoreCopy = lastScore;
        scoreCopy += scoreChange;
        setLastScore(scoreCopy);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        checkAnswer();
        setUserResponse("");
        if(currentQIndex === (questions.length - 1)) {
            updateStats();
            navToGameOver();
        } else {
            let indexCopy = currentQIndex;
            indexCopy++ 
            setCurrentQIndex(indexCopy)
        }
    };

    const checkAnswer = () => {
        if(userResponse === questions[currentQIndex].correct) {
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
            <div className="choices-box">
                { questions[currentQIndex].possAnswers.map((choice) => {
                    return <button type="button" className="choice" key={ choice } id={ choice } onClick={(e) => { handleClick(e)} }>{ choice }</button> }
                )}
            </div>
            <button type="button" className="submit-answer-btn" disabled={!userResponse} onClick={(e) => { handleSubmit(e) } }>Submit</button>
        </section>
    )
};

export default Question;

Question.propTypes = {
    questions: PropTypes.array.isRequired,
    updateStats: PropTypes.func.isRequired
};