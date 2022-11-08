const getLocation = (cityStr) => {
    return fetch(`https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(cityStr)}&key=630cb3c50a7545c0acdfe8d958cdce37&language=en&pretty=1`)            
        .then(resp => resp.json())
        .then(data => console.log(data))
};

const getRestaurants = () => {
    return fetch('https://api.spoonacular.com/food/restaurants/search?apiKey=8535ff2f2de646ae976a09bb457ce754&cuisine=italian&lat=34.7786357&lng=-122.3918135')
        .then(resp => resp.json())
        .then(resp => console.log(resp))
}

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '20160e7b08mshf2b2bcd682b3adap15f17cjsnfd2b9db93c4d',
		'X-RapidAPI-Host': 'travel-places.p.rapidapi.com'
	}
};

const getBurgers = () => {fetch('https://opentdb.com/api.php?amount=10')
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
};
export { getLocation, getRestaurants, getBurgers };