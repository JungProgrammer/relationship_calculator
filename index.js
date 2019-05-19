const express = require('express');
const bodyParser = require('body-parser');

const resultRequest = require('./requests/result.request.js');

const app = express();

const urlEncodedParser = bodyParser.urlencoded({
    extended: false
});

app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get('/', (req, res) => {
    res.render('index', { nums: {num1: null, num2: null}, answer: null });
});

app.post('/', urlEncodedParser, async (req, res) => {
    if (!req.body) return res.sendStatus(400);

    const nums = req.body;

    const answer = await resultRequest(nums);

    res.render('index', {nums, answer});
});

app.listen(3000);