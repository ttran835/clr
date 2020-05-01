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
      description:
        'This is where we first met. And I still remember how much you were talking. Omg lmao.',
      map: { lat: 33.734119, lng: -117.997034 },
      showDetails: false,
    },
    {
      place: 'Our first trip!',
      placeImg: seattleSkyline,
      description:
        'I had such a great time with you in Seattle. I wish we could have stayed a bit longer, but I think that weekend was the perfect amount of time to do everything',
      map: { lat: 47.606209, lng: -122.332069 },
      showDetails: false,
    },
    {
      place: 'The most expensive place in the world!',
      placeImg: disney,
      description:
        'I seriously do not like Disneyland, and you cannot change my mind!! It was okay. I had fun with you, its still Dland :(',
      map: { lat: 33.812092, lng: -117.9189769 },
      showDetails: false,
    },
    {
      place: 'First Christmas Dinner!',
      placeImg: ilCielo,
      description:
        'This was such an amazing dining experience. I think this is where I was like. Aww I love this girl teehee.',
      map: { lat: 34.0719156, lng: -118.388428 },
      showDetails: false,
    },
    {
      place: 'Christmas Lights in Long beach',
      placeImg: lbLights,
      description:
        'Remember how I was like, you need to bring a jacket, and comfortable shoes. Tsk tsk tsk',
      map: { lat: 33.754216, lng: -118.1229158 },
      showDetails: false,
    },
    {
      place: 'Feeding the homeless',
      placeImg: fullerton,
      description: 'This was the first that time we did something good together. I hope we can do this again!!',
      map: { lat: 33.866307, lng: -117.9242036 },
      showDetails: false,
    },
  ],
};

export default initializeState;
