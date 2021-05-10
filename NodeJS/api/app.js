
var express = require("express");
var bodyParser = require('body-parser');
const cors = require('cors');

var usuario = require('./routes/usuario');


var app = express(); 


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use('/usuarios', usuario);
app.use('/post', usuario);
app.use('/put', usuario);
app.use('/delete', usuario);

app.listen(8123);
