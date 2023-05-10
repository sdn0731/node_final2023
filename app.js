// Establish Requirements
const { toFormData } = require('axios');
var express = require('express');
var app = express();
var axios = require('axios').default;

app.use('/static', express.static("public"));
app.set("view engine", "ejs");

// Default Page - Random Cat Generator
app.get('/', function(req, res){
    // Generate Random Image

    // Initialize variables
    let catData = {}

    // Call API and retrieve cat image
    axios.get('https://api.thecatapi.com/v1/images/search').then(function(response){
        catData = response.data[0]
    })

    // Initialize variables
    let catFact = {}

    axios.get('https://catfact.ninja/fact').then(function(response){
        catFact = response.data
        res.render('todo.ejs', {catData: catData, catFact: catFact})
    })

})

// Identify Port (3000 was unavailable)
app.listen(3001, function(){
    console.log('App listening on port 3001')
})