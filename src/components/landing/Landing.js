import './Landing.css';
import { Form } from '../form/Form';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { getWinePairings } from '../../apiCalls';
import grapeGuy from '../../assets/happy-grape.png';
import { WineContext } from '../../contexts/WineContext';

export const Landing = () => {
    const [pairings, setPairings] = useState([]);
    const [savedMsg, setSavedMsg] = useState("")
    const { wines, setWines } = useContext(WineContext);

    const getWines = (type, price) => {
        getWinePairings(type, price)
            .then(wineArr => setPairings(wineArr.recommendedWines))
    };


    const saveWine = (e, title, price) => {
        const wineObj = { wineLabel: title, price: price, id: e.target.id }
        if(!wines.filter(wine => wine.wineLabel === wineObj.wineLabel).length) {
            setWines([...wines, wineObj]);
            setSavedMsg("Saved!")
        } else {
            setSavedMsg("You have already saved that wine.")
        };
    };

    const packageWines = () => {
        return pairings.map(wine => {
            const price = wine.price;
            const title = wine.title;
            return (
                <div className="wine-rec" key={title}>
                    <p>{title}</p>
                    <p id="price">{price}</p>
                    <button type="button" id={ title } onClick={(e) => {saveWine(e, title, price)}}>Save</button>
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
                    <p>{ savedMsg }</p>
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