require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose')
const session = require('express-session')

const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (rew,res) =>{
    res.send("Hello World")
})

app.listen(PORT, (req, res) => {
    console.log(`Server Started at: http://localhost:${PORT}`);
  });
