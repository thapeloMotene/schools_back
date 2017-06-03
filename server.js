var express = require('express');
var mongojs = require('mongojs');
var cors = require('cors');
var morgan = require('morgan');

var db = mongojs('local', ['schools'])


var app = express();




//middlewares
app.use(cors());
app.use(morgan('dev'));
app.get('/', (req,res,next)=>{
    res.json('Schools Api Running');
});

app.get('/schools', (req,res,next)=>{
    /*db.schools.find({Province: "GP"}, (err,schools)=>{
            if (err) return next(err);
            res.json(schools);
    }); */

    db.schools.find({Province: "GP"}).limit(0).skip(0, function(err, docs) { res.json(docs); });
});

app.listen(3000, ()=>{
    console.log('app running on port 3000');
})