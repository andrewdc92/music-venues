var db = require('../models');


function index(req, res) {
  db.Venue.find({}, function(err, allVenues) {
    res.json(allVenues);
  });
}

function create(req, res) {
  console.log('body', req.body);

  db.Venue.create(req.body, function(err, venue) {
    if (err) { console.log('error', err); }
    console.log(venue);
    res.json(venue);
  });
}

function show(req, res) {
  db.Venue.findById(req.params.venuesId, function(err, foundVenue) {
    if(err) { console.log('venuesController.show error', err); }
    console.log('venuesController.show responding with', foundVenue);
    res.json(foundVenue);
  });
}

function update(req, res) {
  console.log('updating with data', req.body);
  db.Venue.findById(req.params.venueId, function(err, foundVenue) {
    if(err) { console.log('venuesController.update error', err); }
    foundVenue.name = req.body.name;
    foundVenue.address = req.body.address;
    foundVenue.website = req.body.website;
    foundVenue.save(function(err, savedVenue) {
      if(err) { console.log('saving the updated venue failed'); }
      res.json(savedVenue);
    });
  });




function destroy(req, res) {
  db.Venue.findOneAndRemove({ _id: req.params.venuesId }, function(err, foundVenue){
    res.json(foundVenue);
  });
}




module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
  update: update
};
