import { formatQuestions } from './cleaningFunction';
const API_key = process.env.REACT_APP_API_KEY;

const getWinePairings = (type, price) => {
    return fetch(`https://api.spoonacular.com/food/wine/recommendation?apiKey=${API_key}&wine=${type}&maxPrice=${price}&number=3`)
        .then(resp => resp.json())
};

const getQuestions = () => {
    return fetch('https://opentdb.com/api.php?amount=10&category=11&type=multiple')
        .then(resp => resp.json())
        .then(resp => formatQuestions(resp.results))
};

export { getWinePairings, getQuestions }