//initialise express, cors, mongoose. Set port to 3000
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 3000;
const cors = require('cors');
const mongoose = require('mongoose');

//string from mongoDB with username and password to gain access
const mongodb = 'mongodb+srv://admin:Admin123!@recordsdatabasecluster-1rdo8.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(mongodb, {useNewUrlParser:true});

//structure for object to be stored and read
const Schema = mongoose.Schema;
const recordSchema = new Schema({
    title: String,
    artist: String,
    year: String,
    genre: String,
    cover: String,
    price: Number
});

//model is a subclass of mongoose used to create a new document based on the recordModel
const RecordModel = mongoose.model('record', recordSchema);

//use cors to manage cross origin requests
//body parser is used as a middleware module to extract the body of an incoming request
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//function for http request, response & callback
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers",
  "Origin, X-Requested-With, Content-Type, Accept");
  next();
  });

  //function to get all recrods from DB
  app.get('/api/records/records', (req,res,next) => {
    RecordModel.find((err,data)=>{
      res.json({records:data});
    })
  });

  //function to delete single object from DB. Object is identified by the unique _id which is used to select and delete from DB.
  app.delete('/api/records/records/:id', (req,res) =>{
    console.log(req.params.id);
  
    RecordModel.deleteOne({_id:req.params.id},(error,data)=>{
      if(error)
        res.json(error);
      res.json(data);
    })
  })


  //post function to add object to DB with model structure
  app.post('/api/records/records', (req,res) =>{
    console.log('post Sucessfull');
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

  //function to get single record from DB. identified with unide _id that is carried as a paramter from the previous page.
  app.get('/api/records/records/:id',(req,res)=>{
    console.log(req.params.id);
    RecordModel.findById(req.params.id, (err, data)=>{
      res.json(data);
    })
  });

  //function to update exisitng record. Identifies record through unique _id from routerLink.
  app.put('/api/records/records/:id', (req, res)=>{
    console.log("Edit" +req.params.id);
    RecordModel.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, data)=>{
      res.send(data);
    })
  });


  //function to begin server on port that was initialised at top of page
  app.listen(PORT, function () {
    console.log('Server is running on Port: ', PORT);
  });



