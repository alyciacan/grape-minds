import './GamePlay.css';
import { getQuestions } from '../../utility/apiCalls';
import { ScoreContext } from '../../contexts/ScoreContext';
import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Question from '../question/Question';

const GamePlay = () => {
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);
    const {topics} = useContext(ScoreContext);
    const {lastScore, setLastScore, gamesPlayed, setGamesPlayed} = useContext(ScoreContext);

    useEffect(() => {
        getQuestions(topics[0])
            .then(resp => setQuestions(resp))
            .then(() => setLoading(false))
            .then(() => resetScores())
            .catch(err => setLoading(err))
    }, []);

    const updateStats = () => {
        const game = {score: lastScore, topic: topics[0]};
        setGamesPlayed([game, ...gamesPlayed]);
    };

    const resetScores = () => {
        let copy = lastScore;
        copy = 0;
        setLastScore(copy)
    };

    if(loading) {
        return <p className="loading-msg">loading...</p>
    } else if (!questions.length) {
        return (
            <div className="no-load-box">
                <p>Unable to retrieve questions. Please try again later.</p>
                <Link to="/dashboard">
                    <button type="button" className="error-home-btn">Home</button>
                </Link>
            </div>
        )
    } else {
        return (
            <section className="gameplay">
                < Question questions={ questions } updateStats={ updateStats } />
            </section>
        )
    };
};

export default GamePlay;