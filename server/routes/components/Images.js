const Images = require('express').Router();
const {
  Controller: { ImagesController },
} = require('../../Controller');

Images.route('/get-images').get(ImagesController.getImages);

module.exports = { Images };
