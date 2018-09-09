const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');

const middlewares = [
    express.static(path.join(__dirname, 'public'))
]
app.use(middlewares);

app.use((req, res, next) => {
    res.status(404).send('Error 404: Not Found.');
})

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Error 500: Server Error');
})

app.listen(8001, () => {
    console.log('lrhslive running at http://localhost:8001');
})