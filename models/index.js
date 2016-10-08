var mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost/music-venues");
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/music-venues");
  // URI = "mongodb://heroku_3gbs0pp8:22cbppsvpl3iq8j55stmdhpqvd@ds029466.mlab.com:29466/heroku_3gbs0pp8" );


  module.exports.api = require('./apiController');
  module.exports.venues = require('./venuesController');
