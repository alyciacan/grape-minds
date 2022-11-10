import './GameOver.css';
import { ScoreContext } from '../../contexts/ScoreContext';
import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

const GameOver = () => {
    const { lastScore, setLastScore } = useContext(ScoreContext)

    useEffect(() => {
        // setLastScore(scores => ({ ...scores, gamesPlayed: gamesPlayed += 1 }))
    }, []);

    const calculatePercent = () => {
        const percent = lastScore/10 * 100
        if(percent < 0) {
            return 0;
        } else {
            return percent;
        }
    };

    return (
        <section className="game-over">
            <h2>Game Over</h2>
            <h3>You correctly answered</h3>
            <h2>{ calculatePercent()}%</h2>
            <h3>of the questions!</h3>
            <Link to="/dashboard">
                <button type="button" className="home-btn">Home</button>
            </Link>
        </section>
    )
};

export default GameOver;