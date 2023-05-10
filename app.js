// Establish Requirements
var express = require('express');
var app = express();
var axios = require('axios').default;

app.use('/static', express.static("public"));
app.set("view engine", "ejs");

// Create "Random Cat Generator" Method
app.get('/', function(req, res){
    // Create array
    let catData = {}

    // Get API data AND Set data in array
    axios.get('https://api.thecatapi.com/v1/images/search').then(function(response){
        catData = response.data[0]
        res.render('todo.ejs', {catData: catData});
    })
})

// Identify Port (3000 was unavailable)
app.listen(3001, function(){
    console.log('App listening on port 3001')
})