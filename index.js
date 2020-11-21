const express = require('express')
const path = require('path')
var request = require('request');
const fetch = require("node-fetch");
//const weather = require('openweather-apis');
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000
const app = express();

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.get('/', (req, res) => res.render('pages/home'))
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))

const api_key = '5dd7d13462ea2b7ba5176cd85add7658';

function getWeather(){
	var city = document.getElementById("city").value;
	console.log("Beggining weather search in " + city);

	var url = 'api.openweathermap.org/data/2.5/weather?q=London,uk&appid=5dd7d13462ea2b7ba5176cd85add7658'

	fetch(url)
	.then(function(response) {
		return response.json();
	})
	.then(function(data) {
		updatePage(data);
	})
}

function updatePage(data){
	console.log(data);
	document.getElementById('response').innerHTML = data;
}

/*
app.post('/weather', (req, res) => {
	var location = req.body.city;
	setWeather(location);
});

function setWeather(location){
	weather.setLang('en');
	weather.setCity(location);
	weather.setUnits('imperial');
	weather.setAPPID(api_key);

	weather.getTemperature(function(err, temp) {
		console.log(temp);
		setValue(temp);

	});
}

function setValue(temp){
	console.log(temp);
	let val = temp;
	return val;
}
*/



/*app.get('/weather', (req, res) => {
	const api_url = 'api.openweathermap.org/data/2.5/weather?q=London,uk&appid=5dd7d13462ea2b7ba5176cd85add7658';
	const response = fetch(api_url);
	const json = response.json();
	console.log(json);
	//res.json(json);
});
*/

