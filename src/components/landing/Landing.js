import './Landing.css';
import { Form } from '../form/Form';
import { useState, useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import { getWinePairings } from '../../apiCalls';
import { WineContext } from '../../contexts/WineContext';

export const Landing = () => {
    const [pairings, setPairings] = useState([]);
    const [savedMsg, setSavedMsg] = useState("")
    const { wines, setWines } = useContext(WineContext);
    const wineType = useRef("");

    const getWines = (type, price) => {
        wineType.current = type;
        getWinePairings(type, price)
            .then(wineArr => setPairings(wineArr.recommendedWines))
    };

    const saveWine = (e, title, price) => {
        const wineObj = { wineLabel: title, price: price, type: wineType.current, id: e.target.id }
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
                    <p className="heart" id={ title } onClick={(e) => {saveWine(e, title, price)}}>&#9825;</p>
                </div>
            )
        })
    };

    const toggleView = () => {
        if(pairings.length) {
            return (
                <section className="wine-recs">
                    <h1 className="wine-recs-header">Great! Here are the wines I recommend to go with your game:</h1>
                    <div className="wine-list">
                        { packageWines() }
                    </div>
                    <p className="saved-msg">{ savedMsg }</p>
                    <Link to="/gameplay" className="start-btn">
                        <button type="button">START TRIVIA!</button>
                    </Link>
                </section>
            )
        }
        else {
            return (
                <section className="welcome-form">
                    <h1 className="welcome-msg">Welcome to GRAPE MINDS, the trivia game for wine snobs!</h1>
                    <Form getWines={getWines}/>
                </section>
            )
        }
    };

    return (
        <section className="landing-bubble">
            { toggleView() }
        </section>
    )

};