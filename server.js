const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const user = require('./routes/user.route');


const PORT = 5000;

app.get('/checking', function(req, res){
    res.json({
       "Tutorial": "Welcome to the Node express JWT Tutorial"
    });
 });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect('mongodb://Dev:Dev-69@cluster0-shard-00-00-ikuxo.mongodb.net:27017,cluster0-shard-00-01-ikuxo.mongodb.net:27017,cluster0-shard-00-02-ikuxo.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true',{useNewUrlParser: true}, (err) => {if(err) console.log(err);});

app.use('/user', user);

app.listen(PORT, function(){
   console.log('Server is running on Port',PORT);
});
