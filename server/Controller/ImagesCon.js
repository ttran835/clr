const { Images } = require('../../database/tables/Images');

const ImagesController = {
  getImages: (req, res) => {
    res.send('hello images controller');
  },
};

module.exports = { ImagesController };
