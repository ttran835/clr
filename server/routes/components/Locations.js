const Locations = require('express').Router();
const {
  Controller: { LocationsController },
} = require('../../Controller');

Locations.route('/get-locations').get(LocationsController.getLocations);

module.exports = { Locations };
