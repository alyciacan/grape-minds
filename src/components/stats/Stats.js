import './Stats.css';
import { ScoreContext } from '../../contexts/ScoreContext';
import { WineContext } from '../../contexts/WineContext';
import { useContext } from 'react';

const Stats = () => {
    const { gamesPlayed } = useContext(ScoreContext);
    const { wines } = useContext(WineContext);

    const calculatePercent = (total, denom) => {
        const percent = total/denom * 100
        if(percent < 0) {
            return 0;
        } else {
            return percent;
        }
    };

    const calcTotalGamesPlayed = () => {
        if(!gamesPlayed.length) {
            return <h4>No games played!</h4>
        } else {
            return (
                <figure>
                    <p>Total Games Played:</p>
                    <h4>{ gamesPlayed.length }</h4>
                </figure>
            )
        }
    };

    const calcAvgScore = () => {
        if(!gamesPlayed.length) {
            return <h4>No games played!</h4>
        } else {
            const total =  gamesPlayed.reduce((acc, curr) => {
                return acc += curr.score
                }, 0)
            return (
                <figure>
                    <p>Average Score:</p>
                    <h4>{`${calculatePercent(total, gamesPlayed.length)}%`}</h4>
                </figure>
            )
        }
    };

    const calcMostPlayedTrivia = () => {
        if(!gamesPlayed.length) {
            return <h4>No games played!</h4>
        } else {
            const frequencyObj = gamesPlayed.reduce((newObj, currGame) => {
                newObj[currGame.topic] = newObj[currGame.topic] ? newObj[currGame.topic] + 1 : 1
                return newObj;
            }, {})
            const mostPlayedTopic = Object.keys(frequencyObj).reduce((higherTopic, lowerTopic) => {
                if(frequencyObj[higherTopic] > frequencyObj[lowerTopic]) {
                    return higherTopic;
                } return lowerTopic;
            });
            return (
                <figure>
                    <p>Most-Played Topic:</p>
                    <h4>{ mostPlayedTopic }</h4>
                </figure>
            )
        }
    };
    const calcMostSavedWine = () => {
        if(!wines.length) {
            return <h4>No wines saved!</h4>
        } else {
        const frequencyObj = wines.reduce((newObj, currWine) => {
            newObj[currWine.type] = newObj[currWine.type] ? newObj[currWine.type] + 1 : 1
            return newObj;
        }, {})
        const mostSavedType = Object.keys(frequencyObj).reduce((higherType, lowerType) => {
            if(frequencyObj[higherType] > frequencyObj[lowerType]) {
                return higherType;
            } return lowerType;
        });
        return (
            <figure>
                <p>Most-Saved Varietal:</p>
                <h4>{ mostSavedType.split("_").join(" ") }</h4>
            </figure>
        )
        };
    };

    return (
        <section className="stats-box">
            <h3>My Trivia Stats</h3>
            { calcTotalGamesPlayed() }
            { calcAvgScore() }
            { calcMostPlayedTrivia() }
            { calcMostSavedWine() }
        </section>
    )
};

export default Stats;