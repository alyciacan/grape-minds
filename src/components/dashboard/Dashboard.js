import { useContext, React } from 'react';
import './Dashboard.css';
import { WineContext } from '../../contexts/WineContext';


const Dashboard = () => {
    const {wines, setWines} = useContext(WineContext);

    const fillWineShelf = () => {
        wines.map(wine => {
            return (
            <li>
                <span className="label">{ wine.wineLabel }</span>
                <span className="price">{ wine.price }</span>
                <span onClick={() => {deleteWine()}}>🗑️</span>
                <hr/>
            </li>
            )    
        })
        return 
    }

        return (
            <React.Fragment>
                <aside className="about">
                    <h2>Grape Minds is the premier trivia game for adventurous oenophiles!</h2>
                </aside>
                <section className="trivia-stats">
                    <h3>My Trivia Stats</h3>
                        <figure>Total Games Played
                            <h4>5</h4>
                        </figure>
                        <figure>Average Score
                            <h4>75%</h4>
                        </figure>
                        <figure>Most-Saved Wine
                            <h4>Chianti</h4>
                        </figure>
                        <figure>Highest Score
                            <h4>95%</h4>
                        </figure>
                    <button type="button" className="play-again-btn">Play again!</button>
                </section>
                <section className="saved-wines">
                    <h3>My Saved Wines</h3>
                    <ul>
                        { fillWineShelf() }
                    </ul>
                </section>
            </React.Fragment>
        )

};

export default Dashboard;