import './Form.css';
import { useState, useContext } from 'react';
import pairings from '../../triviaWinePairings';
import { ScoreContext } from '../../contexts/ScoreContext';

export const Form = ({ getWines }) => {
    const [userPrefs, setUserPrefs] = useState({ trivia: "", budget: ""});
    const { setScores } = useContext(ScoreContext);

    const triviaTypes = {
        books: 10,
        film: 11,
        music: 12,
        science: 17,
        math: 19,
        sports: 21,
        history: 23,
        art: 25,
        vehicles: 28,
        animals: 27
    };

    const triviaOptions = () => {
        return Object.keys(triviaTypes).map(triviaType => {
            return <option value={ triviaType } key={ triviaType }>{ triviaType }</option>
        })
    };

    const checkForErrors = (e) => {
        if(userPrefs.trivia === "Trivia Categories:" || userPrefs.budget === "Wine Budget:") {
            return true;
        } else if (!userPrefs.trivia || !userPrefs.budget) {
            return true;
        } else {
            return false;
        }
    };

    const handleSubmit = () => {
        setScores({ lastTopic: userPrefs.trivia })
        getWines(pairings[userPrefs.trivia], parseInt(userPrefs.budget))
    }

    return (
        <form className="form">
            <label htmlFor="trivia-type">Let's get started. What kind of trivia would you like to play today?</label>
            <select id="trivia" onChange={(e) => setUserPrefs({ ...userPrefs, trivia: e.target.value })}>
                <option>Trivia Categories:</option>
                { triviaOptions() }</select>
            <label htmlFor="budget">And what's your budget for a bottle of wine?</label>
            <select id="budget" onChange={(e) => setUserPrefs({ ...userPrefs, budget: e.target.value })}>
                <option>Max Price:</option>
                <option value="100">$100</option>
                <option value="50">$50</option>
                <option value="25">$25</option>
            </select>
            <button disabled={checkForErrors()} type="button" onClick={() => handleSubmit() }>Submit</button>
        </form>
    )
}