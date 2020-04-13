const { LocationDetails } = require('../../database/tables/LocationDetails');

const LocationDetailsController = {
  getLocationDetails: (req, res) => {
    res.send('hello LocationDetails controller');
  },
};

module.exports = { LocationDetailsController };
