import express from 'express';
import data from './data.js';

const app = express();

app.get('/api/Product', (req, res) => {
    res.send(data.product);
});

app.get('/api/Product/slug/:slug', (req, res) => {
    const products=data.product.find((i) => i.slug === req.params.slug);
    if (products){
        res.send(products);
    }else{
        res.status(404).send({message:'Product Not Found'})
    }
});

const port = process.env.PORT || 2000;
app.listen(port, () => {
    console.log(`server at http://localhost:${port}`);
});