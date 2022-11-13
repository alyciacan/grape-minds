import { formatQuestions } from './cleaningFunction';
import topicCodes from '../topicCodes';
const API_key = process.env.REACT_APP_API_KEY;

const checkResponse = (response) => {
    if (!response.ok) {
        throw new Error(response.statusText);
    };
    return response.json();
};

const getWinePairings = (type, price) => {
    return fetch(`https://api.spoonacular.com/food/wine/recommendation?apiKey=${API_key}&wine=${type}&maxPrice=${price}&number=3`)
        .then(resp => checkResponse(resp))
};

const getQuestions = (topic) => {
    return fetch(`https://opentdb.com/api.php?amount=10&category=${topicCodes[topic]}&type=multiple`)
        .then(resp => checkResponse(resp))
        .then(resp => formatQuestions(resp.results))
        .catch(err => err)
};

export { getWinePairings, getQuestions }