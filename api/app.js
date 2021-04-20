/*eslint-env es6*/
var fs = require('fs');
  
// json file with the data
var data = fs.readFileSync('api/data/data.json');
  
var elements = JSON.parse(data);
const express = require("express");
const app = express();
  
// To solve the cors issue
const cors=require('cors');
   
app.listen(3000, 
    () => console.log("Server Start at the Port"));

app.use(express.static('public'));
app.use(cors({
    origin: "*",
    methods: 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    allowedHeaders: "'X-Requested-With,content-type'",
    credentials: true
}));


app.get('/', alldata);
  
function alldata(req, res) {
    res.send(elements);
}