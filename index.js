const express = require('express');
const router = require('./src/Router/Router');
const mongoose = require('mongoose');
const Authencation = require('./src/Middleware/Auth');
const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/Storage").then(()=> console.log("Connection sucessfull"))
.catch((error)=> console.log("error  ", error));
app.use(Authencation);

app.use("/", router);
app.listen(8080, ()=> console.log("app is listening on port 8080"));