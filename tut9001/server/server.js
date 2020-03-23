const express = require('express');
const app = express();
const cors = require('cors')
const data = require('./data/data.json')

app.use(cors());
app.use(express.json());

app.get('/input-form', (req, res) => {
    res.status(200).send(data)
})

app.get('/description', (req, res) => {
    res.status(200).send(data)
})

app.listen(8080, () => console.log("server running"))