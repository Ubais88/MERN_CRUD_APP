const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
const userRoute  = require('./routes/userRoute.js');
dotenv.config();

 
mongoose.connect(process.env.URI)
.then(() => { 
    console.log('connected successfully by db');
})
.catch((err) => {
    console.log('error while connecting');
})

const PORT = 8000;
app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
    console.log("listening on port",PORT);
}) 

app.use(userRoute);

 

