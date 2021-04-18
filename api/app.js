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

app.get('/data', alldata);
  
function alldata(request, response) {
    response.send(elements);
}
app.use(express.static('public'));
app.use(cors());