const mongoose = require('mongoose');
const express = require('express');
const alphaModel = require('./model/alphabet')
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.DB || "mongodb://localhost:27017/Alphabet")
  .then(()=> console.log('Connected to Mongodb...'))
  .catch(err=>console.log(err));

app.get('/alphabets' , async (req, res)=> {
    const alphabet = await alphaModel.find()
    res.send(alphabet).status(200);
});

app.post('/alphabets' , async (req, res)=> {
    const alphabet = new alphaModel(req.body)
    alphabet.save();
    
    res.send(alphabet).status(200);
})

app.get('/', (req, res) => {
  res.send('Server is up and running!');
})

app.listen(process.env.PORT,()=> console.log('Server connected...'))