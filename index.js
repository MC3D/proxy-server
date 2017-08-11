var express = require('express');
var request = require('request');
var app = express();
var cors = require('cors');

app.use(cors()); //allows overriding cross origin policy (use npm install if needed)

app.get('/test', function(req, res){ // listens for request on /api route
 console.log('working!');
 res.send('working!'); // if no errors, send the body of data back to front end
});

/* PUT YOUR CODE BETWEEN COMMENTS */

const BASE_URL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/'
const API_KEY = 'XiPVohbJ1czo1N4Czgvs87NBaWCJMwr4V6P7Q8M4';
let imageUrl = `${BASE_URL}Opportunity/photos?sol=2000&camera=RHAZ (Rear Hazard)&api_key=${API_KEY}`;

app.get('/mars', function(req, res) {
  console.log('mars request', req);
  request(imageUrl, function(error, response, body) {
    if(!error && reponse.statusCode === 200) {
      res.send(body);
    }
  })
});

/* PUT YOUR CODE ABOVE THIS COMMENT */

var port = process.ENV.PORT || 8080;
app.listen(port);
console.log('Server running on port 8080');


/* BreweryDB API Example */

// app.get('/api', function(req, res){ // listens for request on /api route
//   var lat = req.query.lat; // grabs lat and lng queries from the request object
//   var lng = req.query.lng;
//   request('https://api.brewerydb.com/v2/search/geo/point?lat=' + lat + '&lng=' + lng + '&type=beer&hasImages=Y&key=72a751214ab8b53056ac0a6d8376dc2d', function (error, response, body) { // api url
//     if (!error && response.statusCode === 200) {
//       console.log('beer');
//       res.send(body); // if no errors, send the body of data back to front end
//     }
//    });
// });
