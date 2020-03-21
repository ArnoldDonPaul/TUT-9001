const express = require('express');
const app = express();
const cors = require('cors')
const data = require('./data/data.json')
const upper = require('./data/upper.json')

app.use(cors());
app.use(express.json());

app.get('/input-form', (req, res) => {
    res.status(200).send(data)
})

app.get('/input-form', (req, res) => {
    res.status(200).send(upper)
})

app.listen(8080, () => console.log("server running"))