import seattleSkyline from 'Imgs/seattle-skyline.jpg';
import disney from 'Imgs/disneyland.jpg';
import coffeeTale from 'Imgs/coffee-tale.jpg';
import lbLights from 'Imgs/lb-christmas-light.jpg';
import ilCielo from 'Imgs/il-cielo.jpg';
import fullerton from 'Imgs/fullerton.jpg';

const initializeState = {
  places: [
    {
      place: 'The Coffee Tale',
      placeImg: coffeeTale,
      address: '2727 Maricopa St, Torrance, CA 90503',
      map: { lat: 33.734119, lng: -117.997034 },
      showDetails: false,
    },
    {
      place: 'Our first trip!',
      placeImg: seattleSkyline,
      address: '22840 Hawthorne Blvd, Torrance, CA 90505',
      map: { lat: 47.606209, lng: -122.332069 },
      showDetails: false,
    },
    {
      place: 'The most expensive place in the world!',
      placeImg: disney,
      address: '22840 Hawthorne Blvd, Torrance, CA 90505',
      map: { lat: 33.812092, lng: -117.9189769 },
      showDetails: false,
    },
    {
      place: 'First Christmas Dinner!',
      placeImg: ilCielo,
      address: '22840 Hawthorne Blvd, Torrance, CA 90505',
      map: { lat: 34.0719156, lng: -118.388428 },
      showDetails: false,
    },
    {
      place: 'Christmas Lights in Long beach',
      placeImg: lbLights,
      address: '22840 Hawthorne Blvd, Torrance, CA 90505',
      map: { lat: 33.754216, lng: -118.1229158 },
      showDetails: false,
    },
    {
      place: 'Feeding the homeless',
      placeImg: fullerton,
      address: '22840 Hawthorne Blvd, Torrance, CA 90505',
      map: { lat: 33.866307, lng: -117.9242036 },
      showDetails: false,
    },
  ],
};

export default initializeState;
