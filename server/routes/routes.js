const router = require('express').Router();
const {
  routeComponents: { Memories, LocationDetails, Locations, Images },
} = require('./components');

router.use('/memories', Memories);
router.use('/locations', Locations);
router.use('/images', Images);
router.use('/location-details', LocationDetails);

module.exports = router;
