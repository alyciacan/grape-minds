import './Form.css';
import { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import pairings from '../../triviaWinePairings';
import { ScoreContext } from '../../contexts/ScoreContext';
import topicCodes from '../../topicCodes';

export const Form = ({ getWines }) => {
    const [userPrefs, setUserPrefs] = useState({ trivia: "", budget: ""});
    const {topics, setTopics} = useContext(ScoreContext);

    const triviaOptions = () => {
        return Object.keys(topicCodes).map(triviaType => {
            return <option value={ triviaType } key={ triviaType }>{ triviaType }</option>
        })
    };

    const checkForErrors = () => {
        if(userPrefs.trivia === "Trivia Categories:" || userPrefs.budget === "Wine Budget:") {
            return true;
        } else if (!userPrefs.trivia || !userPrefs.budget) {
            return true;
        } else {
            return false;
        }
    };

    const handleSubmit = () => {
        getWines(pairings[userPrefs.trivia], parseInt(userPrefs.budget))
        setTopics([userPrefs.trivia, ...topics]);
    };

    return (
        <form className="form">
            <label htmlFor="trivia-type">Let's get started. What kind of trivia would you like to play today?</label>
            <select className="landing-btn" id="trivia" onChange={(e) => setUserPrefs({ ...userPrefs, trivia: e.target.value })}>
                <option>Trivia Categories:</option>
                { triviaOptions() }</select>
            <label htmlFor="budget">And what's your budget for a bottle of wine?</label>
            <select className="landing-btn" id="budget" onChange={(e) => setUserPrefs({ ...userPrefs, budget: e.target.value })}>
                <option>Max Price:</option>
                <option value="100">$100</option>
                <option value="50">$50</option>
                <option value="25">$25</option>
            </select>
            <button className="landing-btn" disabled={checkForErrors()} type="button" onClick={() => handleSubmit() }>Submit</button>
        </form>
    )
};

Form.propTypes = {
    getWines: PropTypes.func.isRequired
};