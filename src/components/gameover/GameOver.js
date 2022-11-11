import './GameOver.css';
import { ScoreContext } from '../../contexts/ScoreContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const GameOver = () => {
    const { lastScore } = useContext(ScoreContext);

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
            <h2 className="game-over-hdr">Game Over</h2>
            <div className="score-msg-box">
                <h3>You correctly answered</h3>
                <h2 className="gameover-score">{ calculatePercent()}%</h2>
                <h3>of the questions!</h3>
            </div>
            <Link to="/dashboard">
                <button type="button" className="home-btn">Home</button>
            </Link>
        </section>
    )
};

export default GameOver;