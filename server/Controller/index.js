const { ImagesController } = require('./ImagesCon');
const { LocationDetailsController } = require('./LocationDetailsCon');
const { LocationsController } = require('./LocationsCon');
const { MemoriesController } = require('./MemoriesCon');

const Controller = {
  ImagesController,
  LocationDetailsController,
  LocationsController,
  MemoriesController,
};

module.exports = { Controller };
