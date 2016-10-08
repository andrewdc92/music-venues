var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    db = require('./models');


// serves static files in public directory
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: true }));

var controllers = require('./controllers');


//sets the root route
app.get('/', function (req, res) {
  res.sendFile('views/index.html' , { root : __dirname});
});

app.get('/templates/:name', function templates(req, res) {
  var name = req.params.name;
  res.sendFile(__dirname + '/views/templates/' + name + '.html');
});

// get all the venues



app.get('/api', controllers.venues.index);


app.get('/api', controllers.api.index);
// get all the venues
app.get('/api/venues', controllers.venues.index);
//create a new venue
app.post('/api/venues',controllers.venues.create);
//delete a venue
app.delete('/api/venues/:venuesId', controllers.venues.destroy);
//get one venue
app.get('/api/venues/:venuesId', controllers.venues.show);
//add comments to a venue
app.post('/api/venues/:venuesId/comments', controllers.venueComments.create);

app.put('/api/venues/:venueId', controllers.venues.update);



app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening at http://localhost:3000/');
});
