const express = require('express');
const app = express();
const dotenv = require('dotenv');
const path =  require('path');
const bodyParser = require('body-parser');

dotenv.config();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.json());

const Router = require('./router/router');
const dataBaseConnect = require('./config/db');

app.use("/api/books" , Router)

dataBaseConnect()
.then(()=>{
    console.log("Database Connected successfully");
app.listen((8000), ()=> {
    console.log(`server listening from ${process.env.PORT} `);
})
})
.catch((err) => {
    console.log("Database not connected");
})