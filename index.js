const express = require('express')
const path = require('path')
var request = require('request');
const fetch = require("node-fetch");
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

