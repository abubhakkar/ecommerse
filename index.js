const express = require('express');
const app =express();
const port = 8000;
const product = require('./routes/product')
const connectDb =require('../ecommerceApi/config/mongose')


app.use(express.json())
app.use('/api/v1/products' , product)


app.listen(port, (err) => {
    if(err) console.log("error listening on", port);

    console.log('listening on port', port);
})
