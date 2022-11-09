import React from 'react';
import './Dashboard.css';


const Dashboard = () => {
const wines = () => {
    return <p>hi</p>
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
                    { wines() }
                </ul>
            </section>
        </React.Fragment>
    )

};

export default Dashboard;