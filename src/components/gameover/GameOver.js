import './GameOver.css';
import { ScoreContext } from '../../contexts/ScoreContext';
import { useContext } from 'react';

const GameOver = () => {
    const { scores } = useContext(ScoreContext)

    const calculatePercent = () => {
        const percent = scores.lastScore/10 * 100
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
        </section>
    )
};

export default GameOver;