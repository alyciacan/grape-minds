import { useContext, React } from 'react';
import './Dashboard.css';
import { WineContext } from '../../contexts/WineContext';
import { ScoreContext } from '../../contexts/ScoreContext';
import { Link } from 'react-router-dom';
import Stats from '../stats/Stats';


const Dashboard = () => {
    const {wines, setWines} = useContext(WineContext);
    const { setGamesPlayed } = useContext(ScoreContext);

    const clearGameData =() => {
        if(window.confirm("Do you really want to clear your previous game data?")){
            setGamesPlayed([]);
    }}

    const deleteWine = (id) => {
        const winesCopy = [...wines];
        const filteredWines = winesCopy.filter(wine => wine.wineLabel !== id);
        setWines(filteredWines);
    };

    const fillWineShelf = () => {
        if(!wines.length) {
            return <li>It looks like you haven't saved any wines yet!</li>
        } else {
       return wines.map(wine => {
            const id = wine.wineLabel;
            return (
            <li key={ wine.wineLabel } id={ wine.wineLabel }>
                <span className="label">{ wine.wineLabel }</span>
                <span className="price">{ wine.price }</span>
                <p onClick={() => { deleteWine(id) }}>🗑️</p>
                <hr/>
            </li>
            )    
        })}
    };

        return (
            <main className="dashboard">
                <aside className="about">
                    <h2 className="about-text">Grape Minds is the premier trivia game for adventurous oenophiles!</h2>
                </aside>
                <section className="trivia-stats">
                    <h3 className="section-heading">My Trivia Stats</h3>
                    <button className="clear-data-btn" type="button" onClick={ clearGameData }>Clear Previous Games</button>
                    <Stats />
                    <Link to="/">
                        <button type="button" className="play-again-btn">Play again!</button>
                    </Link>
                </section>
                <section className="saved-wines">
                    <h3 className="section-heading">My Saved Wines</h3>
                    <ul>
                        { fillWineShelf() }
                    </ul>
                </section>
            </main>
        )

};

export default Dashboard;