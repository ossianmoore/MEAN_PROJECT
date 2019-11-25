const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 3000;
const cors = require('cors');
const mongoose = require('mongoose');

//string from mongoDB with username and password to gain access
const mongodb = 'mongodb+srv://admin:Admin123!@recordsdatabasecluster-1rdo8.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(mongodb, {useNewUrlParser:true});

const Schema = mongoose.Schema;

const recordSchema = new Schema({
    title: String,
    artist: String,
    year: String,
    genre: String,
    cover: String,
    price: Number
});

const RecordModel = mongoose.model('record', recordSchema);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers",
  "Origin, X-Requested-With, Content-Type, Accept");
  next();
  });

  app.get('/api/records/records', (req,res,next) => {

    console.log("get request")
    RecordModel.find((err,data)=>{
      res.json({records:data});
    })
  });

  app.delete('/api/records/:id', (req,res) =>{
    console.log(req.params.id);
  
    RecordModel.deleteOne({_id:req.params.id},(error,data)=>{
      if(error)
        res.json(error);
        
      res.json(data);
    })
  });

  app.post('/api/records/records', (req,res) =>{
    console.log('post Sucessfull');
    console.log(req.body)
    console.log(req.body.title);
    console.log(req.body.artist);
    console.log(req.body.year);
    console.log(req.body.genre);
    console.log(req.body.cover);
    console.log(req.body.price);
    
    RecordModel.create({
      title: req.body.title,
      artist: req.body.artist,
      year: req.body.year,
      genre: req.body.genre,
      cover: req.body.genre,
      price: req.body.price
    });
    res.json('data uploaded')
  });

  app.get('/api/records/records/:id',(req,res)=>{
    console.log(req.params.id);
  
    RecordModel.findById(req.params.id, (err, data)=>{
      res.json(data);
    })
  });

  app.put('/api/records/:id', (req, res)=>{
    console.log("Edit" +req.params.id);
    RecordModel.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, data)=>{
      res.send(data);
    })
  });

  app.listen(PORT, function () {
    console.log('Server is running on Port: ', PORT);
  });



