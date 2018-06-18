const express = require('express');
const mongoose = require('mongoose');

var app = express();
var root = express.Router();
var api = express.Router();

var uri = 'mongodb://localhost/SampleDB';
mongoose.connect(uri).then(() => {
    console.log('Connected to SampleDB');
}).catch((err) => {
    console.log(`Error : ${err}`);
});

var Location = mongoose.model('Location', {
    _id: Number,
    location: String
}, 'locations');

app.use('/', root);
app.use('/api/locations', api);

api.get('/', function (req, res, next) {
    var locations = [
        { "_id" : 1, "location" : "Bangalore" },
        { "_id" : 2, "location" : "Chennai" },
        { "_id" : 3, "location" : "pune" },
        { "_id" : 4, "location" : "Hyderabad" }
    ];
    Location.find((err, docs) => {
        docs.forEach((doc) => {
            locations.push({ id: doc._id, location: doc.location });
        });
        res.status(200).json(locations);
    });
});

root.get('/', (req, res, next) => {
    res.send('<h1>Location RESTFul Service</h1>');
});

app.listen(3000, () => {
    console.log('Listening on port 3000 at localhost');
});
