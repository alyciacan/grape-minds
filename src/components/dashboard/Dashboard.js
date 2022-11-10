import { useContext, React } from 'react';
import './Dashboard.css';
import { WineContext } from '../../contexts/WineContext';


const Dashboard = () => {
    const {wines, setWines} = useContext(WineContext);

    const deleteWine = (id) => {
        const winesCopy = [...wines];
        const filteredWines = winesCopy.filter(wine => wine.wineLabel !== id);
        setWines(filteredWines);
    };

    const fillWineShelf = () => {
       return wines.map(wine => {
            const id = wine.wineLabel;
            return (
            <li id={ wine.wineLabel }>
                <span className="label">{ wine.wineLabel }</span>
                <span className="price">{ wine.price }</span>
                <p onClick={() => { deleteWine(id) }}>🗑️</p>
                <hr/>
            </li>
            )    
        }) 
    }

        return (
            <main>
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
            </main>
        )

};

export default Dashboard;