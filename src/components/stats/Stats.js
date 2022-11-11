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
            return (
                <figure>
                    <h4 className="stat">No games played!</h4>
                    <p>Total Games Played</p>
                </figure>
                )
        } else {
            return (
                <figure>
                    <h4 className="stat">{ gamesPlayed.length }</h4>
                    <p>Total Games Played</p>

                </figure>
            )
        }
    };

    const calcAvgScore = () => {
        if(!gamesPlayed.length) {
            return (
                <figure>
                    <h4 className="stat">No games played!</h4>
                    <p>Average Score</p>
                </figure>
                )
        } else {
            const total =  gamesPlayed.reduce((acc, curr) => {
                return acc += curr.score
                }, 0)
            return (
                <figure>
                    <h4 className="stat">{`${calculatePercent(total, gamesPlayed.length)}%`}</h4>
                    <p>Average Score</p>
                </figure>
            )
        }
    };

    const calcMostPlayedTrivia = () => {
        if(!gamesPlayed.length) {
            return (
                <figure>
                    <h4 className="stat">No games played!</h4>
                    <p>Most-Played Topic</p>
                </figure>
                )
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
                    <h4 className="stat">{ mostPlayedTopic }</h4>
                    <p>Most-Played Topic</p>
                </figure>
            )
        }
    };
    const calcMostSavedWine = () => {
        if(!wines.length) {
           return (
                <figure>
                    <h4 className="stat">No games played!</h4>
                    <p>Most-Saved Varietal</p>
                </figure>
                )
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
                <h4 className="stat">{ mostSavedType.split("_").join(" ") }</h4>
                <p>Most-Saved Varietal</p>
            </figure>
        )
        };
    };

    return (
        <section className="stats-box">
            { calcTotalGamesPlayed() }
            { calcAvgScore() }
            { calcMostPlayedTrivia() }
            { calcMostSavedWine() }
        </section>
    )
};

export default Stats;