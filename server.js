const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

//INICIANDO O APP
const app = express();
app.use(express.json());
app.use(cors());

//INCIANDO BD
mongoose.connect(
    'mongodb://localhost:27017/nodeapi', 
    { useNewUrlParser: true, useUnifiedTopology: true }
)

requireDir('./src/models');

//ROTAS
app.use("/api", require("./src/routes"));   

app.listen(3001);