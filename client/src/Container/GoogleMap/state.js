// Need to get store information => Once store information obtained
// Start setting the state.
// Store will need header of store
// Get Direction
// Need to place url into query => update string to show query

const state = {
  places: [
    {
      store: 'Centinela Feed & Pet Supplies',
      storeImg: 'https://centinela-feed.mybigcommerce.com/content/stores/images/dog-wash-icon.png',
      address: '2727 Maricopa St, Torrance, CA 90503',
      map: { lat: 33.8397379, lng: -118.3342397 },
      showDetails: false,
    },
    {
      store: 'Centinela Feed & Pet Supplies',
      storeImg: 'https://centinela-feed.mybigcommerce.com/content/stores/images/dog-wash-icon.png',
      address: '22840 Hawthorne Blvd, Torrance, CA 90505',
      map: { lat: 33.8199705, lng: -118.3505989 },
      showDetails: false,
    },
  ],
};
const initializeState = () => {
  return state;
};

module.exports = { initializeState };
