import express from 'express';
import data from './data.js';

const app = express();

app.get('/api/Product', (req, res) => {
    res.send(data.product);
});

const port = process.env.PORT || 2000;
app.listen(port, () => {
    console.log(`server at http://localhost:${port}`);
});