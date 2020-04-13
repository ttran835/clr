const { Locations } = require('../../database/tables/Locations');

const LocationsController = {
  getLocations: (req, res) => {
    res.send('hello Locations controller');
  },
};

module.exports = { LocationsController };
