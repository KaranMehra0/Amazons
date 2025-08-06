import express from 'express';
// import data from './data.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import seedRouter from './routes/seedRoutes.js';
import productRouter from './routes/productRoutes.js';

dotenv.config();

mongoose
.connect(process.env.MONGODB_URI)
.then(()=>{
    console.log('connected to db');
})
.catch((err)=>{
    console.log(err.message);
})


const app = express();
app.use('/api/seed', seedRouter)
app.use('/api/product', productRouter)

// app.get('/api/Product', (req, res) => {
//     res.send(data.product);
// });

// app.get('/api/Product/slug/:slug', (req, res) => {
//     const products=data.product.find((i) => i.slug === req.params.slug);
//     if (products){
//         res.send(products);
//     }else{
//         res.status(404).send({message:'Product Not Found'})
//     }
// });

// app.get('/api/Product/:id', (req, res) => {
//     const products=data.product.find((i) => i._id === req.params.id);
//     if (products){
//         res.send(products);
//     }else{
//         res.status(404).send({message:'Product Not Found'})
//     }
// });

const port = process.env.PORT || 2000;
app.listen(port, () => {
    console.log(`server at http://localhost:${port}`);
});