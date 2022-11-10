import './Stats.css';
import { ScoreContext } from '../../contexts/ScoreContext';
import { WineContext } from '../../contexts/WineContext';
import { useContext } from 'react';

const Stats = () => {

    return (
        <section className="stats-box">
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
        </section>
    )
};

export default Stats;