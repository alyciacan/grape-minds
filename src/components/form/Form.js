import './Form.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';


export const Form = () => {
    const [userPrefs, setUserPrefs] = useState({ trivia: "", budget: ""});
    const [pairings, setPairings] = useState([]);

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

    const getWinePairings = () => {
        
    }

    return (
        <form className="form">
            <label htmlFor="trivia-type">Let's get started. What kind of trivia would you like to play today?</label>
            <select id="trivia" onChange={(e) => setUserPrefs({ ...userPrefs, trivia: e.target.value })}>
                <option>Trivia Categories:</option>
                { triviaOptions() }</select>
            <label htmlFor="budget">And what's your budget for a bottle of wine?</label>
            <select id="budget" onChange={(e) => setUserPrefs({ ...userPrefs, budget: e.target.value })}>
                <option>Wine Budget:</option>
                <option value="50+">$50+</option>
                <option value="25-50">$25-$50</option>
                <option value="under25">under $25</option>
            </select>
            <button disabled={checkForErrors()} type="button" onClick={(e) => {checkForErrors()}}>Submit</button>
        </form>
    )
}