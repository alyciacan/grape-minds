import './Landing.css';
import { Form } from '../form/Form';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getWinePairings } from '../../apiCalls';
import grapeGuy from '../../assets/happy-grape.png';

export const Landing = () => {
    const [pairings, setPairings] = useState([]);
    const getWines = (type, price) => {
        getWinePairings(type, price)
            .then(wineArr => setPairings(wineArr.recommendedWines))
    };

    const packageWines = () => {
        return pairings.map(wine => {
            return (
                <div className="wine-rec" key={wine.title}>
                    <p>{wine.title}</p>
                    <p>{wine.price}</p>
                    <button type="button">Save</button>
                </div>
            )
        })
    };

    const toggleView = () => {
        if(pairings.length) {
            return (
                <section>
                    <h1>Great! Here are the wines I recommend to go with your game:</h1>
                    { packageWines() }
                    <Link to="/gameplay" className="start-btn">
                        <button type="button">START TRIVIA!</button>
                    </Link>
                </section>
            )
        }
        else {
            return (
                <div>
                    <h1 className="welcome-msg">Hi! Welcome to GRAPE MINDS, the trivia game for wine snobs!</h1>
                    <Form getWines={getWines}/>
                </div>
            )
        }
    };

    return (
        <section className="landing-bubble">
            { toggleView() }
            <img src={grapeGuy} className="landing-mascot" />
        </section>
    )
};