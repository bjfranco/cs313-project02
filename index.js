const express = require('express')
const path = require('path')
const fetch = require("node-fetch");
const PORT = process.env.PORT || 5000
const app = express();

app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.get('/', (req, res) => res.render('pages/home'))
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))

const api_key = '5dd7d13462ea2b7ba5176cd85add7658';


app.get('/weather', (req, res) => {
	const api_url = 'api.openweathermap.org/data/2.5/weather?q=London,uk&appid=5dd7d13462ea2b7ba5176cd85add7658';
	const response = fetch(api_url);
	const json = response.json();
	console.log(json);
	//res.json(json);
});
