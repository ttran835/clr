const LocationDetails = require('express').Router();
const {
  Controller: { LocationDetailsController },
} = require('../../Controller');

LocationDetails.route('/get-location-details').get(LocationDetailsController.getLocationDetails);

module.exports = { LocationDetails };
