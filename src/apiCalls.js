const API_key = process.env.REACT_APP_API_KEY;

const getWinePairings = (type, price) => {
    return fetch(`https://api.spoonacular.com/food/wine/recommendation?apiKey=${API_key}&wine=${type}&maxPrice=${price}&number=3`)
        .then(resp => resp.json())
}

export { getWinePairings }